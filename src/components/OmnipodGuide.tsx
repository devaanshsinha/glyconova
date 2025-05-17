'use client';

export function OmnipodGuide() {
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-900">How to Export Your Omnipod Data</h2>
      <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-700">
        <li>
          <strong>Open your Omnipod software on your computer</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Open the Omnipod Desktop software where your data is stored.</p>
        </li>
        <li>
          <strong>Navigate to Reports or Data Export</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Find the export function in your Omnipod software (may vary by software version).</p>
        </li>
        <li>
          <strong>Choose Date Range</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Select the date range for the data you want to export.</p>
        </li>
        <li>
          <strong>Export as ZIP File</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Make sure to save or export the data as a ZIP file that contains all CSV files.</p>
        </li>
        <li>
          <strong>Upload Your ZIP File</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Use the upload form on this page to upload your ZIP file.</p>
        </li>
      </ol>
      <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm">
        <p className="font-medium">Important Note:</p>
        <p className="mt-1">The ZIP file should contain insulin data (bolus and basal), alarm events, and other Omnipod data in CSV format. The system will automatically process all relevant files in the ZIP.</p>
      </div>
    </section>
  );
} 