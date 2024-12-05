import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              TrueSight
            </span>
          </div>
          <p className="text-lg font-semibold text-foreground">Guarding Your Digital World, One Email at a Time</p>
          <p className="text-sm text-muted-foreground">&copy; 2023 TrueSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  
  