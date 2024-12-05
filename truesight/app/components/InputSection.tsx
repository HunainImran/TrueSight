import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface InputSectionProps {
    onSubmit: (input: string) => void;  // onSubmit is a function that takes a string and returns void
    isLoading: boolean;  // isLoading is a boolean
  }

export default function InputSection({ onSubmit, isLoading }: InputSectionProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(input)
  }

  return (
    <section id="check" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Check for Phishing</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <textarea
              className="w-full p-4 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-white placeholder-gray-400"
              rows={5}
              placeholder="Paste your suspicious email content or URL here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 text-lg font-semibold text-white rounded-full transition-all duration-300 ${
              isLoading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Search className="mr-2" />
                Check for Phishing
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

