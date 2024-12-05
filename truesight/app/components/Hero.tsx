import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-40 text-center">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
        Detect Phishing with AI Precision
      </h1>
      <p className="text-xl mb-8 animate-fade-in-up">
        TrueSight: Your AI-powered shield against email threats
      </p>
      <a
        href="#check"
        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 animate-pulse"
      >
        Start Checking
        <ArrowRight className="ml-2" />
      </a>
    </section>
  )
}

