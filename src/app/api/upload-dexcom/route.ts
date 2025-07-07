import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseDexcomCSV, validateDexcomCSV } from '@/lib/data-parsers';
import { calculateGlucoseStatistics } from '@/lib/statistics-calculator';

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

    // Validate Dexcom CSV format
    if (!validateDexcomCSV(csvText)) {
      return NextResponse.json(
        { error: 'CSV file does not appear to be a Dexcom Clarity export' },
        { status: 400 }
      );
    }

    console.log(`Processing Dexcom CSV upload for user ${userId}, file size: ${csvText.length} characters`);

    // Delete all existing Dexcom data for this user first
    console.log('Deleting existing Dexcom data...');
    await prisma.dexcomUpload.deleteMany({
      where: { userId: user.id }
    });

    let dexcomUploadData;
    try {
      dexcomUploadData = parseDexcomCSV(csvText);
    } catch (parseError) {
      console.error('Error parsing Dexcom CSV:', parseError);
      return NextResponse.json(
        { error: `CSV parsing failed: ${parseError instanceof Error ? parseError.message : 'Unknown error'}` },
        { status: 400 }
      );
    }

    if (dexcomUploadData.readings.length === 0) {
      return NextResponse.json(
        { error: 'No valid readings found in CSV file' },
        { status: 400 }
      );
    }

    console.log(`Found ${dexcomUploadData.readings.length} readings, creating upload record...`);

    // Create the main upload record
    const dexcomUpload = await prisma.dexcomUpload.create({
      data: {
        userId: user.id,
        patientFirstName: dexcomUploadData.patientFirstName,
        patientLastName: dexcomUploadData.patientLastName,
        deviceInfo: dexcomUploadData.deviceInfo,
        sourceDeviceId: dexcomUploadData.sourceDeviceId
      }
    });

    // Prepare data for batch insert
    const readingsData = dexcomUploadData.readings.map(reading => ({
      uploadId: dexcomUpload.id,
      index: reading.index,
      timestamp: reading.timestamp,
      eventType: reading.eventType,
      eventSubtype: reading.eventSubtype,
      patientInfo: reading.patientInfo,
      deviceInfo: reading.deviceInfo,
      sourceDeviceId: reading.sourceDeviceId,
      glucoseValue: reading.glucoseValue,
      insulinValue: reading.insulinValue,
      carbValue: reading.carbValue,
      duration: reading.duration,
      glucoseRateOfChange: reading.glucoseRateOfChange,
      transmitterTime: reading.transmitterTime,
      transmitterId: reading.transmitterId
    }));

    // Insert all readings in a single batch operation
    console.log('Inserting new Dexcom readings...');
    const result = await prisma.dexcomReading.createMany({
      data: readingsData,
      skipDuplicates: false // Since we deleted all old data, there should be no duplicates
    });

    const insertedCount = result.count;
    console.log(`Successfully inserted ${insertedCount} Dexcom readings`);

    // Calculate and save glucose statistics
    console.log('Calculating glucose statistics...');
    try {
      await calculateGlucoseStatistics(user.id);
      console.log('Glucose statistics calculated successfully');
    } catch (statsError) {
      console.error('Error calculating glucose statistics:', statsError);
      // Don't fail the upload if stats calculation fails
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${insertedCount} Dexcom readings`,
      totalReadings: dexcomUploadData.readings.length,
      insertedCount,
      uploadId: dexcomUpload.id,
      patientName: dexcomUploadData.patientFirstName && dexcomUploadData.patientLastName 
        ? `${dexcomUploadData.patientFirstName} ${dexcomUploadData.patientLastName}`
        : undefined
    });

  } catch (error) {
    console.error('Dexcom upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}