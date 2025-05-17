import { parse } from 'papaparse';

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

export function parseOmnipodCSV(fileContent: string, fileType: string): any[] {
  if (!fileContent || fileContent.trim() === '') {
    throw new Error('Empty CSV content');
  }

  try {
    // Split the content into lines
    const lines = fileContent.split('\n');
    
    // Extract user name and date range from the first line
    const firstLine = lines[0];
    console.log(`First line of ${fileType} CSV: "${firstLine}"`);
    
    // Skip the first line (which has user info) and get the actual CSV content
    // The second line has the headers, and subsequent lines have data
    const csvContent = lines.slice(1).join('\n');
    
    console.log(`Processing ${fileType} CSV file...`);
    
    // Parse CSV starting from the header line (which is now the first line after removing the name/date line)
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

    // Print debugging info
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

// Helper function to safely parse a date
function parseDate(dateString: string): Date | null {
  if (!dateString) return null;
  
  try {
    const parsedDate = new Date(dateString);
    
    // Check if the date is valid
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

// Helper function to safely parse a number
function parseNumber(value: any): number | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  
  const num = parseFloat(value);
  return isNaN(num) ? undefined : num;
}

function parseBolusData(data: any[]): BolusRecord[] {
  const bolusRecords: BolusRecord[] = [];
  
  for (const row of data) {
    try {
      // Find the timestamp field - try different possible column names
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      // Skip rows without timestamp or insulin delivered
      if (!timestampValue) {
        console.warn('Skipping bolus row - missing timestamp:', row);
        continue;
      }
      
      // Find insulin delivered field - try different possible column names
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
      // Find the timestamp field - try different possible column names
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      // Find duration field - try different possible column names
      const durationValue = 
        row['Duration (minutes)'] || 
        row['Duration'] ||
        row['Duration (mins)'];
      
      // Skip rows without timestamp or duration
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
      
      // Find rate field - try different possible column names
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
      // Find the timestamp field - try different possible column names
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      // Find total insulin field - try different possible column names
      const totalInsulinValue = 
        row['Total Insulin (U)'] || 
        row['Total Insulin'] || 
        row['Daily Total'];
      
      // Skip rows without timestamp or total insulin
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
      
      // Find bolus and basal fields - try different possible column names
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
      // Find the timestamp field - try different possible column names
      const timestampValue = 
        row['Timestamp'] || 
        row['DateTime'] || 
        row['Date Time'] || 
        row['Date'];
      
      // Find event type field - try different possible column names
      const eventTypeValue = 
        row['Alarm/Event'] || 
        row['Alarm'] || 
        row['Event'] ||
        row['Alert'];
      
      // Skip rows without timestamp or event type
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