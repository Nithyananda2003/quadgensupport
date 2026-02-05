'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


import FooterCategories from '@/components/FooterCategories'
import { Search, ChevronRight, Info } from 'lucide-react'

export default function FeedbackPage() {
  const [showInstructions, setShowInstructions] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  return (
    <main className="min-h-screen bg-[#fcfaf2] flex flex-col">


      {/* Breadcrumb/Sub-header Bar */}
      <div className="bg-[#fcfaf2] border-b border-gray-300 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center text-xs text-[#002f6c] font-medium space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span>|</span>
            <span className="text-[#002f6c] font-bold">Feedback</span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-[1440px] mx-auto px-0 md:px-6 py-6 flex-grow">
        <div className="bg-white shadow-lg p-8 md:p-12 min-h-[600px] border border-gray-200">
          {/* Header section */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="text-[#0088cc] text-sm flex items-center gap-1 hover:underline"
            >
              <div className="bg-[#002f6c] rounded-full p-0.5">
                <Info className="h-3 w-3 text-white" />
              </div>
              {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h1 className="text-gray-900 text-3xl font-light mb-6 border-b border-gray-100 pb-2">We value your feedback</h1>
              <p className="text-sm text-gray-900 leading-relaxed">
                Thank you for taking the time to provide feedback. Good or bad, it's how we get better.
              </p>
            </div>

            {showInstructions && (
              <div>
                <h2 className="text-gray-900 text-3xl font-light mb-6 border-b border-gray-100 pb-2">Instructions</h2>
                <ol className="text-sm text-gray-900 space-y-2 list-decimal list-inside">
                  <li>Fill out the form below.</li>
                  <li>Click Submit button.</li>
                </ol>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="text-[#0088cc] text-sm hover:underline"
                  >
                    Always Hide Instructions
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Form section */}
          <form className="space-y-6 max-w-5xl">
            {/* Title */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                <div className="bg-[#002f6c] rounded-full p-0.5">
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
                Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900"
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                <div className="bg-[#002f6c] rounded-full p-0.5">
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 h-32 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                  <div className="bg-[#002f6c] rounded-full p-0.5">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </div>
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                  <div className="bg-[#002f6c] rounded-full p-0.5">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </div>
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Browser */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                  <div className="bg-[#002f6c] rounded-full p-0.5">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </div>
                  Browser
                </label>
                <select className="w-full border border-gray-300 p-2 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900">
                  <option value="">Select Browser</option>
                  <option value="chrome">Chrome</option>
                  <option value="firefox">Firefox</option>
                  <option value="safari">Safari</option>
                  <option value="edge">Edge</option>
                </select>
              </div>

              {/* Operating System */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                  <div className="bg-[#002f6c] rounded-full p-0.5">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </div>
                  Operating system
                </label>
                <select className="w-full border border-gray-300 p-2 text-sm bg-[#f9f9f9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0088cc] text-gray-900">
                  <option value="">Select OS</option>
                  <option value="windows">Windows</option>
                  <option value="macos">macOS</option>
                  <option value="linux">Linux</option>
                  <option value="android">Android</option>
                  <option value="ios">iOS</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#002f6c] text-white px-6 py-2 text-sm font-bold hover:bg-[#001f4d] transition rounded-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="px-4 md:px-12 py-10 mt-auto bg-white border-t border-gray-200 flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
