import { parse } from 'papaparse';

export interface GlucoseReading {
  timestamp: Date;
  glucoseValue: number;
  rateOfChange?: number;
  eventType: string;
  eventSubtype?: string;
  transmitterId?: string;
  transmitterTime?: string;
  sourceDeviceId?: string;
}

export function parseDexcomCSV(csvText: string): GlucoseReading[] {
  if (!csvText || csvText.trim() === '') {
    throw new Error('Empty CSV content');
  }

  try {
    const result = parse(csvText, {
      header: true,
      skipEmptyLines: true,
      error: (error) => {
        console.error('CSV parsing error:', error);
        throw new Error(`CSV parsing error: ${error.message}`);
      }
    });

    if (!result.data || !Array.isArray(result.data) || result.data.length === 0) {
      throw new Error('No data rows found in CSV');
    }

    console.log(`Parsed ${result.data.length} rows from CSV`);

    const readings: GlucoseReading[] = [];
    let validRowCount = 0;
    let invalidRowCount = 0;

    for (const row of result.data) {
      // Check if it has the required Dexcom Clarity structure
      if (!row['Event Type'] && !row['Timestamp (YYYY-MM-DDThh:mm:ss)']) {
        invalidRowCount++;
        continue;
      }

      // Skip header and metadata rows that don't have glucose readings
      if (
        row['Event Type'] === 'EGV' && 
        row['Timestamp (YYYY-MM-DDThh:mm:ss)'] && 
        row['Glucose Value (mg/dL)']
      ) {
        try {
          const timestamp = new Date(row['Timestamp (YYYY-MM-DDThh:mm:ss)']);
          const glucoseValue = parseFloat(row['Glucose Value (mg/dL)']);
          
          // Only add valid readings
          if (!isNaN(timestamp.getTime()) && !isNaN(glucoseValue)) {
            const reading: GlucoseReading = {
              timestamp,
              glucoseValue,
              eventType: row['Event Type'],
              eventSubtype: row['Event Subtype'] || undefined,
              rateOfChange: row['Glucose Rate of Change (mg/dL/min)'] 
                ? parseFloat(row['Glucose Rate of Change (mg/dL/min)']) 
                : undefined,
              transmitterId: row['Transmitter ID'] || undefined,
              transmitterTime: row['Transmitter Time (Long Integer)'] || undefined,
              sourceDeviceId: row['Source Device ID'] || undefined,
            };
            readings.push(reading);
            validRowCount++;
          } else {
            invalidRowCount++;
          }
        } catch (error) {
          console.error('Error parsing row:', row, error);
          invalidRowCount++;
        }
      }
    }

    console.log(`Found ${validRowCount} valid glucose readings and ${invalidRowCount} invalid/skipped rows`);

    // If we have no valid readings but the CSV contained data, it might be in the wrong format
    if (readings.length === 0 && result.data.length > 0) {
      console.error('CSV file looks invalid for Dexcom data, available columns:', Object.keys(result.data[0]).join(', '));
      throw new Error('CSV format does not match expected Dexcom Clarity format. Make sure you are uploading a Dexcom Clarity CSV export.');
    }

    return readings;
  } catch (error) {
    console.error('Failed to parse CSV:', error);
    throw error;
  }
} 