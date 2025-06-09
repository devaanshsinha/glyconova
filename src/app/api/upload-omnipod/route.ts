import { getAuth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { pipeline } from 'stream/promises';
import { PrismaClient } from '@prisma/client';
import csv from 'csv-parser';
import { 
  parseOmnipodCSV, 
  BolusRecord, 
  BasalRecord, 
  InsulinRecord, 
  AlarmEvent
} from '@/lib/omnipod-parser';
import * as JSZip from 'jszip';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { userId } = await getAuth(request);
    
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
      
      if (!file.name.endsWith('.zip')) {
        return NextResponse.json({ 
          error: 'Invalid file format', 
          details: 'Please upload a ZIP file exported from your Omnipod system.'
        }, { status: 400 });
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

    // Process the ZIP file
    let zipData;
    try {
      const arrayBuffer = await file.arrayBuffer();
      zipData = await JSZip.loadAsync(arrayBuffer);
      
      if (Object.keys(zipData.files).length === 0) {
        return NextResponse.json({ 
          error: 'Empty ZIP file',
          details: 'The uploaded ZIP file contains no files'
        }, { status: 400 });
      }
    } catch (error) {
      console.error('Error extracting ZIP file:', error);
      return NextResponse.json({ 
        error: 'Failed to extract ZIP file',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 400 });
    }

    // Arrays to store the parsed data
    let bolusRecords: BolusRecord[] = [];
    let basalRecords: BasalRecord[] = [];
    let insulinRecords: InsulinRecord[] = [];
    let alarmEvents: AlarmEvent[] = [];
    
    const clerkUserId = userId; // Store clerk userId for later use

    // Process each file in the ZIP
    try {
      // Print all files in the ZIP for troubleshooting
      console.log('Files in ZIP:');
      const filesList = Object.keys(zipData.files).filter(filename => !zipData.files[filename].dir);
      filesList.forEach(filename => {
        console.log(`- ${filename}`);
      });
      
      if (filesList.length === 0) {
        return NextResponse.json({ 
          error: 'No files found in ZIP',
          details: 'The ZIP file does not contain any usable files'
        }, { status: 400 });
      }
      
      // Look for specific file patterns by their content and name patterns
      const fileResults = await Promise.all(filesList.map(async (filename) => {
        const content = await zipData.files[filename].async('string');
        const firstLine = content.split('\n')[0] || '';
        const secondLine = content.split('\n')[1] || '';
        
        // Skip non-CSV files or files without enough content
        if (!content.includes(',') || secondLine.trim() === '') {
          return { filename, type: 'unknown', content: null };
        }
        
        let fileType = 'unknown';
        
        // Detect file type based on header content
        if (secondLine.toLowerCase().includes('insulin type') && secondLine.toLowerCase().includes('insulin delivered')) {
          fileType = 'bolus';
        } 
        else if (secondLine.toLowerCase().includes('insulin type') && secondLine.toLowerCase().includes('duration')) {
          fileType = 'basal';
        }
        else if (secondLine.toLowerCase().includes('total bolus') && secondLine.toLowerCase().includes('total insulin')) {
          fileType = 'insulin';
        }
        else if (secondLine.toLowerCase().includes('alarm/event') || secondLine.toLowerCase().includes('alarm')) {
          fileType = 'alarms';
        }
        
        // Also try to detect by filename
        if (fileType === 'unknown') {
          const lowerFilename = filename.toLowerCase();
          if (lowerFilename.includes('bolus')) fileType = 'bolus';
          else if (lowerFilename.includes('basal')) fileType = 'basal';
          else if (lowerFilename.includes('insulin') && !lowerFilename.includes('bolus') && !lowerFilename.includes('basal')) fileType = 'insulin';
          else if (lowerFilename.includes('alarm')) fileType = 'alarms';
        }
        
        return { 
          filename, 
          type: fileType, 
          content: fileType !== 'unknown' ? content : null
        };
      }));
      
      // Process each identified file
      console.log('Identified files:');
      fileResults.forEach(result => {
        if (result.type !== 'unknown') {
          console.log(`- ${result.filename}: ${result.type}`);
        }
      });
      
      // Process bolus files
      const bolusFiles = fileResults.filter(f => f.type === 'bolus' && f.content);
      if (bolusFiles.length > 0) {
        for (const file of bolusFiles) {
          try {
            console.log(`Processing bolus file: ${file.filename}`);
            const records = parseOmnipodCSV(file.content!, 'bolus');
            bolusRecords = [...bolusRecords, ...records];
          } catch (error) {
            console.error(`Error parsing bolus file ${file.filename}:`, error);
          }
        }
        console.log(`Total bolus records from all files: ${bolusRecords.length}`);
      } else {
        console.log('No bolus files found');
      }
      
      // Process basal files
      const basalFiles = fileResults.filter(f => f.type === 'basal' && f.content);
      if (basalFiles.length > 0) {
        for (const file of basalFiles) {
          try {
            console.log(`Processing basal file: ${file.filename}`);
            const records = parseOmnipodCSV(file.content!, 'basal');
            basalRecords = [...basalRecords, ...records];
          } catch (error) {
            console.error(`Error parsing basal file ${file.filename}:`, error);
          }
        }
        console.log(`Total basal records from all files: ${basalRecords.length}`);
      } else {
        console.log('No basal files found');
      }
      
      // Process insulin files
      const insulinFiles = fileResults.filter(f => f.type === 'insulin' && f.content);
      if (insulinFiles.length > 0) {
        for (const file of insulinFiles) {
          try {
            console.log(`Processing insulin file: ${file.filename}`);
            const records = parseOmnipodCSV(file.content!, 'insulin');
            insulinRecords = [...insulinRecords, ...records];
          } catch (error) {
            console.error(`Error parsing insulin file ${file.filename}:`, error);
          }
        }
        console.log(`Total insulin records from all files: ${insulinRecords.length}`);
      } else {
        console.log('No insulin files found');
      }
      
      // Process alarm files
      const alarmFiles = fileResults.filter(f => f.type === 'alarms' && f.content);
      if (alarmFiles.length > 0) {
        for (const file of alarmFiles) {
          try {
            console.log(`Processing alarm file: ${file.filename}`);
            const records = parseOmnipodCSV(file.content!, 'alarms');
            alarmEvents = [...alarmEvents, ...records];
          } catch (error) {
            console.error(`Error parsing alarm file ${file.filename}:`, error);
          }
        }
        console.log(`Total alarm records from all files: ${alarmEvents.length}`);
      } else {
        console.log('No alarm files found');
      }
      
      // If no matching files were found, try a more aggressive approach
      if (bolusRecords.length === 0 && basalRecords.length === 0 && 
          insulinRecords.length === 0 && alarmEvents.length === 0) {
        
        console.log('No files matched by known patterns. Trying all CSV files...');
        
        // Try all files that have CSV-like content
        for (const filename of filesList) {
          if (zipData.files[filename].dir) continue;
          
          try {
            const content = await zipData.files[filename].async('string');
            
            // Skip files that don't look like CSV
            if (!content.includes(',')) continue;
            
            // Try to detect file type from content
            const lines = content.split('\n').slice(0, 3);
            if (lines.length < 2) continue;
            
            // Check if second line has insulin-related headers
            const secondLine = lines[1].toLowerCase();
            
            // Aggressively try to parse with different file types
            if (secondLine.includes('insulin') || secondLine.includes('bolus') || secondLine.includes('carbs')) {
              console.log(`Trying ${filename} as bolus data`);
              try {
                const records = parseOmnipodCSV(content, 'bolus');
                if (records.length > 0) {
                  console.log(`Found ${records.length} bolus records in ${filename}`);
                  bolusRecords = [...bolusRecords, ...records];
                }
              } catch (e) {
                console.log(`Failed to parse ${filename} as bolus data`);
              }
            }
            
            if (secondLine.includes('basal') || secondLine.includes('rate') || secondLine.includes('duration')) {
              console.log(`Trying ${filename} as basal data`);
              try {
                const records = parseOmnipodCSV(content, 'basal');
                if (records.length > 0) {
                  console.log(`Found ${records.length} basal records in ${filename}`);
                  basalRecords = [...basalRecords, ...records];
                }
              } catch (e) {
                console.log(`Failed to parse ${filename} as basal data`);
              }
            }
            
            if (secondLine.includes('total') || secondLine.includes('insulin')) {
              console.log(`Trying ${filename} as insulin data`);
              try {
                const records = parseOmnipodCSV(content, 'insulin');
                if (records.length > 0) {
                  console.log(`Found ${records.length} insulin records in ${filename}`);
                  insulinRecords = [...insulinRecords, ...records];
                }
              } catch (e) {
                console.log(`Failed to parse ${filename} as insulin data`);
              }
            }
            
            if (secondLine.includes('alarm') || secondLine.includes('event') || secondLine.includes('alert')) {
              console.log(`Trying ${filename} as alarm data`);
              try {
                const records = parseOmnipodCSV(content, 'alarms');
                if (records.length > 0) {
                  console.log(`Found ${records.length} alarm records in ${filename}`);
                  alarmEvents = [...alarmEvents, ...records];
                }
              } catch (e) {
                console.log(`Failed to parse ${filename} as alarm data`);
              }
            }
          } catch (error) {
            console.error(`Error inspecting file ${filename}:`, error);
          }
        }
      }
      
      // Final check - if we still don't have any data, return an error
      if (bolusRecords.length === 0 && basalRecords.length === 0 && 
          insulinRecords.length === 0 && alarmEvents.length === 0) {
        return NextResponse.json({ 
          error: 'No valid Omnipod data found',
          details: 'Could not find any valid Omnipod data in the uploaded ZIP file. Please ensure you are uploading a correct Omnipod export with CSV files.'
        }, { status: 400 });
      }
    } catch (error) {
      console.error('Error processing ZIP contents:', error);
      return NextResponse.json({ 
        error: 'Failed to process the files in the ZIP',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 400 });
    }

    // Save the data to the database
    try {
      // First, delete existing data for this user to avoid duplicates
      await prisma.$transaction([
        prisma.bolusRecord.deleteMany({
          where: { userId: user.id }
        }),
        prisma.basalRecord.deleteMany({
          where: { userId: user.id }
        }),
        prisma.alarmEvent.deleteMany({
          where: { userId: user.id }
        })
      ]);
      
      console.log(`Deleted existing Omnipod records for user ${user.id}`);
      
      // Now insert new records
      if (bolusRecords.length > 0) {
        await prisma.bolusRecord.createMany({
          data: bolusRecords.map(record => ({
            userId: user.id,
            timestamp: record.timestamp,
            amount: record.insulinDelivered,
            bolusType: record.insulinType,
            duration: record.extendedDelivery ? 30 : null, // Estimate duration if extended
          })),
        });
        console.log(`Inserted ${bolusRecords.length} bolus records`);
      }
      
      if (basalRecords.length > 0) {
        await prisma.basalRecord.createMany({
          data: basalRecords.map(record => ({
            userId: user.id,
            timestamp: record.timestamp,
            rate: record.rate,
            duration: record.duration,
            changeType: record.insulinType,
          })),
        });
        console.log(`Inserted ${basalRecords.length} basal records`);
      }
      
      if (alarmEvents.length > 0) {
        await prisma.alarmEvent.createMany({
          data: alarmEvents.map(event => ({
            userId: user.id,
            timestamp: event.timestamp,
            eventType: event.eventType,
            deviceId: event.serialNumber,
          })),
        });
        console.log(`Inserted ${alarmEvents.length} alarm events`);
      }
      
      // For records with carbs, add entries to the CarbEntry table
      const carbEntries = bolusRecords
        .filter(record => record.carbsInput && record.carbsInput > 0)
        .map(record => ({
          userId: user.id,
          timestamp: record.timestamp,
          carbAmount: record.carbsInput as number,
        }));
      
      if (carbEntries.length > 0) {
        await prisma.carbEntry.createMany({
          data: carbEntries,
        });
        console.log(`Inserted ${carbEntries.length} carb entries`);
      }
      
      // Calculate insulin statistics if we have insulin records
      if (insulinRecords.length > 0) {
        // Sort records by date to find start and end dates
        const sortedRecords = [...insulinRecords].sort((a, b) => 
          a.timestamp.getTime() - b.timestamp.getTime()
        );
        
        const dataStartDate = sortedRecords[0].timestamp;
        const dataEndDate = sortedRecords[sortedRecords.length - 1].timestamp;
        const totalDays = insulinRecords.length;
        
        // Calculate averages
        const totalInsulinSum = insulinRecords.reduce((sum, record) => sum + record.totalInsulin, 0);
        const bolusSum = insulinRecords.reduce((sum, record) => sum + record.totalBolus, 0);
        const basalSum = insulinRecords.reduce((sum, record) => sum + record.totalBasal, 0);
        
        const avgTotalInsulin = totalInsulinSum / totalDays;
        const avgDailyBolus = bolusSum / totalDays;
        const avgDailyBasal = basalSum / totalDays;
        
        // Calculate percentages
        const bolusPercentage = (bolusSum / totalInsulinSum) * 100;
        const basalPercentage = (basalSum / totalInsulinSum) * 100;
        
        // Calculate carb-related stats
        const totalCarbAmount = carbEntries.reduce((sum, entry) => sum + entry.carbAmount, 0);
        const avgDailyCarbs = totalCarbAmount / totalDays;
        
        // Calculate insulin:carb ratio if we have carb data
        let insulinCarbRatio = null;
        if (carbEntries.length > 0 && bolusSum > 0) {
          insulinCarbRatio = totalCarbAmount / bolusSum;
        }
        
        // Save or update insulin statistics
        await prisma.insulinStats.upsert({
          where: { userId: user.id },
          update: {
            totalDays,
            avgTotalInsulin,
            avgDailyBolus,
            avgDailyBasal,
            avgDailyCarbs,
            bolusPercentage,
            basalPercentage,
            insulinCarbRatio,
            totalBolusCount: bolusRecords.length,
            totalBasalChanges: basalRecords.length,
            avgBolusesPerDay: bolusRecords.length / totalDays,
            lastCalculated: new Date(),
            dataStartDate,
            dataEndDate,
            updatedAt: new Date(),
          },
          create: {
            userId: user.id,
            totalDays,
            avgTotalInsulin,
            avgDailyBolus,
            avgDailyBasal,
            avgDailyCarbs,
            bolusPercentage,
            basalPercentage,
            insulinCarbRatio,
            totalBolusCount: bolusRecords.length,
            totalBasalChanges: basalRecords.length,
            avgBolusesPerDay: bolusRecords.length / totalDays,
            dataStartDate,
            dataEndDate,
          },
        });
        
        console.log('Successfully updated insulin statistics');
      }
      
      return NextResponse.json({ 
        success: true, 
        message: `Successfully uploaded and processed Omnipod data: ${bolusRecords.length} bolus records, ${basalRecords.length} basal records, ${alarmEvents.length} alarm events`,
        dataUpload: dataUpload
      });
    } catch (error) {
      console.error('Error saving Omnipod data to database:', error);
      return NextResponse.json({ 
        error: 'Failed to save data to database',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error uploading Omnipod data:', error);
    return NextResponse.json({ 
      error: 'Failed to process the uploaded file',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 