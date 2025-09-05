import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const filters = {
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
      category: searchParams.get('category') || undefined,
    };

    // Create cache key for stats
    const cacheKey = `stats:${JSON.stringify(filters)}`;
    
    // Try to get cached stats
    let cachedStats;
    try {
      cachedStats = await redis.get(cacheKey);
    } catch (redisError) {
      console.log('Redis not available for stats:', redisError);
    }
    
    if (cachedStats) {
      return NextResponse.json(JSON.parse(cachedStats));
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

    // Get all filtered products to calculate stats
    const filteredProducts = await prisma.ai_table_product_list.findMany({
      select: {
        category: true,
        rating: true,
      },
      where,
    });

    // Calculate unique categories
    const uniqueCategories = new Set(
      filteredProducts
        .map(p => p.category?.split('|')[0])
        .filter(Boolean)
    ).size;

    // Calculate average rating
    const validRatings = filteredProducts
      .map(p => parseFloat(p.rating || '0'))
      .filter(rating => !isNaN(rating) && rating > 0);
    
    const avgRating = validRatings.length > 0 
      ? validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length
      : 0;

    // Get total count
    const totalCount = await prisma.ai_table_product_list.count({ where });

    const stats = {
      totalProducts: totalCount,
      uniqueCategories,
      avgRating: Math.round(avgRating * 10) / 10, // Round to 1 decimal
    };

    // Cache for 2 minutes
    try {
      await redis.setex(cacheKey, 120, JSON.stringify(stats));
    } catch (redisError) {
      console.log('Redis caching failed for stats:', redisError);
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Dashboard stats API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
