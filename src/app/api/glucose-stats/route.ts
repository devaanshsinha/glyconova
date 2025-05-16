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

    // Get the user's glucose readings
    const glucoseReadings = await prisma.glucoseReading.findMany({
      where: { userId: user.id },
      orderBy: { timestamp: 'asc' },
    });

    // Calculate statistics
    const stats = calculateGlucoseStats(
      glucoseReadings.map(reading => ({
        timestamp: reading.timestamp,
        glucoseValue: reading.glucoseValue,
        eventType: reading.eventType,
        eventSubtype: reading.eventSubtype || undefined,
        rateOfChange: reading.rateOfChange || undefined,
        transmitterId: reading.transmitterId || undefined,
        transmitterTime: reading.transmitterTime || undefined,
        sourceDeviceId: reading.sourceDeviceId || undefined,
      }))
    );

    return NextResponse.json({ stats });
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