import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

export async function POST() {
  try {
    // Clear categories cache
    await redis.del('categories:unique');
    
    // Clear all dashboard cache entries (pattern matching)
    const keys = await redis.keys('dashboard:*');
    if (keys.length > 0) {
      await redis.del(...keys);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Cache cleared successfully',
      clearedKeys: keys.length + 1 
    });
  } catch (error) {
    console.error('Clear cache error:', error);
    return NextResponse.json(
      { error: 'Failed to clear cache' },
      { status: 500 }
    );
  }
}



