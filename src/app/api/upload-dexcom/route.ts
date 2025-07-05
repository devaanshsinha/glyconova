import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseDexcomCSV } from '@/lib/data-parsers';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Ensure user exists in database
    let user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { clerkId: userId },
      });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!file.name.toLowerCase().endsWith('.csv')) {
      return NextResponse.json(
        { error: 'File must be a CSV' },
        { status: 400 }
      );
    }

    const csvText = await file.text();
    
    if (!csvText || csvText.trim() === '') {
      return NextResponse.json(
        { error: 'CSV file is empty' },
        { status: 400 }
      );
    }

    console.log(`Processing Dexcom CSV upload for user ${userId}, file size: ${csvText.length} characters`);

    let glucoseReadings;
    try {
      glucoseReadings = parseDexcomCSV(csvText);
    } catch (parseError) {
      console.error('Error parsing Dexcom CSV:', parseError);
      return NextResponse.json(
        { error: `CSV parsing failed: ${parseError instanceof Error ? parseError.message : 'Unknown error'}` },
        { status: 400 }
      );
    }

    if (glucoseReadings.length === 0) {
      return NextResponse.json(
        { error: 'No valid glucose readings found in CSV file' },
        { status: 400 }
      );
    }

    console.log(`Found ${glucoseReadings.length} glucose readings, inserting into database...`);

    // Insert glucose readings into database
    let insertedCount = 0;
    let skippedCount = 0;
    
    for (const reading of glucoseReadings) {
      try {
        await prisma.glucoseReading.create({
          data: {
            userId: user.id,
            timestamp: reading.timestamp,
            glucoseValue: reading.glucoseValue,
            eventType: reading.eventType,
            eventSubtype: reading.eventSubtype,
            rateOfChange: reading.rateOfChange,
            transmitterId: reading.transmitterId,
            transmitterTime: reading.transmitterTime,
            sourceDeviceId: reading.sourceDeviceId,
          }
        });
        insertedCount++;
      } catch (dbError: any) {
        // Skip duplicate entries (based on unique constraints)
        if (dbError.code === 'P2002') {
          skippedCount++;
        } else {
          console.error('Database error inserting glucose reading:', dbError);
          throw dbError;
        }
      }
    }

    console.log(`Successfully inserted ${insertedCount} glucose readings, skipped ${skippedCount} duplicates`);

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${insertedCount} glucose readings`,
      totalReadings: glucoseReadings.length,
      insertedCount,
      skippedCount
    });

  } catch (error) {
    console.error('Dexcom upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}