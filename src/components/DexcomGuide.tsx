'use client';

export function DexcomGuide() {
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-900">How to Export Your Dexcom Data</h2>
      <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-700">
        <li>
          <strong>Log in to Dexcom Clarity</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Visit <a href="https://clarity.dexcom.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">clarity.dexcom.com</a> and sign in with your Dexcom account.</p>
        </li>
        <li>
          <strong>Navigate to Reports</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Click on "Reports" in the main navigation.</p>
        </li>
        <li>
          <strong>Choose Date Range</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Select a date range (up to 90 days) for the data you want to export.</p>
        </li>
        <li>
          <strong>Export Data</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Click "Export" and select "CSV" as the file format.</p>
        </li>
        <li>
          <strong>Upload Your File</strong>
          <p className="mt-1 text-sm text-gray-600 ml-5">Use the upload form on this page to upload your CSV file.</p>
        </li>
      </ol>
    </section>
  );
} 