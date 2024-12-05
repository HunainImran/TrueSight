import { Brain, Shield, Zap } from 'lucide-react'

export default function Introduction() {
  return (
    <section className="py-40 bg-black bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How TrueSight Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-blue-400" />}
            title="AI-Powered Analysis"
            description="Our advanced machine learning algorithms analyze email content and URLs to detect phishing attempts."
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-green-400" />}
            title="Real-Time Protection"
            description="Get instant results and protect yourself from the latest phishing techniques."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-yellow-400" />}
            title="Easy to Use"
            description="Simply paste your suspicious email or URL, and let TrueSight do the rest."
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
    icon: React.ReactNode;  // This allows the icon prop to accept any valid React element, including JSX elements like <Brain />
    title: string;          // title should be a string
    description: string;    // description should be a string
  }

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

