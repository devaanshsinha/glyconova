import { parse } from 'papaparse';

// Glucose data interfaces and parsing (from Dexcom)
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

// Insulin data interfaces and parsing (from Omnipod)
export interface BolusRecord {
  timestamp: Date;
  insulinType: string;
  bloodGlucoseInput?: number;
  carbsInput?: number;
  carbsRatio?: number;
  insulinDelivered: number;
  initialDelivery?: number;
  extendedDelivery?: number;
  serialNumber?: string;
}

export interface BasalRecord {
  timestamp: Date;
  insulinType: string;
  duration: number;
  percentage?: number;
  rate: number;
  insulinDelivered?: number;
  serialNumber?: string;
}

export interface InsulinRecord {
  timestamp: Date;
  totalBolus: number;
  totalInsulin: number;
  totalBasal: number;
  serialNumber?: string;
}

export interface AlarmEvent {
  timestamp: Date;
  eventType: string;
  serialNumber?: string;
}

// Helper functions
function parseDate(dateString: string): Date | null {
  if (!dateString) return null;
  
  try {
    const parsedDate = new Date(dateString);
    
    if (isNaN(parsedDate.getTime())) {
      console.warn(`Invalid date format: ${dateString}`);
      return null;
    }
    
    return parsedDate;
  } catch (error) {
    console.warn(`Error parsing date "${dateString}":`, error);
    return null;
  }
}

function parseNumber(value: any): number | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  
  const num = parseFloat(value);
  return isNaN(num) ? undefined : num;
}

// Dexcom CSV Parser
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
      if (!row['Event Type'] && !row['Timestamp (YYYY-MM-DDThh:mm:ss)']) {
        invalidRowCount++;
        continue;
      }

      if (
        row['Event Type'] === 'EGV' && 
        row['Timestamp (YYYY-MM-DDThh:mm:ss)'] && 
        row['Glucose Value (mg/dL)']
      ) {
        try {
          const timestamp = new Date(row['Timestamp (YYYY-MM-DDThh:mm:ss)']);
          const glucoseValue = parseFloat(row['Glucose Value (mg/dL)']);
          
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

// Omnipod CSV Parser
export function parseOmnipodCSV(fileContent: string, fileType: string): any[] {
  if (!fileContent || fileContent.trim() === '') {
    throw new Error('Empty CSV content');
  }

  try {
    const lines = fileContent.split('\n');
    const firstLine = lines[0];
    console.log(`First line of ${fileType} CSV: "${firstLine}"`);
    
    const csvContent = lines.slice(1).join('\n');
    console.log(`Processing ${fileType} CSV file...`);
    
    const result = parse(csvContent, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
      error: (error) => {
        console.error('CSV parsing error:', error);
        throw new Error(`CSV parsing error: ${error.message}`);
      }
    });

    if (!result.data || !Array.isArray(result.data) || result.data.length === 0) {
      console.log(`No data rows found in ${fileType} CSV`);
      return [];
    }

    console.log(`CSV Headers for ${fileType}:`, result.meta.fields);
    if (result.data.length > 0) {
      console.log(`First row sample from ${fileType} CSV:`, JSON.stringify(result.data[0], null, 2));
    }
    
    console.log(`Parsed ${result.data.length} rows from ${fileType} CSV`);
    
    switch (fileType) {
      case 'bolus':
        return parseBolusData(result.data);
      case 'basal':
        return parseBasalData(result.data);
      case 'insulin':
        return parseInsulinData(result.data);
      case 'alarms':
        return parseAlarmData(result.data);
      default:
        console.log(`Unknown file type: ${fileType}`);
        return [];
    }
  } catch (error) {
    console.error(`Failed to parse ${fileType} CSV:`, error);
    throw error;
  }
}

function parseBolusData(data: any[]): BolusRecord[] {
  const bolusRecords: BolusRecord[] = [];
  
  for (const row of data) {
    try {
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      if (!timestampValue) {
        console.warn('Skipping bolus row - missing timestamp:', row);
        continue;
      }
      
      const insulinDeliveredValue = 
        row['Insulin Delivered (U)'] || 
        row['Insulin Delivered'] || 
        row['Bolus Amount (U)'] || 
        row['Bolus Amount'];
      
      if (!insulinDeliveredValue) {
        console.warn('Skipping bolus row - missing insulin delivered:', row);
        continue;
      }
      
      const timestamp = parseDate(timestampValue);
      const insulinDelivered = parseNumber(insulinDeliveredValue);
      
      if (!timestamp || insulinDelivered === undefined) {
        console.warn('Skipping bolus row - invalid timestamp or insulin value:', {
          timestamp: timestampValue,
          insulinDelivered: insulinDeliveredValue
        });
        continue;
      }
      
      const insulinType = row['Insulin Type'] || row['Bolus Type'] || 'Normal';
      
      const record: BolusRecord = {
        timestamp,
        insulinType,
        insulinDelivered,
        bloodGlucoseInput: parseNumber(row['Blood Glucose Input (mg/dl)'] || row['BG']),
        carbsInput: parseNumber(row['Carbs Input (g)'] || row['Carbs']),
        carbsRatio: parseNumber(row['Carbs Ratio'] || row['IC Ratio']),
        initialDelivery: parseNumber(row['Initial Delivery (U)']),
        extendedDelivery: parseNumber(row['Extended Delivery (U)']),
        serialNumber: row['Serial Number'] || row['Device ID']
      };
      
      bolusRecords.push(record);
    } catch (error) {
      console.error('Error parsing bolus row:', row, error);
    }
  }
  
  console.log(`Successfully parsed ${bolusRecords.length} bolus records`);
  return bolusRecords;
}

function parseBasalData(data: any[]): BasalRecord[] {
  const basalRecords: BasalRecord[] = [];
  
  for (const row of data) {
    try {
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      const durationValue = 
        row['Duration (minutes)'] || 
        row['Duration'] ||
        row['Duration (mins)'];
      
      if (!timestampValue || !durationValue) {
        console.warn('Skipping basal row - missing timestamp or duration:', row);
        continue;
      }
      
      const timestamp = parseDate(timestampValue);
      const duration = parseInt(durationValue, 10);
      
      if (!timestamp || isNaN(duration)) {
        console.warn('Skipping basal row - invalid timestamp or duration:', {
          timestamp: timestampValue,
          duration: durationValue
        });
        continue;
      }
      
      const rateValue = 
        row['Rate'] || 
        row['Basal Rate'] || 
        row['Rate (U/hr)'] ||
        '0';
      
      const record: BasalRecord = {
        timestamp,
        insulinType: row['Insulin Type'] || row['Basal Type'] || '',
        duration,
        percentage: parseNumber(row['Percentage (%)'] || row['Percentage']),
        rate: parseNumber(rateValue) || 0,
        insulinDelivered: parseNumber(row['Insulin Delivered (U)'] || row['Insulin Delivered']),
        serialNumber: row['Serial Number'] || row['Device ID']
      };
      
      basalRecords.push(record);
    } catch (error) {
      console.error('Error parsing basal row:', row, error);
    }
  }
  
  console.log(`Successfully parsed ${basalRecords.length} basal records`);
  return basalRecords;
}

function parseInsulinData(data: any[]): InsulinRecord[] {
  const insulinRecords: InsulinRecord[] = [];
  
  for (const row of data) {
    try {
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      const totalInsulinValue = 
        row['Total Insulin (U)'] || 
        row['Total Insulin'] || 
        row['Daily Total'];
      
      if (!timestampValue || !totalInsulinValue) {
        console.warn('Skipping insulin row - missing timestamp or total insulin:', row);
        continue;
      }
      
      const timestamp = parseDate(timestampValue);
      const totalInsulin = parseNumber(totalInsulinValue);
      
      if (!timestamp || totalInsulin === undefined) {
        console.warn('Skipping insulin row - invalid timestamp or total insulin:', {
          timestamp: timestampValue, 
          totalInsulin: totalInsulinValue
        });
        continue;
      }
      
      const totalBolusValue = 
        row['Total Bolus (U)'] || 
        row['Total Bolus'] || 
        row['Bolus Total'];
        
      const totalBasalValue = 
        row['Total Basal (U)'] || 
        row['Total Basal'] || 
        row['Basal Total'];
      
      const record: InsulinRecord = {
        timestamp,
        totalBolus: parseNumber(totalBolusValue) || 0,
        totalInsulin,
        totalBasal: parseNumber(totalBasalValue) || 0,
        serialNumber: row['Serial Number'] || row['Device ID']
      };
      
      insulinRecords.push(record);
    } catch (error) {
      console.error('Error parsing insulin row:', row, error);
    }
  }
  
  console.log(`Successfully parsed ${insulinRecords.length} insulin records`);
  return insulinRecords;
}

function parseAlarmData(data: any[]): AlarmEvent[] {
  const alarmEvents: AlarmEvent[] = [];
  
  for (const row of data) {
    try {
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      const eventTypeValue = 
        row['Alarm/Event'] || 
        row['Alarm'] || 
        row['Event'] ||
        row['Alert'];
      
      if (!timestampValue || !eventTypeValue) {
        console.warn('Skipping alarm row - missing timestamp or event type:', row);
        continue;
      }
      
      const timestamp = parseDate(timestampValue);
      
      if (!timestamp) {
        console.warn('Skipping alarm row - invalid timestamp:', {
          timestamp: timestampValue
        });
        continue;
      }
      
      const event: AlarmEvent = {
        timestamp,
        eventType: eventTypeValue,
        serialNumber: row['Serial Number'] || row['Device ID']
      };
      
      alarmEvents.push(event);
    } catch (error) {
      console.error('Error parsing alarm row:', row, error);
    }
  }
  
  console.log(`Successfully parsed ${alarmEvents.length} alarm events`);
  return alarmEvents;
}