import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseOmnipodCSV } from '@/lib/data-parsers';
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

    console.log(`Processing Omnipod file upload for user ${userId}, file: ${file.name}`);

    let fileContents: { [filename: string]: string } = {};

    if (file.name.toLowerCase().endsWith('.zip')) {
      // Handle ZIP file
      try {
        const arrayBuffer = await file.arrayBuffer();
        const zip = new JSZip();
        const zipContents = await zip.loadAsync(arrayBuffer);
        
        for (const filename of Object.keys(zipContents.files)) {
          const zipFile = zipContents.files[filename];
          if (!zipFile.dir && filename.toLowerCase().endsWith('.csv')) {
            const content = await zipFile.async('text');
            fileContents[filename] = content;
          }
        }
      } catch (error) {
        console.error('Error extracting ZIP file:', error);
        return NextResponse.json(
          { error: 'Failed to extract ZIP file' },
          { status: 400 }
        );
      }
    } else if (file.name.toLowerCase().endsWith('.csv')) {
      // Handle single CSV file
      const content = await file.text();
      fileContents[file.name] = content;
    } else {
      return NextResponse.json(
        { error: 'File must be a CSV or ZIP file containing CSV files' },
        { status: 400 }
      );
    }

    if (Object.keys(fileContents).length === 0) {
      return NextResponse.json(
        { error: 'No CSV files found' },
        { status: 400 }
      );
    }

    console.log(`Found ${Object.keys(fileContents).length} CSV files to process`);

    const results = {
      bolus: { inserted: 0, skipped: 0 },
      basal: { inserted: 0, skipped: 0 },
      alarms: { inserted: 0, skipped: 0 }
    };

    // Process each CSV file
    for (const [filename, content] of Object.entries(fileContents)) {
      console.log(`Processing file: ${filename}`);
      
      if (!content || content.trim() === '') {
        console.warn(`Skipping empty file: ${filename}`);
        continue;
      }

      // Determine file type based on filename or content
      let fileType = '';
      const lowerFilename = filename.toLowerCase();
      
      if (lowerFilename.includes('bolus')) {
        fileType = 'bolus';
      } else if (lowerFilename.includes('basal')) {
        fileType = 'basal';
      } else if (lowerFilename.includes('insulin') || lowerFilename.includes('daily')) {
        fileType = 'insulin';
      } else if (lowerFilename.includes('alarm') || lowerFilename.includes('event')) {
        fileType = 'alarms';
      } else {
        // Try to guess from content
        const firstFewLines = content.split('\n').slice(0, 3).join('\n').toLowerCase();
        if (firstFewLines.includes('bolus')) {
          fileType = 'bolus';
        } else if (firstFewLines.includes('basal')) {
          fileType = 'basal';
        } else if (firstFewLines.includes('insulin') || firstFewLines.includes('daily')) {
          fileType = 'insulin';
        } else if (firstFewLines.includes('alarm') || firstFewLines.includes('event')) {
          fileType = 'alarms';
        } else {
          console.warn(`Could not determine file type for: ${filename}`);
          continue;
        }
      }

      try {
        const parsedData = parseOmnipodCSV(content, fileType);
        
        if (parsedData.length === 0) {
          console.warn(`No data found in ${filename}`);
          continue;
        }

        console.log(`Parsed ${parsedData.length} records from ${filename} (type: ${fileType})`);

        // Insert data based on file type
        switch (fileType) {
          case 'bolus':
            for (const record of parsedData) {
              try {
                await prisma.bolusRecord.create({
                  data: {
                    userId: user.id,
                    timestamp: record.timestamp,
                    amount: record.insulinDelivered,
                    bolusType: record.insulinType || 'Normal',
                    duration: record.extendedDelivery ? 30 : undefined, // Assume 30 min for extended boluses
                  }
                });
                results.bolus.inserted++;
              } catch (dbError: any) {
                if (dbError.code === 'P2002') {
                  results.bolus.skipped++;
                } else {
                  console.error('Database error inserting bolus record:', dbError);
                  throw dbError;
                }
              }
            }
            break;

          case 'basal':
            for (const record of parsedData) {
              try {
                await prisma.basalRecord.create({
                  data: {
                    userId: user.id,
                    timestamp: record.timestamp,
                    rate: record.rate,
                    duration: record.duration,
                    changeType: record.insulinType || 'Scheduled',
                  }
                });
                results.basal.inserted++;
              } catch (dbError: any) {
                if (dbError.code === 'P2002') {
                  results.basal.skipped++;
                } else {
                  console.error('Database error inserting basal record:', dbError);
                  throw dbError;
                }
              }
            }
            break;

          case 'alarms':
            for (const record of parsedData) {
              try {
                await prisma.alarmEvent.create({
                  data: {
                    userId: user.id,
                    timestamp: record.timestamp,
                    eventType: record.eventType,
                    deviceId: record.serialNumber,
                  }
                });
                results.alarms.inserted++;
              } catch (dbError: any) {
                if (dbError.code === 'P2002') {
                  results.alarms.skipped++;
                } else {
                  console.error('Database error inserting alarm event:', dbError);
                  throw dbError;
                }
              }
            }
            break;
        }

      } catch (parseError) {
        console.error(`Error parsing ${filename}:`, parseError);
        // Continue processing other files even if one fails
      }
    }

    console.log('Upload results:', results);

    const totalInserted = Object.values(results).reduce((sum, r) => sum + r.inserted, 0);
    const totalSkipped = Object.values(results).reduce((sum, r) => sum + r.skipped, 0);

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${totalInserted} records`,
      results,
      totalInserted,
      totalSkipped
    });

  } catch (error) {
    console.error('Omnipod upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}