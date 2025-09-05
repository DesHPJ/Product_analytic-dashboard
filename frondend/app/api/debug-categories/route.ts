import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get first 10 categories to see the raw data format
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
      take: 20, // Limit to 20 for debugging
    });

    // Also get the total count
    const totalCount = await prisma.ai_table_product_list.count({
      where: {
        category: {
          not: null,
          not: '',
        },
      },
    });

    return NextResponse.json({
      totalRecords: totalCount,
      sampleCategories: categoriesData,
      uniqueMainCategories: Array.from(
        new Set(
          categoriesData
            .map(item => item.category?.split('|')[0]?.trim())
            .filter(Boolean)
        )
      ).sort()
    });
  } catch (error) {
    console.error('Debug categories error:', error);
    return NextResponse.json(
      { error: 'Failed to debug categories', details: error },
      { status: 500 }
    );
  }
}



