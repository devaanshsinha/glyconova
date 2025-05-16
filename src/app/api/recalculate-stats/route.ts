import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { updateUserGlucoseStats } from '@/lib/glucose-stats';

export async function POST(request: NextRequest) {
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
        { error: 'User not found' }, 
        { status: 404 }
      );
    }

    // Update the statistics
    const success = await updateUserGlucoseStats(user.id);

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Glucose statistics recalculated successfully',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to recalculate glucose statistics. No readings found or an error occurred.',
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Error recalculating glucose statistics:', error);
    return NextResponse.json(
      { 
        error: 'Failed to recalculate glucose statistics',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
} 