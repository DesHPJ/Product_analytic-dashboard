"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Filter, X } from 'lucide-react';

export interface FilterState {
  dateFrom: string;
  dateTo: string;
  category: string;
  sortBy: 'date_sold' | 'rating' | 'actual_price_inr' | 'product_name';
  sortOrder: 'asc' | 'desc';
}

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

export default function Filters({ filters, onFiltersChange, onReset }: FiltersProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        console.log('Fetching categories...');
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Categories received:', data);
        console.log('Categories count:', data.length);
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const updateFilters = (key: keyof FilterState, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const hasActiveFilters = filters.dateFrom || filters.dateTo || filters.category;

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl text-white">
          <Filter className="w-5 h-5 neon-blue" />
          Filters & Sorting
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">From Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => updateFilters('dateFrom', e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 focus:border-blue-500 glow-blue text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">To Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                value={filters.dateTo}
                onChange={(e) => updateFilters('dateTo', e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 focus:border-blue-500 glow-blue text-white"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Category</label>
            <Select
              value={filters.category || "all"}
              onValueChange={(value) => updateFilters('category', value === "all" ? "" : value)}
            >
              <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-purple-500 glow-purple text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                <SelectItem value="all">All Categories</SelectItem>
                {loading ? (
                  <SelectItem value="loading" disabled>Loading...</SelectItem>
                ) : (
                  categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Options */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Sort By</label>
            <div className="flex gap-2">
              <Select
                value={filters.sortBy}
                onValueChange={(value) => updateFilters('sortBy', value as FilterState['sortBy'])}
              >
                <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 glow-cyan text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="date_sold">Date Sold</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="actual_price_inr">Price</SelectItem>
                  <SelectItem value="product_name">Product Name</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filters.sortOrder}
                onValueChange={(value) => updateFilters('sortOrder', value as FilterState['sortOrder'])}
              >
                <SelectTrigger className="w-24 bg-gray-800/50 border-gray-700 focus:border-cyan-500 glow-cyan text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="desc">Desc</SelectItem>
                  <SelectItem value="asc">Asc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <div className="flex justify-end pt-2">
            <Button
              onClick={onReset}
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 neon-blue"
            >
              <X className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


