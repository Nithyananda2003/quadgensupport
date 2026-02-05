'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AlertCircle } from 'lucide-react'
import FooterCategories from '@/components/FooterCategories'

import Link from 'next/link'
import { Search } from 'lucide-react'

export default function WarrantyCheckerPage() {
  const [showInstructions, setShowInstructions] = useState(true)
  const [serial, setSerial] = useState('')
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  const router = useRouter()

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  //   if (!isLoggedIn) {
  //     router.push('/login')
  //   }
  // }, [router])

  const handleCheck = async () => {
    setError('')
    setResult(null)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    if (!serial) {
      setError('Please enter a valid serial number.')
      return
    }

    // Mock Validation Logic
    const mockDb: Record<string, any> = {
      'QGW-1001': {
        status: 'Active',
        productName: 'QG-Enterprise AP 5000',
        registeredBy: 'Acme Corp',
        purchaseDate: '2025-01-15',
        expiryDate: '2028-01-15'
      },
      'QGW-EXP': {
        status: 'Expired',
        productName: 'QG-Switch 24-Port',
        registeredBy: 'Legacy Systems Inc.',
        purchaseDate: '2020-05-10',
        expiryDate: '2023-05-10'
      }
    }

    const data = mockDb[serial] || (serial.startsWith('QGW') ? {
      status: 'Active',
      productName: 'QuadGen Wireless Device',
      registeredBy: 'Demo User',
      purchaseDate: '2024-01-01',
      expiryDate: '2027-01-01'
    } : null)

    if (data) {
      setResult(data)
    } else {
      setError('Serial number not found. Please verify and try again.')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">


      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#0088cc]">Home</a>
          <Search className="h-4 w-4 text-gray-400" />
          <span className="text-[#002f6c] font-semibold">Warranty Checker</span>
        </div>
      </div>

      {!result && (
        <div className="bg-blue-50 text-[#002f6c] text-sm py-3 text-center font-medium border-b border-blue-100">
          Please log in to check your device warranty status.
        </div>
      )}

      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-8 py-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#002f6c] mb-3">Warranty Checker</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Verify the support coverage for your QuadGen device.
            </p>
            <p className="text-xs text-blue-600 mt-2 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100">
              Try: <strong>QGW-1001</strong> (Active) or <strong>QGW-EXP</strong> (Expired)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-8 md:p-10">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    className="block w-full pl-12 pr-32 py-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:bg-white transition-all text-lg"
                    placeholder="Enter Serial Number (e.g. SN-12345678)"
                  />
                  <button
                    onClick={handleCheck}
                    className="absolute right-2 top-2 bottom-2 bg-[#002f6c] text-white px-6 rounded-md font-semibold text-sm hover:bg-[#001f4d] transition-colors"
                  >
                    Check Status
                  </button>
                </div>

                {error && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3 text-red-700">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Verification Failed</p>
                      <p className="text-sm mt-1 opacity-90">{error}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {result && (
              <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-10">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-[#002f6c]">Device Details</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${(result.status || '').toUpperCase() === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                      {(result.status || '').toString()}
                    </span>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Product Name</p>
                        <p className="font-medium text-gray-900">{result.productName}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Registered Owner</p>
                        <p className="font-medium text-gray-900">{result.customerName || result.registeredBy || '—'}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Purchase Date</p>
                        <p className="font-medium text-gray-900">{new Date(result.purchaseDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Warranty Expiry</p>
                        <p className={`font-medium ${new Date(result.expiryDate) > new Date() ? 'text-green-600' : 'text-red-600'}`}>
                          {new Date(result.expiryDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Need to register a new device?{' '}
              <a href="/warranty/register" className="text-[#0088cc] font-semibold hover:text-[#002f6c] transition-colors">
                Register Product
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  );
}
