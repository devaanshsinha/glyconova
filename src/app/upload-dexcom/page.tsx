'use client'

import { SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import { DexcomUploader } from '@/components/DexcomUploader'
import { DexcomGuide } from '@/components/DexcomGuide'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, UploadCloud, BookText } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function UploadDexcomPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [uploadRef, uploadInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [guideRef, guideInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50 pb-16">
        {/* Header Section */}
        <motion.section
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-b-3xl shadow-xl mb-12 relative"
        >
          {/* Back button */}
          <motion.div variants={fadeInUp} className="mb-6 absolute top-8 left-8">
            <Link 
              href="/dashboard" 
              className="flex items-center text-white hover:text-blue-200 transition-colors font-medium text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </motion.div>
          
          <div className="text-center pt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Upload Dexcom Data</h1>
            <p className="text-lg md:text-xl opacity-90">
              Upload your Dexcom Clarity CSV export to visualize your glucose trends.
            </p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Dexcom Uploader */}
            <motion.section
              ref={uploadRef}
              initial="hidden"
              animate={uploadInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <UploadCloud className="w-6 h-6 text-blue-600" />
                <span>Upload Your Data</span>
              </h2>
              <DexcomUploader />
            </motion.section>
            
            {/* Dexcom Guide */}
            <motion.section
              ref={guideRef}
              initial="hidden"
              animate={guideInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <BookText className="w-6 h-6 text-indigo-600" />
                <span>Export Guide</span>
              </h2>
              <DexcomGuide />
            </motion.section>
          </div>
        </div>
      </div>
    </SignedIn>
  );
} 