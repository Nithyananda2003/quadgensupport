'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


import FooterCategories from '@/components/FooterCategories'
import { AlertCircle, CheckCircle, Search, ChevronRight } from 'lucide-react'

export default function WarrantyRegistrationPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    productName: '',
    serialNumber: '',
    purchaseDate: '',
    expiryDate: ''
  })
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setIsError(false)

    try {
      const res = await fetch('/api/warranty/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to register warranty')
      }

      setMessage('Warranty registered successfully!')
      setFormData({
        customerName: '',
        productName: '',
        serialNumber: '',
        purchaseDate: '',
        expiryDate: ''
      })
    } catch (err) {
      setMessage(err.message)
      setIsError(true)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">


      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#0088cc]">Home</a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#002f6c] font-semibold">Register Warranty</span>
        </div>
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#002f6c] px-8 py-6">
              <h1 className="text-white text-2xl font-bold">Register New Warranty</h1>
              <p className="text-[#0088cc] text-sm mt-1">Add a new device warranty to the database</p>
            </div>

            <div className="p-8">
              {message && (
                <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${isError ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                  {isError ? <AlertCircle className="w-5 h-5 flex-shrink-0" /> : <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Customer Name</label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Product Name</label>
                    <input
                      type="text"
                      required
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                      placeholder="e.g. QG-5000 Router"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Serial Number (Unique Code)</label>
                  <input
                    type="text"
                    required
                    value={formData.serialNumber}
                    onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all font-mono"
                    placeholder="e.g. SN-12345678"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Purchase Date</label>
                    <input
                      type="date"
                      required
                      value={formData.purchaseDate}
                      onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Expiry Date</label>
                    <input
                      type="date"
                      required
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end border-t border-gray-100 mt-8">
                  <button
                    type="submit"
                    className="bg-[#002f6c] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#001f4d] active:transform active:scale-[0.98] transition-all shadow-lg shadow-[#002f6c]/20"
                  >
                    Register Warranty
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
