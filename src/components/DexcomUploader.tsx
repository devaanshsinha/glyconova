'use client';

import { useState } from 'react';

interface UploadResponse {
  success: boolean;
  message: string;
  error?: string;
}

export function DexcomUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResponse, setUploadResponse] = useState<UploadResponse | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const validateCSVFile = async (file: File): Promise<boolean> => {
    try {
      // Read the first few lines of the file to check if it has the expected structure
      const firstChunk = await readFirstBytes(file, 500);
      const firstLines = firstChunk.split('\n').slice(0, 5).join('\n');
      
      // Check for expected headers
      const hasDexcomHeaders = 
        firstLines.includes('Timestamp (YYYY-MM-DDThh:mm:ss)') && 
        firstLines.includes('Event Type') && 
        firstLines.includes('Glucose Value (mg/dL)');
      
      if (!hasDexcomHeaders) {
        setValidationMessage(
          'Warning: This file may not be in Dexcom Clarity CSV format. ' +
          'Make sure you\'re uploading the correct file.'
        );
        return false;
      }
      
      setValidationMessage('File appears to be a valid Dexcom Clarity CSV.');
      return true;
    } catch (error) {
      console.error('Error validating CSV:', error);
      setValidationMessage('Could not validate file format. Proceed with caution.');
      return true; // Continue anyway
    }
  };

  const readFirstBytes = (file: File, bytes: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          resolve(e.target.result as string);
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = () => reject(new Error('File read error'));
      
      // Read only the first chunk of the file
      const blob = file.slice(0, bytes);
      reader.readAsText(blob);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setUploadResponse(null);
    setErrorDetails(null);
    setValidationMessage(null);
    
    if (selectedFile && selectedFile.name.endsWith('.csv')) {
      validateCSVFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadResponse({
        success: false,
        message: 'Please select a file to upload',
      });
      return;
    }

    if (!file.name.endsWith('.csv')) {
      setUploadResponse({
        success: false,
        message: 'Please upload a CSV file',
      });
      return;
    }

    setIsUploading(true);
    setUploadResponse(null);
    setErrorDetails(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('Uploading file:', file.name, 'Size:', file.size);
      
      const response = await fetch('/api/upload-dexcom', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Response:', response.status, data);

      if (response.ok) {
        setUploadResponse({
          success: true,
          message: data.message,
        });
        setFile(null);
        setValidationMessage(null);
        
        // Clear the file input
        const fileInput = document.getElementById('dexcom-file') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        setUploadResponse({
          success: false,
          message: data.error || 'Failed to upload file',
        });
        if (data.details) {
          setErrorDetails(data.details);
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadResponse({
        success: false,
        message: 'An error occurred during upload',
      });
      setErrorDetails(error instanceof Error ? error.message : String(error));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-900">Upload Dexcom Data</h2>
      <p className="mt-2 text-gray-600">
        Upload your Dexcom Clarity CSV export (up to 90 days of data)
      </p>
      
      <div className="mt-4 space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="dexcom-file" className="text-sm text-gray-600">
            Select your Dexcom CSV file:
          </label>
          <input
            id="dexcom-file"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="border border-gray-300 rounded p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          
          {validationMessage && (
            <p className={`text-xs p-2 rounded ${
              validationMessage.includes('Warning') 
                ? 'bg-yellow-50 text-yellow-800' 
                : 'bg-green-50 text-green-800'
            }`}>
              {validationMessage}
            </p>
          )}
        </div>
        
        <button
          onClick={handleUpload}
          disabled={!file || isUploading}
          className={`w-full py-2 px-4 rounded-lg ${
            !file || isUploading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition`}
        >
          {isUploading ? 'Uploading...' : 'Upload Dexcom Data'}
        </button>
        
        {uploadResponse && (
          <div
            className={`p-3 rounded-lg text-sm ${
              uploadResponse.success
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {uploadResponse.message}
            {errorDetails && (
              <div className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto max-h-32">
                <strong>Error details:</strong> {errorDetails}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 