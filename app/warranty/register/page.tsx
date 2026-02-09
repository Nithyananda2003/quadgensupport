'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, HelpCircle, Upload, Plus, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import FooterCategories from '@/components/FooterCategories'
import Image from 'next/image'

export default function WarrantyRegistrationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    customerName: '',
    mobileNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    productCategory: 'Switch',
    modelNumber: '',
    serialNumber: '',
    quantity: '1',
    purchaseDate: '',
    purchaseChannel: '',
    resellerName: '',
    acceptTerms: false,
  })

  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setIsError(false)
    setIsSubmitting(true)

    // Rough expiry date calculation (e.g., 1 year from purchase)
    const pDate = new Date(formData.purchaseDate)
    const eDate = new Date(pDate.setFullYear(pDate.getFullYear() + 1))

    try {
      const res = await fetch('/api/warranty/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productName: formData.modelNumber, // Mapping model to productName
          expiryDate: eDate.toISOString(),
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to register warranty')
      }

      setMessage('Warranty registered successfully!')
      // Reset form if needed or redirect
    } catch (err: any) {
      setMessage(err.message)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f7fa] flex flex-col font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002f6c] to-[#0052a3] text-white py-12 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Register Warranty</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Register the warranty for your network switch by providing the required details and proof of purchase.
            </p>
          </div>
          <div className="relative w-full max-w-md h-48 md:h-64 z-10">
            {/* Using generated image placeholder if exists, otherwise a generic div */}
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
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-10 -mt-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information Section */}
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-blue-50">
              <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2">
                Customer Information
              </h2>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="companyName" className="text-sm font-semibold text-gray-600 mb-2 block">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Enter company name"
                    className="h-12 border-gray-200 focus:ring-[#0088cc]"
                  />
                </div>

                <div>
                  <Label htmlFor="customerName" className="text-sm font-semibold text-gray-600 mb-2 block">Customer Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="customerName"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="E.g. Street Address" // Mockup had weird placeholder
                    className="h-12 border-gray-200 focus:ring-[#0088cc]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="mobileNumber" className="text-sm font-semibold text-gray-600 mb-2 block">Mobile Number</Label>
                    <Input
                      id="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="Enter mobile number"
                      className="h-12 border-gray-200 focus:ring-[#0088cc]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-sm font-semibold text-gray-600 mb-2 block">Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street Address"
                      className="h-12 border-gray-200 focus:ring-[#0088cc]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="city" className="text-sm font-semibold text-gray-600 mb-2 block">City <span className="text-red-500">*</span></Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, city: v })} defaultValue="United States">
                      <SelectTrigger className="h-12 border-gray-200">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="United States">United States (Placeholder)</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-sm font-semibold text-gray-600 mb-2 block">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="ZIP / Postal Code"
                      className="h-12 border-gray-200 focus:ring-[#0088cc]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Switch Information Section */}
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-blue-50">
              <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2">
                Switch Information
              </h2>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="productCategory" className="text-sm font-semibold text-gray-600 mb-2 block">Product Category</Label>
                  <Select onValueChange={(v) => setFormData({ ...formData, productCategory: v })} defaultValue="Switch">
                    <SelectTrigger className="h-12 border-gray-200 text-blue-900 font-medium">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Switch">Switch</SelectItem>
                      <SelectItem value="Router">Router</SelectItem>
                      <SelectItem value="Access Point">Access Point</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="modelNumber" className="text-sm font-semibold text-gray-600 mb-2 block">Model / Part Number</Label>
                    <Input
                      id="modelNumber"
                      value={formData.modelNumber}
                      onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                      placeholder="E.g. SG3050-28P"
                      className="h-12 border-gray-200 focus:ring-[#0088cc]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serialNumber" className="text-sm font-semibold text-gray-600 mb-2 block">Serial Number <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Input
                        id="serialNumber"
                        required
                        value={formData.serialNumber}
                        onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                        placeholder="E.g. 298567"
                        className="h-12 border-gray-200 focus:ring-[#0088cc]"
                      />
                      <button type="button" className="absolute right-[-140px] top-1/2 -translate-y-1/2 flex items-center gap-1 text-[11px] text-[#0088cc] hover:underline font-medium">
                        <HelpCircle className="w-3 h-3" />
                        Where to find serial number?
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="purchaseDate" className="text-sm font-semibold text-gray-600 mb-2 block">Quantity <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Input
                        id="purchaseDate"
                        type="date"
                        required
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                        className="h-12 border-gray-200 focus:ring-[#0088cc]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <Label htmlFor="quantity" className="text-sm font-semibold text-gray-600 mb-2 block">Quity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="h-12 border-gray-200 focus:ring-[#0088cc]"
                      />
                    </div>
                    <div className="flex-1 mt-7">
                      <Input className="h-12 border-gray-200" disabled />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="purchaseChannel" className="text-sm font-semibold text-gray-600 mb-2 block">Purchase Channel</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, purchaseChannel: v })}>
                      <SelectTrigger className="h-12 border-gray-200 text-gray-500">
                        <SelectValue placeholder="Select Channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Online">Online</SelectItem>
                        <SelectItem value="Retail">Retail</SelectItem>
                        <SelectItem value="Partner">Partner / Reseller</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="resellerName" className="text-sm font-semibold text-gray-600 mb-2 block">Partner / Reseller Name (if any)</Label>
                    <Input
                      id="resellerName"
                      value={formData.resellerName}
                      onChange={(e) => setFormData({ ...formData, resellerName: e.target.value })}
                      placeholder=""
                      className="h-12 border-gray-200 focus:ring-[#0088cc]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Proof of Purchase Upload */}
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-blue-50">
              <h2 className="text-xl font-bold text-[#002f6c] mb-2 flex items-center gap-2">
                Proof of Purchase Upload
              </h2>
              <p className="text-sm text-gray-500 mb-6 font-medium">
                Upload a copy of your purchase invoice or receipt to validate the warranty.
              </p>

              <div className="border-2 border-dashed border-blue-100 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-blue-50/30 hover:bg-blue-50 transition-colors cursor-pointer group">
                <Upload className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-600 font-semibold mb-1">
                  Drop file here or <span className="text-[#0088cc]">click to upload</span> <span className="text-gray-400 font-normal">PDF, JPG or PNG file</span>
                </p>
                <p className="text-xs text-gray-400">(Max: 5MB)</p>
              </div>

              <button type="button" className="mt-4 flex items-center gap-2 text-[#002f6c] font-bold text-sm hover:underline italic">
                <Plus className="w-4 h-4 bg-[#002f6c] text-white rounded-sm p-0.5" />
                Attach another proof of purchase <span className="text-gray-400 font-normal">(Optional)</span>
              </button>
            </div>

            {/* Submission and Terms */}
            <div className="p-2 space-y-6">
              <button type="button" className="flex items-center gap-2 text-[#002f6c] font-bold text-sm hover:underline italic mb-4">
                <Plus className="w-4 h-4 bg-[#002f6c] text-white rounded-sm p-0.5" />
                Attach anothehe proof of purchase <span className="text-gray-400 font-normal">(Optional)</span>
              </button>

              <div className="flex items-start space-x-3 bg-white/50 p-4 rounded-lg">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                  className="mt-1 border-[#0088cc] data-[state=checked]:bg-[#0088cc]"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-relaxed text-gray-600"
                  >
                    I accept the <a href="#" className="text-[#0088cc] underline">Warranty Terms & Conditions</a> and consent to store my data for warranty registration.
                  </label>
                  <ul className="text-xs text-gray-500 list-disc pl-4 mt-2 space-y-1">
                    <li>False or fraudulent submissions may result in voided warranty.</li>
                  </ul>
                </div>
              </div>

              {message && (
                <div className={`p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${isError ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                  {isError ? <AlertCircle className="w-5 h-5 flex-shrink-0" /> : <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={!formData.acceptTerms || isSubmitting}
                className="w-full h-14 bg-gradient-to-b from-[#4a9eff] to-[#005cbf] hover:from-[#3a8eff] hover:to-[#004ca3] text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Submit Warranty Registration'}
              </Button>

              <div className="space-y-2">
                <p className="text-gray-500 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> All warranty registrations are subject to verification and approval.
                </p>
                <p className="text-gray-500 text-xs flex items-center gap-2 font-bold">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> We will review your submission and send confirmation within 5 business days.
                </p>
                <p className="text-gray-500 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> False or fraudulent submissions may result in voided warranty.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-auto">
        <FooterCategories />
      </div>
    </main>
  )
}
