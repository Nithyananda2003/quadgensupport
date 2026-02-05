'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


import FooterCategories from '@/components/FooterCategories'
import { Search, ChevronRight } from 'lucide-react'

export default function ProductSupportPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])
  const products = [
    'Accessories',
    'Cloud-managed Systems',
    'Controller-less Systems',
    'Data Plane',
    'Ethernet Switches',
    'IoT Networking Systems',
    'Network Access & Policy',
    'Network Controllers',
    'Network Monitoring',
    'Network Reporting',
    'Optical Transceivers',
    'Service Assurance and Business Intelligence',
    'Wireless Access Points',
    'WLAN Controllers',
    'Other'
  ]

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">


      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#0088cc]">Home</a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#002f6c] font-semibold">Product Support</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 flex-grow w-full">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 md:p-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">QuadGen Sales Contact Form</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Share your details and a local QuadGen sales representative will get in touch with you soon.
          </p>

          <form className="max-w-3xl space-y-6">
            {/* Customer Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Are you a new or existing customer? <span className="text-red-500">*</span>
              </label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#0088cc] focus:border-[#0088cc] block p-2.5">
                <option value="">Select...</option>
                <option value="new">New Customer</option>
                <option value="existing">Existing Customer</option>
              </select>
            </div>

            {/* Products Interest */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What products are you interested in?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {products.map((product) => (
                  <label key={product} className="flex items-center space-x-3 p-2 border border-gray-100 rounded hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#0088cc] bg-gray-100 border-gray-300 rounded focus:ring-[#0088cc]" />
                    <span className="text-sm text-gray-700">{product}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us about your project <span className="text-gray-400 font-normal">(challenges, goals, etc.)</span>
              </label>
              <textarea
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#0088cc] focus:border-[#0088cc] block p-2.5 h-32"
              ></textarea>
            </div>

            {/* Business Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#0088cc] focus:border-[#0088cc] block p-2.5"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#0088cc] focus:border-[#0088cc] block p-2.5">
                <option value="">Select...</option>
                <option value="education">Education</option>
                <option value="government">Government</option>
                <option value="healthcare">Healthcare</option>
                <option value="hospitality">Hospitality</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Marketing Opt-in */}
            <div className="flex items-start space-x-3 py-2">
              <input type="checkbox" className="mt-1 w-4 h-4 text-[#0088cc] bg-gray-100 border-gray-300 rounded focus:ring-[#0088cc]" />
              <p className="text-xs text-gray-600 leading-relaxed">
                Yes, I would like to receive additional informational, technical, marketing and industry content from QuadGen and its affiliates and subsidiaries.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-500">
              <p>
                I understand I can unsubscribe at any time and that the personal data that I provide will be processed in accordance with and as described in the <a href="#" className="text-[#0088cc] hover:underline">Privacy Statement</a>.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#002f6c] text-white px-8 py-3 text-sm font-bold hover:bg-[#001a3d] transition-colors rounded-md shadow-sm w-full md:w-auto"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Categories */}
      <div className="mt-auto flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  );
}
