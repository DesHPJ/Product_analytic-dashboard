import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

export async function GET() {
  try {
    // Try to get cached categories
    const cacheKey = 'categories:unique';
    let cachedCategories;
    
    try {
      cachedCategories = await redis.get(cacheKey);
    } catch (redisError) {
      console.log('Redis not available, fetching from database:', redisError);
    }
    
    if (cachedCategories) {
      console.log('Returning cached categories:', JSON.parse(cachedCategories));
      return NextResponse.json(JSON.parse(cachedCategories));
    }

    // Get all categories from database (not using distinct since we need to process them)
    const categoriesData = await prisma.ai_table_product_list.findMany({
      select: {
        category: true,
      },
      where: {
        category: {
          not: null,
          not: '',
        },
      },
    });

    // Extract unique main categories (before the | separator)
    const categorySet = new Set<string>();
    
    categoriesData.forEach(item => {
      if (item.category) {
        // Split by | and take the first part (main category)
        const mainCategory = item.category.split('|')[0]?.trim();
        if (mainCategory && mainCategory.length > 0) {
          categorySet.add(mainCategory);
        }
      }
    });

    const categories = Array.from(categorySet).sort();

    console.log('Found categories:', categories);
    console.log('Total categories count:', categories.length);

    // Cache for 1 hour
    try {
      await redis.setex(cacheKey, 3600, JSON.stringify(categories));
    } catch (redisError) {
      console.log('Redis caching failed:', redisError);
    }

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}


