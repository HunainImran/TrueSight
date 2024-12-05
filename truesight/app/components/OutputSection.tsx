import { AlertTriangle, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface OutputSectionProps {
    result: {
      isPhishing: boolean;  // Indicates whether the email is phishing or not
      confidence: number;   // Confidence level (percentage)
    } | null;  // result can be null if no result is available
  }

export default function OutputSection({ result }: OutputSectionProps) {
  if (!result) return null

  const { isPhishing, confidence } = result

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="py-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white bg-opacity-10 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              {isPhishing ? (
                <AlertTriangle className="w-16 h-16 text-red-500" />
              ) : (
                <CheckCircle className="w-16 h-16 text-green-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">
              {isPhishing ? 'Warning: Phishing Detected!' : 'Email Appears Safe'}
            </h3>
            <p className="text-center text-lg mb-6">
              {isPhishing
                ? 'This email or URL shows signs of a phishing attempt. Exercise caution!'
                : 'Our analysis suggests this email or URL is legitimate.'}
            </p>
            <div className="flex justify-center items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className={`h-2.5 rounded-full ${
                    isPhishing ? 'bg-red-600' : 'bg-green-600'
                  }`}
                  style={{ width: `${confidence}%` }}
                ></div>
              </div>
              <span className="ml-4 font-semibold">{confidence.toFixed(2)}%</span>
            </div>
            <p className="text-center mt-4 text-sm text-gray-300">
              Confidence level in our analysis
            </p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

