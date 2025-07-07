'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeatureHighlightProps {
  title: string
  description: string
  image: string
  index: number
  isReversed?: boolean
  learnMoreLink?: string
}

export function FeatureHighlight({ title, description, image, index, isReversed = false, learnMoreLink }: FeatureHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
    >
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          {description}
        </p>
        {learnMoreLink ? (
          <Link href={learnMoreLink}>
            <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group">
              <span className="font-medium">Learn more</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ) : (
          <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group">
            <span className="font-medium">Learn more</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>

      {/* Image/Preview */}
      <div className="flex-1 relative h-64 w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <span className="text-white text-xl font-bold">Feature Preview</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 