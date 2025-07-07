'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQCardProps {
  question: string
  answer: string
  index: number
}

export function FAQCard({ question, answer }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-xl font-semibold text-gray-900">
          {question}
        </h3>
        <div className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  )
} 