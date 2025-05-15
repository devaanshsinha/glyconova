import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-semibold mb-4">Welcome to Glyconova</h2>
      <p className="mb-6 text-gray-700">
        Your diabetes data analytics hub—track insulin, glucose, and get insights.
      </p>
      <Link
        href="/login"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login to Get Started
      </Link>
    </div>
  )
}
