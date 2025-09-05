"use client";

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Filters, { FilterState } from './filters';
import ProductCard, { Product } from './product-card';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Database, TrendingUp, Package, Star } from 'lucide-react';

interface DashboardResponse {
  data: Product[];
  pagination: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasMore: boolean;
  };
  filters: FilterState;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [dashboardStats, setDashboardStats] = useState({
    totalProducts: 0,
    uniqueCategories: 0,
    avgRating: 0,
  });
  const [filters, setFilters] = useState<FilterState>({
    dateFrom: '',
    dateTo: '',
    category: '',
    sortBy: 'date_sold',
    sortOrder: 'desc',
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchProducts = useCallback(async (page: number, reset: boolean = false) => {
    if (loading) return;
    
    setLoading(true);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        sortBy: filters.sortBy,
        sortOrder: filters.sortOrder,
      });

      if (filters.dateFrom) params.append('dateFrom', filters.dateFrom);
      if (filters.dateTo) params.append('dateTo', filters.dateTo);
      if (filters.category) params.append('category', filters.category);

      const response = await fetch(`/api/dashboard?${params}`);
      const data: DashboardResponse = await response.json();

      if (reset) {
        setProducts(data.data);
      } else {
        setProducts(prev => [...prev, ...data.data]);
      }

      setHasMore(data.pagination.hasMore);
      setTotalCount(data.pagination.totalCount);
      setCurrentPage(page);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [filters, loading]);

  // Fetch dashboard stats based on current filters
  useEffect(() => {
    async function fetchDashboardStats() {
      try {
        const params = new URLSearchParams();

        if (filters.dateFrom) params.append('dateFrom', filters.dateFrom);
        if (filters.dateTo) params.append('dateTo', filters.dateTo);
        if (filters.category) params.append('category', filters.category);

        const response = await fetch(`/api/dashboard-stats?${params}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        
        const stats = await response.json();
        
        if (stats.error) {
          throw new Error(stats.error);
        }
        
        setDashboardStats(stats);
        setTotalCount(stats.totalProducts);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
        // Fallback to default stats
        setDashboardStats({
          totalProducts: 0,
          uniqueCategories: 0,
          avgRating: 0,
        });
      }
    }
    fetchDashboardStats();
  }, [filters]);

  // Initial load
  useEffect(() => {
    fetchProducts(1, true);
  }, [filters]);

  // Load more when scrolling
  useEffect(() => {
    if (inView && hasMore && !loading && !initialLoading) {
      fetchProducts(currentPage + 1);
    }
  }, [inView, hasMore, loading, initialLoading, currentPage, fetchProducts]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      category: '',
      sortBy: 'date_sold',
      sortOrder: 'desc',
    });
  };

  const getStats = () => {
    return {
      totalProducts: dashboardStats.totalProducts,
      avgRating: dashboardStats.avgRating,
      uniqueCategories: dashboardStats.uniqueCategories,
      loadedProducts: products.length,
    };
  };

  const stats = getStats();

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin neon-blue mx-auto mb-4" />
          <p className="neon-blue text-lg">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4 space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold neon-blue mb-2 glow-blue">
          Product Analytics Dashboard
        </h1>
        <p className="text-gray-400 text-lg">
          Real-time insights into product performance and customer feedback
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 neon-blue" />
              <div>
                <p className="text-2xl font-bold text-white">{stats.totalProducts.toLocaleString()}</p>
                <p className="text-sm text-gray-400">Total Products</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 neon-cyan" />
              <div>
                <p className="text-2xl font-bold text-white">{stats.avgRating.toFixed(1)}</p>
                <p className="text-sm text-gray-400">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 neon-purple" />
              <div>
                <p className="text-2xl font-bold text-white">{stats.uniqueCategories}</p>
                <p className="text-sm text-gray-400">Categories</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 neon-blue" />
              <div>
                <p className="text-2xl font-bold text-white">{stats.loadedProducts}</p>
                <p className="text-sm text-gray-400">Loaded</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Filters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onReset={handleResetFilters}
      />

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={`${product.ai_table_identifier}-${index}`} product={product} />
          ))}
        </div>
      ) : (
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Package className="w-16 h-16 neon-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Products Found</h3>
            <p className="text-gray-400">
              Try adjusting your filters to see more results
            </p>
          </CardContent>
        </Card>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="flex items-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin neon-blue" />
            <span className="neon-blue">Loading more products...</span>
          </div>
        </div>
      )}

      {/* Infinite Scroll Trigger */}
      {hasMore && !loading && (
        <div ref={ref} className="h-10" />
      )}

      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">
            Showing all {totalCount.toLocaleString()} results
          </p>
        </div>
      )}
    </div>
  );
}


