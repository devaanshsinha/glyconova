'use client'

interface StepCardProps {
  step: string
  title: string
  description: string
  index: number
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer">
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
        {step}
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
} 