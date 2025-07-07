import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseOmnipodCSV, validateOmnipodFile } from '@/lib/data-parsers';
import { calculateInsulinStatistics } from '@/lib/statistics-calculator';
import JSZip from 'jszip';

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

    // Validate file type
    const isZip = file.name.toLowerCase().endsWith('.zip');
    const isCsv = file.name.toLowerCase().endsWith('.csv');
    
    if (!isZip && !isCsv) {
      return NextResponse.json(
        { error: 'File must be a CSV or ZIP file' },
        { status: 400 }
      );
    }

    console.log(`Processing Omnipod file upload for user ${userId}, file: ${file.name}`);

    // Delete all existing Omnipod data for this user first
    console.log('Deleting existing Omnipod data...');
    await prisma.omnipodUpload.deleteMany({
      where: { userId: user.id }
    });

    let fileContents: { [filename: string]: string } = {};
    let dateRange: string | undefined;

    if (isZip) {
      // Handle ZIP file
      try {
        const arrayBuffer = await file.arrayBuffer();
        const zip = new JSZip();
        const zipContents = await zip.loadAsync(arrayBuffer);
        
        for (const filename of Object.keys(zipContents.files)) {
          const zipFile = zipContents.files[filename];
          if (!zipFile.dir && filename.toLowerCase().endsWith('.csv')) {
            const content = await zipFile.async('text');
            
            // Validate Omnipod file
            if (validateOmnipodFile(filename)) {
              fileContents[filename] = content;
            } else {
              console.warn(`Skipping non-Omnipod file: ${filename}`);
            }
          }
        }
      } catch (error) {
        console.error('Error extracting ZIP file:', error);
        return NextResponse.json(
          { error: 'Failed to extract ZIP file' },
          { status: 400 }
        );
      }
    } else {
      // Handle single CSV file
      if (!validateOmnipodFile(file.name)) {
        return NextResponse.json(
          { error: 'CSV file does not appear to be an Omnipod export' },
          { status: 400 }
        );
      }
      
      const content = await file.text();
      fileContents[file.name] = content;
    }

    if (Object.keys(fileContents).length === 0) {
      return NextResponse.json(
        { error: 'No valid Omnipod CSV files found' },
        { status: 400 }
      );
    }

    console.log(`Found ${Object.keys(fileContents).length} valid CSV files to process`);

    // Create the main upload record
    const omnipodUpload = await prisma.omnipodUpload.create({
      data: {
        userId: user.id,
        fileName: file.name,
        dateRange: dateRange
      }
    });

    const results = {
      bgReadings: 0,
      cgmReadings: 0,
      bolusRecords: 0,
      basalRecords: 0,
      insulinRecords: 0,
      carbRecords: 0,
      alarmRecords: 0,
      exerciseRecords: 0,
      foodRecords: 0,
      manualInsulinRecords: 0,
      medicationRecords: 0,
      notesRecords: 0
    };

    // Process each CSV file
    for (const [filename, content] of Object.entries(fileContents)) {
      console.log(`Processing file: ${filename}`);
      
      if (!content || content.trim() === '') {
        console.warn(`Skipping empty file: ${filename}`);
        continue;
      }

      try {
        const parsedData = parseOmnipodCSV(content, filename);
        
        if (!dateRange && parsedData.dateRange) {
          dateRange = parsedData.dateRange;
          // Update the upload record with date range
          await prisma.omnipodUpload.update({
            where: { id: omnipodUpload.id },
            data: { dateRange }
          });
        }

        // Insert data in batches based on type
        if (parsedData.bgReadings.length > 0) {
          const bgData = parsedData.bgReadings.map(reading => ({
            uploadId: omnipodUpload.id,
            timestamp: reading.timestamp,
            glucoseValue: reading.glucoseValue,
            manualReading: reading.manualReading,
            serialNumber: reading.serialNumber
          }));
          
          const result = await prisma.omnipodBgReading.createMany({
            data: bgData,
            skipDuplicates: false
          });
          results.bgReadings += result.count;
        }

        if (parsedData.cgmReadings.length > 0) {
          const cgmData = parsedData.cgmReadings.map(reading => ({
            uploadId: omnipodUpload.id,
            timestamp: reading.timestamp,
            cgmGlucoseValue: reading.cgmGlucoseValue,
            serialNumber: reading.serialNumber
          }));
          
          const result = await prisma.omnipodCgmReading.createMany({
            data: cgmData,
            skipDuplicates: false
          });
          results.cgmReadings += result.count;
        }

        if (parsedData.bolusRecords.length > 0) {
          const bolusData = parsedData.bolusRecords.map(record => ({
            uploadId: omnipodUpload.id,
            timestamp: record.timestamp,
            insulinType: record.insulinType,
            bloodGlucoseInput: record.bloodGlucoseInput,
            carbsInput: record.carbsInput,
            carbsRatio: record.carbsRatio,
            insulinDelivered: record.insulinDelivered,
            initialDelivery: record.initialDelivery,
            extendedDelivery: record.extendedDelivery,
            serialNumber: record.serialNumber
          }));
          
          const result = await prisma.omnipodBolusRecord.createMany({
            data: bolusData,
            skipDuplicates: false
          });
          results.bolusRecords += result.count;
        }

        if (parsedData.basalRecords.length > 0) {
          const basalData = parsedData.basalRecords.map(record => ({
            uploadId: omnipodUpload.id,
            timestamp: record.timestamp,
            insulinType: record.insulinType,
            duration: record.duration,
            percentage: record.percentage,
            rate: record.rate,
            insulinDelivered: record.insulinDelivered,
            serialNumber: record.serialNumber
          }));
          
          const result = await prisma.omnipodBasalRecord.createMany({
            data: basalData,
            skipDuplicates: false
          });
          results.basalRecords += result.count;
        }

        if (parsedData.foodRecords.length > 0) {
          const foodData = parsedData.foodRecords.map(record => ({
            uploadId: omnipodUpload.id,
            timestamp: record.timestamp,
            name: record.name,
            carbs: record.carbs,
            fat: record.fat,
            protein: record.protein,
            calories: record.calories,
            servingQuantity: record.servingQuantity,
            numberOfServings: record.numberOfServings
          }));
          
          const result = await prisma.omnipodFoodRecord.createMany({
            data: foodData,
            skipDuplicates: false
          });
          results.foodRecords += result.count;
        }

        // Add other record types as needed...

        console.log(`Successfully processed ${filename}`);

      } catch (parseError) {
        console.error(`Error parsing ${filename}:`, parseError);
        // Continue processing other files even if one fails
      }
    }

    console.log('Upload results:', results);

    const totalInserted = Object.values(results).reduce((sum, count) => sum + count, 0);

    // Calculate and save insulin statistics
    console.log('Calculating insulin statistics...');
    try {
      await calculateInsulinStatistics(user.id);
      console.log('Insulin statistics calculated successfully');
    } catch (statsError) {
      console.error('Error calculating insulin statistics:', statsError);
      // Don't fail the upload if stats calculation fails
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${totalInserted} records from ${Object.keys(fileContents).length} files`,
      results,
      totalInserted,
      uploadId: omnipodUpload.id
    });

  } catch (error) {
    console.error('Omnipod upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}