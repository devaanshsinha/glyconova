'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface FeatureHighlightProps {
  title: string
  description: string
  image: string
  index: number
  isReversed?: boolean
}

export function FeatureHighlight({ title, description, image, index, isReversed = false }: FeatureHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.2 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
    >
      {/* Content */}
      <div className="flex-1">
        <motion.h3 
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.1 }}
          className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.2 }}
          className="text-gray-600 text-lg mb-6"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group"
        >
          <span className="font-medium">Learn more</span>
          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>

      {/* Image/Preview */}
      <motion.div 
        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.1 }}
        className="flex-1 relative h-64 w-full rounded-2xl overflow-hidden shadow-xl group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <span className="text-white text-xl font-bold">Feature Preview</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 