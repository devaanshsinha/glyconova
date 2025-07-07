// Types for Dexcom data
export interface DexcomUploadData {
  patientFirstName?: string;
  patientLastName?: string;
  deviceInfo?: string;
  sourceDeviceId?: string;
  readings: DexcomReadingData[];
}

export interface DexcomReadingData {
  index?: string;
  timestamp?: Date;
  eventType?: string;
  eventSubtype?: string;
  patientInfo?: string;
  deviceInfo?: string;
  sourceDeviceId?: string;
  glucoseValue?: number;
  insulinValue?: number;
  carbValue?: number;
  duration?: string;
  glucoseRateOfChange?: number;
  transmitterTime?: string;
  transmitterId?: string;
}

// Types for Omnipod data
export interface OmnipodUploadData {
  fileName: string;
  dateRange?: string;
  bgReadings: OmnipodBgReading[];
  cgmReadings: OmnipodCgmReading[];
  bolusRecords: OmnipodBolusRecord[];
  basalRecords: OmnipodBasalRecord[];
  insulinRecords: OmnipodInsulinRecord[];
  carbRecords: OmnipodCarbRecord[];
  alarmRecords: OmnipodAlarmRecord[];
  exerciseRecords: OmnipodExerciseRecord[];
  foodRecords: OmnipodFoodRecord[];
  manualInsulinRecords: OmnipodManualInsulinRecord[];
  medicationRecords: OmnipodMedicationRecord[];
  notesRecords: OmnipodNotesRecord[];
}

export interface OmnipodBgReading {
  timestamp: Date;
  glucoseValue: number;
  manualReading?: string;
  serialNumber?: string;
}

export interface OmnipodCgmReading {
  timestamp: Date;
  cgmGlucoseValue: number;
  serialNumber?: string;
}

export interface OmnipodBolusRecord {
  timestamp: Date;
  insulinType?: string;
  bloodGlucoseInput?: number;
  carbsInput?: number;
  carbsRatio?: number;
  insulinDelivered?: number;
  initialDelivery?: number;
  extendedDelivery?: number;
  serialNumber?: string;
}

export interface OmnipodBasalRecord {
  timestamp: Date;
  insulinType?: string;
  duration?: number;
  percentage?: number;
  rate?: number;
  insulinDelivered?: number;
  serialNumber?: string;
}

export interface OmnipodInsulinRecord {
  timestamp: Date;
  insulinType?: string;
  amount?: number;
  serialNumber?: string;
}

export interface OmnipodCarbRecord {
  timestamp: Date;
  carbAmount?: number;
  serialNumber?: string;
}

export interface OmnipodAlarmRecord {
  timestamp: Date;
  alarmType?: string;
  description?: string;
  serialNumber?: string;
}

export interface OmnipodExerciseRecord {
  timestamp: Date;
  exerciseType?: string;
  duration?: number;
  intensity?: string;
  notes?: string;
}

export interface OmnipodFoodRecord {
  timestamp: Date;
  name?: string;
  carbs?: number;
  fat?: number;
  protein?: number;
  calories?: number;
  servingQuantity?: number;
  numberOfServings?: number;
}

export interface OmnipodManualInsulinRecord {
  timestamp: Date;
  insulinType?: string;
  amount?: number;
  notes?: string;
}

export interface OmnipodMedicationRecord {
  timestamp: Date;
  medicationName?: string;
  dosage?: string;
  notes?: string;
}

export interface OmnipodNotesRecord {
  timestamp: Date;
  note?: string;
  category?: string;
}

// Helper function to safely parse float values
function safeParseFloat(value: string | undefined): number | undefined {
  if (!value || value.trim() === '') return undefined;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

// Helper function to safely parse int values
function safeParseInt(value: string | undefined): number | undefined {
  if (!value || value.trim() === '') return undefined;
  const parsed = parseInt(value);
  return isNaN(parsed) ? undefined : parsed;
}

// Helper function to parse timestamp
function parseTimestamp(timestamp: string): Date | undefined {
  if (!timestamp || timestamp.trim() === '') return undefined;
  
  try {
    // Handle both ISO format and Omnipod format (YYYY-MM-DD HH:mm)
    if (timestamp.includes('T')) {
      return new Date(timestamp);
    } else {
      // Convert "YYYY-MM-DD HH:mm" to ISO format
      const isoTimestamp = timestamp.replace(' ', 'T') + ':00';
      return new Date(isoTimestamp);
    }
  } catch (error) {
    console.warn('Failed to parse timestamp:', timestamp);
    return undefined;
  }
}

// Dexcom CSV parser
export function parseDexcomCSV(csvContent: string): DexcomUploadData {
  const lines = csvContent.split('\n');
  const readings: DexcomReadingData[] = [];
  let patientFirstName: string | undefined;
  let patientLastName: string | undefined;
  let deviceInfo: string | undefined;
  let sourceDeviceId: string | undefined;

  // Find header row
  const headerRowIndex = lines.findIndex(line => 
    line.includes('Index') && line.includes('Timestamp')
  );

  if (headerRowIndex === -1) {
    throw new Error('Invalid Dexcom CSV format: Could not find header row');
  }

  const headers = lines[headerRowIndex].split(',').map(h => h.replace(/"/g, '').trim());

  // Parse metadata from header rows (rows before the header)
  for (let i = 0; i < headerRowIndex; i++) {
    const line = lines[i];
    if (line.includes('FirstName')) {
      const parts = line.split(',');
      if (parts.length > 4) patientFirstName = parts[4].replace(/"/g, '').trim();
    } else if (line.includes('LastName')) {
      const parts = line.split(',');
      if (parts.length > 4) patientLastName = parts[4].replace(/"/g, '').trim();
    } else if (line.includes('Device')) {
      const parts = line.split(',');
      if (parts.length > 5) deviceInfo = parts[5].replace(/"/g, '').trim();
      if (parts.length > 6) sourceDeviceId = parts[6].replace(/"/g, '').trim();
    }
  }

  // Parse data rows
  for (let i = headerRowIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',').map(v => v.replace(/"/g, '').trim());
    
    if (values.length < headers.length) continue;

    const reading: DexcomReadingData = {};

    headers.forEach((header, index) => {
      const value = values[index];
      
      switch (header) {
        case 'Index':
          reading.index = value || undefined;
          break;
        case 'Timestamp (YYYY-MM-DDThh:mm:ss)':
          reading.timestamp = parseTimestamp(value);
          break;
        case 'Event Type':
          reading.eventType = value || undefined;
          break;
        case 'Event Subtype':
          reading.eventSubtype = value || undefined;
          break;
        case 'Patient Info':
          reading.patientInfo = value || undefined;
          break;
        case 'Device Info':
          reading.deviceInfo = value || undefined;
          break;
        case 'Source Device ID':
          reading.sourceDeviceId = value || undefined;
          break;
        case 'Glucose Value (mg/dL)':
          reading.glucoseValue = safeParseFloat(value);
          break;
        case 'Insulin Value (u)':
          reading.insulinValue = safeParseFloat(value);
          break;
        case 'Carb Value (grams)':
          reading.carbValue = safeParseFloat(value);
          break;
        case 'Duration (hh:mm:ss)':
          reading.duration = value || undefined;
          break;
        case 'Glucose Rate of Change (mg/dL/min)':
          reading.glucoseRateOfChange = safeParseFloat(value);
          break;
        case 'Transmitter Time (Long Integer)':
          reading.transmitterTime = value || undefined;
          break;
        case 'Transmitter ID':
          reading.transmitterId = value || undefined;
          break;
      }
    });

    readings.push(reading);
  }

  return {
    patientFirstName,
    patientLastName,
    deviceInfo,
    sourceDeviceId,
    readings
  };
}

// Helper function to parse Omnipod CSV with common format
function parseOmnipodCSVContent<T>(
  csvContent: string,
  parseRow: (values: string[], headers: string[]) => T | null
): { data: T[], dateRange?: string } {
  const lines = csvContent.split('\n');
  const data: T[] = [];
  let dateRange: string | undefined;

  // First line often contains metadata
  if (lines.length > 0 && lines[0].includes('Date Range:')) {
    const match = lines[0].match(/Date Range:([^,]+)/);
    if (match) {
      dateRange = match[1].trim();
    }
  }

  // Find header row (usually second line)
  let headerRowIndex = 1;
  if (lines.length <= 1) return { data, dateRange };

  const headers = lines[headerRowIndex].split(',').map(h => h.replace(/"/g, '').trim());

  // Parse data rows
  for (let i = headerRowIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',').map(v => v.replace(/"/g, '').trim());
    if (values.length < headers.length) continue;

    const parsedRow = parseRow(values, headers);
    if (parsedRow) {
      data.push(parsedRow);
    }
  }

  return { data, dateRange };
}

// Validate file type by checking content
export function validateDexcomCSV(content: string): boolean {
  return content.includes('Index') && 
         content.includes('Timestamp (YYYY-MM-DDThh:mm:ss)') && 
         content.includes('Event Type');
}

export function validateOmnipodFile(fileName: string): boolean {
  const omnipodFileTypes = [
    'bg_data', 'cgm_data', 'bolus_data', 'basal_data', 'insulin_data',
    'carbs_data', 'alarms_data', 'exercise_data', 'food_data',
    'manual_insulin_data', 'medication_data', 'notes_data'
  ];
  
  return omnipodFileTypes.some(type => fileName.includes(type));
}

// Omnipod CSV parser (for individual CSV files)
export function parseOmnipodCSV(csvContent: string, fileName: string): OmnipodUploadData {
  const result: OmnipodUploadData = {
    fileName,
    bgReadings: [],
    cgmReadings: [],
    bolusRecords: [],
    basalRecords: [],
    insulinRecords: [],
    carbRecords: [],
    alarmRecords: [],
    exerciseRecords: [],
    foodRecords: [],
    manualInsulinRecords: [],
    medicationRecords: [],
    notesRecords: []
  };

  try {
    if (fileName.includes('bg_data') || csvContent.includes('Glucose Value (mg/dl)')) {
      const { data, dateRange } = parseOmnipodCSVContent(csvContent, (values, headers) => {
        const reading: OmnipodBgReading | null = {
          timestamp: parseTimestamp(values[0]),
          glucoseValue: safeParseFloat(values[1]) || 0,
          manualReading: values[2] || undefined,
          serialNumber: values[3] || undefined
        } as OmnipodBgReading;
        
        return reading.timestamp ? reading : null;
      });
      result.bgReadings = data;
      if (dateRange) result.dateRange = dateRange;
      
    } else if (fileName.includes('cgm_data') || csvContent.includes('CGM Glucose Value')) {
      const { data } = parseOmnipodCSVContent(csvContent, (values, headers) => {
        const reading: OmnipodCgmReading | null = {
          timestamp: parseTimestamp(values[0]),
          cgmGlucoseValue: safeParseFloat(values[1]) || 0,
          serialNumber: values[2] || undefined
        } as OmnipodCgmReading;
        
        return reading.timestamp ? reading : null;
      });
      result.cgmReadings = data;
      
    } else if (fileName.includes('bolus_data') || csvContent.includes('Insulin Delivered')) {
      const { data } = parseOmnipodCSVContent(csvContent, (values, headers) => {
        const timestamp = parseTimestamp(values[0]);
        const insulinDelivered = safeParseFloat(values[5]);
        
        // Only create record if we have valid timestamp and insulin delivery
        if (!timestamp || !insulinDelivered || insulinDelivered <= 0) {
          return null;
        }
        
        const record: OmnipodBolusRecord = {
          timestamp,
          insulinType: values[1] || undefined,
          bloodGlucoseInput: safeParseFloat(values[2]),
          carbsInput: safeParseFloat(values[3]),
          carbsRatio: safeParseFloat(values[4]),
          insulinDelivered,
          initialDelivery: safeParseFloat(values[6]),
          extendedDelivery: safeParseFloat(values[7]),
          serialNumber: values[8] || undefined
        };
        
        return record;
      });
      result.bolusRecords = data;
      console.log(`Parsed ${data.length} bolus records from ${fileName}`);
      
    } else if (fileName.includes('basal_data') || csvContent.includes('Duration (minutes)')) {
      const { data } = parseOmnipodCSVContent(csvContent, (values, headers) => {
        const record: OmnipodBasalRecord | null = {
          timestamp: parseTimestamp(values[0]),
          insulinType: values[1] || undefined,
          duration: safeParseInt(values[2]),
          percentage: safeParseFloat(values[3]),
          rate: safeParseFloat(values[4]),
          insulinDelivered: safeParseFloat(values[5]),
          serialNumber: values[6] || undefined
        } as OmnipodBasalRecord;
        
        return record.timestamp ? record : null;
      });
      result.basalRecords = data;
      
    } else if (fileName.includes('food_data')) {
      const { data } = parseOmnipodCSVContent(csvContent, (values, headers) => {
        const record: OmnipodFoodRecord | null = {
          timestamp: parseTimestamp(values[0]),
          name: values[1] || undefined,
          carbs: safeParseFloat(values[2]),
          fat: safeParseFloat(values[3]),
          protein: safeParseFloat(values[4]),
          calories: safeParseFloat(values[5]),
          servingQuantity: safeParseFloat(values[6]),
          numberOfServings: safeParseFloat(values[7])
        } as OmnipodFoodRecord;
        
        return record.timestamp ? record : null;
      });
      result.foodRecords = data;
    }
    
  } catch (error) {
    console.warn(`Failed to parse ${fileName}:`, error);
  }

  return result;
}