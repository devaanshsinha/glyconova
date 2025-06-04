'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface PrivacyCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function PrivacyCard({ icon: Icon, title, description, index }: PrivacyCardProps) {
  return (
    <motion.div
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
} 