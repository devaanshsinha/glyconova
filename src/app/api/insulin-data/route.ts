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

    // Get the user's bolus records within the date range
    const bolusRecords = await prisma.bolusRecord.findMany({
      where: { 
        userId: user.id,
        timestamp: {
          gte: start,
          lte: end
        }
      },
      orderBy: { timestamp: 'asc' },
    });

    // Get the user's basal records within the date range
    const basalRecords = await prisma.basalRecord.findMany({
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
      boluses: bolusRecords.map(record => ({
        timestamp: record.timestamp,
        amount: record.amount,
        bolusType: record.bolusType,
        duration: record.duration
      })),
      basal: basalRecords.map(record => ({
        timestamp: record.timestamp,
        rate: record.rate,
        duration: record.duration
      })),
      metadata: {
        startDate: start,
        endDate: end,
        bolusCount: bolusRecords.length,
        basalCount: basalRecords.length
      }
    });
  } catch (error) {
    console.error('Error fetching insulin data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch insulin data',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
} 