'use client'

import { motion } from 'framer-motion'

interface StepCardProps {
  step: string
  title: string
  description: string
  index: number
}

export function StepCard({ step, title, description, index }: StepCardProps) {
  return (
    <motion.div
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
        {step}
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </motion.div>
  )
} 