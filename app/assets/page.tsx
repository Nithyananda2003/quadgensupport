'use client'



import FooterCategories from '@/components/FooterCategories'
import { Search, ChevronRight } from 'lucide-react'

export default function AssetManagementPage() {
  const browseItems = [
    'Hardware Summary',
    'License Purchases',
    'Support Purchases',
    'RG Nets Purchases',
    'Cloud Subscription Purchases',
  ]

  const actionButtons = [
    'Activate Purchase',
    'Register Warranty',
  ]

  return (
    <main className="min-h-screen bg-[#fcfaf2] flex flex-col">
      {/* Desktop Header */}


      {/* Breadcrumb/Sub-header Bar */}
      <div className="bg-[#fcfaf2] border-b border-gray-300 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-[#002f6c] text-sm font-medium">Assets</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-[1440px] mx-auto px-0 md:px-6 py-6 flex-grow">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content White Box */}
          <div className="flex-1 bg-white shadow-lg p-8 min-h-[600px]">
            <h1 className="text-[#002f6c] text-3xl font-normal mb-6">Asset Management</h1>

            <div className="text-sm text-gray-700 space-y-6 leading-relaxed">
              <p>
                Here you'll find details of what we know about your products - But sometimes we don't know everything. If you don't see a product here, either register it using our product registration portal or reach out to our Support team at <a href="#" className="text-[#0088cc] hover:underline">Contact Support</a>. Once your products are listed, you can organize your assets using a simple and flexible tagging system.
              </p>

              <p>
                If you are a QuadGen Partner or Distributor, you'll see all products you've purchased - including those purchased for your customers. You can use tags to assign assets to customers (but we'll do that for you where we can).
              </p>

              <p>
                <a href="#" className="text-[#0088cc] hover:underline font-medium">Learn more</a> about QuadGen support programs.
              </p>

              <div className="pt-4">
                <h3 className="text-[#002f6c] text-xl font-normal mb-4">Browse</h3>
                <div className="space-y-1 max-w-xl">
                  {(browseItems as any[]).map((item: any, index: number) => (
                    <button
                      key={index}
                      className="w-full bg-[#002f6c] text-white flex items-center justify-between px-6 py-3.5 text-left text-lg font-medium hover:bg-[#001f4d] transition relative overflow-hidden group"
                    >
                      <span>{item}</span>
                      <div className="absolute right-0 top-0 h-full w-4 bg-[#fcfaf2]/20 transform skew-x-12 translate-x-2"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Action Buttons */}
          <div className="w-full lg:w-80 space-y-4">
            {(actionButtons as any[]).map((label: any, index: number) => (
              <button
                key={index}
                className="w-full bg-[#002f6c] text-white flex items-center justify-between px-6 py-4 text-left text-xl font-medium hover:bg-[#001f4d] transition relative overflow-hidden group shadow-md"
              >
                <span>{label}</span>
                <div className="absolute right-0 top-0 h-full w-4 bg-[#fcfaf2]/20 transform skew-x-12 translate-x-2"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-10 mt-auto bg-white border-t border-gray-200 flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
