import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { calculateGlucoseStats } from '@/lib/glucose-stats';

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

    // Only get pre-calculated stats from the database - no on-the-fly calculations
    const stats = await prisma.glucoseStats.findUnique({
      where: { userId: user.id },
    });

    // If stats exist in the database, return them
    if (stats) {
      // Format the stats to match the expected structure from calculateGlucoseStats
      const formattedStats = {
        average: stats.average,
        standardDeviation: stats.standardDeviation,
        highCount: stats.highCount,
        lowCount: stats.lowCount,
        inRangeCount: stats.inRangeCount,
        totalReadings: stats.totalReadings,
        highPercentage: stats.highPercentage,
        lowPercentage: stats.lowPercentage,
        inRangePercentage: stats.inRangePercentage,
        minGlucose: stats.minGlucose,
        maxGlucose: stats.maxGlucose,
        timeInRange: stats.timeInRange,
        readings: [], // Empty array since we don't need to return all readings
        lastCalculated: stats.lastCalculated,
      };

      return NextResponse.json({ stats: formattedStats });
    }

    // If no pre-calculated stats exist, return empty stats with a flag indicating recalculation is needed
    return NextResponse.json({
      stats: calculateGlucoseStats([]),
      needsCalculation: true,
      message: "No statistics have been calculated yet. Please upload data or recalculate statistics."
    });
  } catch (error) {
    console.error('Error fetching glucose statistics:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch glucose statistics',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
} 