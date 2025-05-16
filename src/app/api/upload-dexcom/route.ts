import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseDexcomCSV } from '@/lib/csv-parser';
import { calculateGlucoseStats, HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if the user exists in our database
    let user;
    try {
      user = await prisma.user.findUnique({
        where: { clerkId: userId },
      });

      // If not, create a new user
      if (!user) {
        user = await prisma.user.create({
          data: { clerkId: userId },
        });
      }
    } catch (error) {
      console.error('Error accessing user data:', error);
      return NextResponse.json({ 
        error: 'Failed to access user data',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }

    // Parse the form data
    let formData;
    let file;
    try {
      formData = await request.formData();
      file = formData.get('file') as File;

      if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
      }
      
      console.log('Received file:', file.name, 'Size:', file.size);
    } catch (error) {
      console.error('Error processing form data:', error);
      return NextResponse.json({ 
        error: 'Failed to process upload form',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 400 });
    }

    // Create a data upload record
    let dataUpload;
    try {
      dataUpload = await prisma.dataUpload.create({
        data: {
          fileName: file.name,
          fileSize: file.size,
          userId: user.id,
        },
      });
    } catch (error) {
      console.error('Error creating data upload record:', error);
      return NextResponse.json({ 
        error: 'Failed to create data upload record',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }

    // Process the CSV file
    let csvText;
    try {
      csvText = await file.text();
      
      if (!csvText || csvText.trim() === '') {
        return NextResponse.json({ 
          error: 'Empty CSV file',
          details: 'The uploaded file contains no data'
        }, { status: 400 });
      }
    } catch (error) {
      console.error('Error reading file text:', error);
      return NextResponse.json({ 
        error: 'Failed to read file contents',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 400 });
    }

    // Parse the CSV data
    let glucoseReadings;
    try {
      glucoseReadings = parseDexcomCSV(csvText);
      
      if (glucoseReadings.length === 0) {
        return NextResponse.json({ 
          error: 'No valid glucose readings found in the file',
          details: 'The CSV parser could not find any valid glucose readings. Make sure you\'re uploading a Dexcom Clarity CSV file.'
        }, { status: 400 });
      }
    } catch (error) {
      console.error('Error parsing CSV:', error);
      return NextResponse.json({ 
        error: 'Failed to parse the CSV file',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 400 });
    }

    // First, delete all existing readings for this user
    try {
      console.log(`Deleting existing glucose readings for user ${user.id}`);
      await prisma.glucoseReading.deleteMany({
        where: { userId: user.id }
      });
      console.log('Successfully deleted existing readings');
    } catch (deleteError) {
      console.error('Error deleting existing readings:', deleteError);
      return NextResponse.json({ 
        error: 'Failed to clear existing readings',
        details: deleteError instanceof Error ? deleteError.message : String(deleteError)
      }, { status: 500 });
    }

    // Then, save the new glucose readings to the database
    try {
      const createReadings = glucoseReadings.map(reading => ({
        timestamp: reading.timestamp,
        glucoseValue: reading.glucoseValue,
        rateOfChange: reading.rateOfChange,
        eventType: reading.eventType,
        eventSubtype: reading.eventSubtype,
        transmitterId: reading.transmitterId,
        transmitterTime: reading.transmitterTime,
        sourceDeviceId: reading.sourceDeviceId,
        userId: user.id,
      }));

      // Use createMany to efficiently insert all readings at once
      await prisma.glucoseReading.createMany({
        data: createReadings,
      });

      // After uploading new readings, calculate and update statistics
      try {
        // Get all user's glucose readings
        const allReadings = await prisma.glucoseReading.findMany({
          where: { userId: user.id },
        });
        
        // Calculate statistics
        const stats = calculateGlucoseStats(
          allReadings.map(reading => ({
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
        
        // Store the statistics
        await prisma.glucoseStats.upsert({
          where: { userId: user.id },
          update: {
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
            lastCalculated: new Date(),
            updatedAt: new Date(),
          },
          create: {
            userId: user.id,
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
          },
        });
        
        console.log('Successfully updated glucose statistics');
      } catch (statError) {
        console.error('Error updating glucose statistics:', statError);
        // Continue execution even if stats update fails
      }

      return NextResponse.json({ 
        success: true, 
        message: `Successfully deleted existing readings and uploaded ${glucoseReadings.length} new glucose readings.`,
        dataUpload: dataUpload
      });
    } catch (error) {
      console.error('Error saving readings to database:', error);
      return NextResponse.json({ 
        error: 'Failed to save readings to database',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error uploading Dexcom data:', error);
    return NextResponse.json({ 
      error: 'Failed to process the uploaded file',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 