// src/app/page.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* Hero */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Welcome to Glyconova
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
          Your all-in-one diabetes data analytics hub. Connect your Dexcom CGM and Omnipod insulin pump to visualize trends, uncover patterns, and get personalized suggestions.
        </p>
        <Link
          href="/sign-in"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* What is Diabetes? */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          What Is Diabetes?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Diabetes is a chronic condition that affects how your body turns food into energy. Managing blood glucose levels is critical to prevent complications—Glyconova helps you stay on top of your numbers by bringing all your data together in one place.
        </p>
      </section>

      {/* Integrations */}
      <section className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Dexcom */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <Image src="/globe.svg" alt="Dexcom icon" width={48} height={48} />
          <h3 className="mt-4 text-2xl font-semibold text-gray-900">
            Dexcom Integration
          </h3>
          <p className="mt-2 text-gray-700">
            Seamlessly pull in real-time CGM data from your Dexcom device. View rolling averages, time-in-range, and pinpoint trends at a glance.
          </p>
        </div>

        {/* Omnipod */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <Image src="/file.svg" alt="Omnipod icon" width={48} height={48} />
          <h3 className="mt-4 text-2xl font-semibold text-gray-900">
            Omnipod Integration
          </h3>
          <p className="mt-2 text-gray-700">
            Connect your Omnipod PDM or iPhone app to import your basal and bolus history. Analyze your insulin patterns alongside your glucose readings.
          </p>
        </div>

        {/* More to come */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <Image src="/window.svg" alt="Insights icon" width={48} height={48} />
          <h3 className="mt-4 text-2xl font-semibold text-gray-900">
            Future Integrations
          </h3>
          <p className="mt-2 text-gray-700">
            We're working on adding support for other pumps, smart pens, and dietary tracking. Stay tuned!
          </p>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            What You Can Do with Glyconova
          </h2>
          <ul className="mt-6 space-y-4 list-disc list-inside text-gray-700">
            <li>Visualize glucose trends over days, weeks, or months.</li>
            <li>Detect patterns like "morning highs" or "overnight lows."</li>
            <li>Compare your insulin delivery and carb intake side-by-side.</li>
            <li>Receive personalized basal/bolus adjustment suggestions.</li>
            <li>Export your data for sharing with your care team.</li>
          </ul>
        </div>
      </section>

    </div>
  )
}
