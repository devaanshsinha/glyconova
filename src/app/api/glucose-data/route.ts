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

    // Parse query parameters
    const url = new URL(request.url);
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');
    const interval = url.searchParams.get('interval') || 'day';

    if (!startDate) {
      return NextResponse.json(
        { error: 'startDate is required' }, 
        { status: 400 }
      );
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    // Validate dates
    if (isNaN(start.getTime())) {
      return NextResponse.json(
        { error: 'Invalid startDate format' }, 
        { status: 400 }
      );
    }

    if (endDate && isNaN(new Date(endDate).getTime())) {
      return NextResponse.json(
        { error: 'Invalid endDate format' }, 
        { status: 400 }
      );
    }

    // Set end date to end of day
    end.setHours(23, 59, 59, 999);

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

    // Get the user's glucose readings within the date range
    const glucoseReadings = await prisma.glucoseReading.findMany({
      where: { 
        userId: user.id,
        timestamp: {
          gte: start,
          lte: end
        }
      },
      orderBy: { timestamp: 'asc' },
    });

    return NextResponse.json({ 
      readings: glucoseReadings.map(reading => ({
        timestamp: reading.timestamp,
        glucoseValue: reading.glucoseValue,
        eventType: reading.eventType
      })),
      metadata: {
        startDate: start,
        endDate: end,
        interval,
        count: glucoseReadings.length
      }
    });
  } catch (error) {
    console.error('Error fetching glucose data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch glucose data',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
} 