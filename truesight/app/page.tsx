'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import Footer from './components/Footer'

export default function Home() {
  const [result, setResult] = useState<null | { isPhishing: boolean; confidence: number }>(null)
  const [isLoading, setIsLoading] = useState(false)

  const checkPhishing = async (input: string) => {
    setIsLoading(true)

    try {
      // Send a POST request to the Flask API
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email_text: input }) // Sending the email text to the API
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API')
      }

      const data = await response.json()

      // Update the result state with the API response
      setResult({
        isPhishing: data.prediction === 'Phishing',
        confidence: data.confidence
      })
    } catch (error) {
      console.error('Error:', error)
      // Optionally, reset the result or show an error message
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <Header />
      <Hero />
      <Introduction />
      <InputSection onSubmit={checkPhishing} isLoading={isLoading} />
      <OutputSection result={result} />
      <Footer />
    </main>
  )
}

