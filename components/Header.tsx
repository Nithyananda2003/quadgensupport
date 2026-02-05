import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center overflow-hidden">
                <img src="/quadgen.jpg" alt="Q" className="h-full w-auto object-contain" />
              </div>
              <span className="font-bold text-xl text-blue-900">QuadGen Support</span>
            </div>
          </div>


          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-700 hover:text-blue-900 transition">Home</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-900 transition">Products</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-900 transition">Documentation</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-900 transition">Community</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded hover:bg-blue-50 transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
              Register
            </button>
          </div>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
