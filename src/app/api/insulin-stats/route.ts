import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { 
          error: 'User not found',
          stats: null
        }, 
        { status: 404 }
      );
    }

    // Get pre-calculated insulin stats from the database
    const stats = await prisma.insulinStats.findUnique({
      where: { userId: user.id },
    });

    // If stats exist in the database, return them
    if (stats) {
      return NextResponse.json({ stats });
    }

    // If no pre-calculated stats exist, return a flag indicating no data
    return NextResponse.json({
      stats: null,
      noData: true,
      message: "No insulin statistics available. Please upload Omnipod data."
    });
  } catch (error) {
    console.error('Error fetching insulin stats:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch insulin statistics',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
} 