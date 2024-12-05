import { Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Shield className="w-8 h-8 text-blue-400" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          TrueSight
        </span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

