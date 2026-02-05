'use client';

import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  if (!isVisible) return null

  const handleActionClick = (href: string) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      if (href !== '#') {
        router.push(href)
      }
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-red-900">Alert 1: Few Users are facing issue on QuadGen Cloud UI</h3>
            <p className="text-red-800 mt-2">
              UI is not allowing users to create WLAN, Add APs or edit configuration on Cloud.
              Our team is aware of the issue and is actively working to resolve it.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                onClick={() => handleActionClick('#')}
                className="px-3 py-1 bg-red-900 text-white text-sm rounded hover:bg-red-800 transition"
              >
                Activate Purchase
              </button>
              <button 
                onClick={() => handleActionClick('/warranty-checker')}
                className="px-3 py-1 bg-red-900 text-white text-sm rounded hover:bg-red-800 transition"
              >
                Warranty Checker
              </button>
              <button 
                onClick={() => handleActionClick('/warranty')}
                className="px-3 py-1 bg-red-900 text-white text-sm rounded hover:bg-red-800 transition"
              >
                Register Warranty
              </button>
              <button 
                onClick={() => handleActionClick('/downloads')}
                className="px-3 py-1 bg-red-900 text-white text-sm rounded hover:bg-red-800 transition"
              >
                Download Licenses
              </button>
              <button 
                onClick={() => handleActionClick('/contact-us')}
                className="px-3 py-1 bg-red-900 text-white text-sm rounded hover:bg-red-800 transition"
              >
                Submit A Case
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-red-500 hover:text-red-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
