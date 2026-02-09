'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, HelpCircle, Search, AlertCircle, CheckCircle, Smartphone, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import FooterCategories from '@/components/FooterCategories'
import Image from 'next/image'

export default function WarrantyCheckerPage() {
  const [formData, setFormData] = useState({
    serialNumber: '',
    modelNumber: '',
    purchaseDate: '',
    country: 'United States',
  })

  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.serialNumber) return

    setError('')
    setResult(null)
    setIsChecking(true)
    setHasSearched(true)

    try {
      const res = await fetch(`/api/warranty/check?serialNumber=${formData.serialNumber}`)
      const data = await res.json()

      if (!res.ok) {
        if (res.status === 404) {
          setResult(null) // Warranty not found
        } else {
          throw new Error(data.error || 'Failed to check warranty')
        }
      } else {
        setResult(data.warranty)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f7fa] flex flex-col font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002f6c] to-[#0052a3] text-white py-12 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Warranty Checker</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Check the warranty status of your network switch.
            </p>
          </div>
          <div className="relative w-full max-w-md h-48 md:h-64 z-10">
            <div className="w-full h-full bg-blue-400/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/brain/7a3f5a5a-2bfb-403a-896c-434ba03a09e1/network_switch_header.png"
                alt="Network Switch"
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.src = "/placeholder.svg" }}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-10 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-blue-50 mb-8">
          <form onSubmit={handleCheck} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div>
                <Label htmlFor="serialNumber" className="text-sm font-bold text-gray-700 mb-2 block">Enter Serial Number <span className="text-red-500">*</span></Label>
                <Input
                  id="serialNumber"
                  required
                  value={formData.serialNumber}
                  onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                  placeholder="E.g. ABC12345678"
                  className="h-12 border-gray-200 focus:ring-[#0088cc]"
                />
              </div>
              <div>
                <Label htmlFor="modelNumber" className="text-sm font-bold text-gray-700 mb-2 block">Product Model / Part Number</Label>
                <Input
                  id="modelNumber"
                  value={formData.modelNumber}
                  onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                  placeholder="E.g. SG350-28P"
                  className="h-12 border-gray-200 focus:ring-[#0088cc]"
                />
              </div>
              <div>
                <Label htmlFor="purchaseDate" className="text-sm font-bold text-gray-700 mb-2 block">Purchase Date</Label>
                <div className="relative">
                  <Input
                    id="purchaseDate"
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                    className="h-12 border-gray-200 focus:ring-[#0088cc] w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="flex flex-col gap-4">
                <button type="button" className="flex items-center gap-1 text-[11px] text-[#0088cc] hover:underline font-bold">
                  <HelpCircle className="w-4 h-4" />
                  Where to find the serial number?
                </button>
              </div>
              <div className="flex justify-center">
                {/* Mock reCAPTCHA */}
                <div className="border border-gray-200 rounded-md p-2 flex items-center gap-3 bg-gray-50/50 w-full max-w-[240px]">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded bg-white"></div>
                  <span className="text-xs text-gray-600 font-medium">I'm not a robot</span>
                  <div className="ml-auto flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-5 h-5 opacity-70" />
                    <span className="text-[8px] text-gray-400">reCAPTCHA</span>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="country" className="text-sm font-bold text-gray-700 mb-2 block">Select Country / Region</Label>
                <Select onValueChange={(v) => setFormData({ ...formData, country: v })} defaultValue="United States">
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isChecking}
                className="w-full md:w-64 h-12 bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-lg rounded-md transition-all active:scale-[0.98]"
              >
                {isChecking ? 'Checking...' : 'Check Warranty'}
              </Button>
            </div>
          </form>

          <div className="mt-8 space-y-2 border-t border-gray-100 pt-6">
            <p className="text-gray-500 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Warranty is subject to validation of purchase proof and product authenticity.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Preliminary status shown until verified.
            </p>
          </div>
        </div>

        {/* Results Section */}
        {hasSearched && !isChecking && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-[#002f6c] mb-6">Warranty Status Result</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Status Display Area */}
              <div className="lg:col-span-2">
                {result ? (
                  <div className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
                    <div className="bg-green-50 p-6 flex items-start gap-4 border-b border-green-100">
                      <div className="bg-green-600 rounded-lg p-2">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-green-700 uppercase">Warranty Active</h3>
                        <p className="text-green-600 font-medium">Your product is covered under warranty.</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div>
                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Serial Number</Label>
                            <p className="text-lg font-bold text-[#002f6c]">{result.serialNumber}</p>
                          </div>
                          <div>
                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Model</Label>
                            <p className="text-lg font-bold text-[#002f6c]">{result.productName || result.modelNumber}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Warranty Period</Label>
                            <p className="text-lg font-bold text-[#002f6c]">
                              {new Date(result.purchaseDate).toLocaleDateString()} to {new Date(result.expiryDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status</Label>
                            <p className="text-lg font-bold text-green-600">{result.status}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex gap-4">
                        <Button className="bg-[#002f6c] text-white px-6">Download Certificate</Button>
                        <Button variant="outline" className="border-[#002f6c] text-[#002f6c]" asChild>
                          <a href="/support/cases/new">Open Support Case</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-lg border border-red-50 overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-gradient-to-b from-[#f36f21] to-[#e85a00] w-full md:w-32 flex items-center justify-center p-6">
                      <AlertCircle className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-8 flex-1">
                      <h3 className="text-2xl font-extrabold text-[#f36f21] uppercase mb-2">Warranty Not Found</h3>
                      <p className="text-gray-600 font-medium mb-8">
                        This product is not registered in our system.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#f36f21] hover:bg-[#d95d16] text-white h-12 px-8 font-bold text-base shadow-lg shadow-[#f36f21]/30" asChild>
                          <a href="/warranty/register">Register Your Warranty</a>
                        </Button>
                        <Button variant="secondary" className="bg-[#6c7b8b] hover:bg-[#5a6a7a] text-white h-12 px-8 font-bold text-base flex items-center gap-2" asChild>
                          <a href="/support/cases/new">Submit a Support Case <ArrowRight className="w-4 h-4" /></a>
                        </Button>
                      </div>
                      <div className="mt-6">
                        <a href="/contact" className="text-[#0088cc] flex items-center gap-2 text-sm font-bold hover:underline">
                          <Smartphone className="w-4 h-4" /> Contact Support
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-blue-50 overflow-hidden">
                  <div className="bg-[#0056b3] px-6 py-4">
                    <h4 className="text-white font-bold">Example Results :</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <ul className="space-y-4 text-sm font-bold text-[#002f6c]">
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Warranty Status: <span className="text-green-600 ml-auto">ACTIVE</span>
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Warranty Period: <span className="text-gray-600 ml-auto font-medium text-xs">01/01/2021 to 01/01/2024</span>
                      </li>
                      <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Warranty Type: <span className="text-gray-600 ml-auto font-medium text-xs">Standard Warranty</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Support Entitlement: <span className="text-gray-600 ml-auto font-medium text-xs">TAC & RMA Eligible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#002f6c] rounded-xl p-8 text-white text-center relative overflow-hidden group">
                  <div className="relative z-10">
                    <h4 className="text-xl font-extrabold mb-4">Need help resolving a technical issue?</h4>
                    <Button className="bg-white text-[#002f6c] hover:bg-white/90 font-bold px-8">
                      Contact Support
                    </Button>
                  </div>
                  <Smartphone className="absolute -bottom-8 -right-8 w-32 h-32 text-white/10 rotate-12 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <FooterCategories />
      </div>
    </main>
  );
}
