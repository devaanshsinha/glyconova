'use client'

import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
} 