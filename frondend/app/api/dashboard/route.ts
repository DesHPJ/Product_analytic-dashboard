import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

export interface DashboardFilters {
  dateFrom?: string;
  dateTo?: string;
  category?: string;
  sortBy?: 'date_sold' | 'rating' | 'actual_price_inr' | 'product_name';
  sortOrder?: 'asc' | 'desc';
  page?: number;
}

export interface ProductData {
  ai_table_identifier: string;
  product_id: string | null;
  date_sold: Date | null;
  product_name: string | null;
  category: string | null;
  actual_price_inr: string | null;
  rating: string | null;
  about_product: string | null;
  user_name_usd: string | null;
  review_title: string | null;
  review_content: string | null;
  product_link: string | null;
}

const PAGE_SIZE = 20;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const filters: DashboardFilters = {
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
      category: searchParams.get('category') || undefined,
      sortBy: (searchParams.get('sortBy') as DashboardFilters['sortBy']) || 'date_sold',
      sortOrder: (searchParams.get('sortOrder') as DashboardFilters['sortOrder']) || 'desc',
      page: parseInt(searchParams.get('page') || '1'),
    };

    // Create cache key
    const cacheKey = `dashboard:${JSON.stringify(filters)}`;
    
    // Try to get cached data
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    // Build where clause
    const where: any = {};
    
    if (filters.dateFrom || filters.dateTo) {
      where.date_sold = {};
      if (filters.dateFrom) {
        where.date_sold.gte = new Date(filters.dateFrom);
      }
      if (filters.dateTo) {
        where.date_sold.lte = new Date(filters.dateTo);
      }
    }
    
    if (filters.category) {
      where.category = {
        contains: filters.category,
        mode: 'insensitive',
      };
    }

    // Build order by clause
    const orderBy: any = {};
    if (filters.sortBy === 'rating') {
      orderBy.rating = filters.sortOrder;
    } else if (filters.sortBy === 'actual_price_inr') {
      orderBy.actual_price_inr = filters.sortOrder;
    } else if (filters.sortBy === 'product_name') {
      orderBy.product_name = filters.sortOrder;
    } else {
      orderBy.date_sold = filters.sortOrder;
    }

    // Get total count
    const totalCount = await prisma.ai_table_product_list.count({ where });
    
    // Get paginated data
    const skip = ((filters.page || 1) - 1) * PAGE_SIZE;
    const products = await prisma.ai_table_product_list.findMany({
      where,
      orderBy,
      skip,
      take: PAGE_SIZE,
    });

    const response = {
      data: products,
      pagination: {
        page: filters.page || 1,
        pageSize: PAGE_SIZE,
        totalCount,
        totalPages: Math.ceil(totalCount / PAGE_SIZE),
        hasMore: skip + PAGE_SIZE < totalCount,
      },
      filters,
    };

    // Cache for 5 minutes
    await redis.setex(cacheKey, 300, JSON.stringify(response));

    return NextResponse.json(response);
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}


