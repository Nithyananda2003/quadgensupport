'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, FileText, HelpCircle, ShieldCheck } from 'lucide-react'

import SupportHeader from '@/components/portal/SupportHeader'
import PageHeader from '@/components/portal/PageHeader'
import FooterCategories from '@/components/FooterCategories'
import { Card } from '@/components/ui/card'

export default function WarrantyRegistrationPage() {
  const router = useRouter()

  const sidebarItems = [
    { label: 'Programs', active: false },
    { label: 'Purchase Support', active: false },
    { label: 'WatchDog Support', active: false },
    { label: 'BullDog Support', active: false },
    { label: 'Warranty & RMA', active: true },
  ]

  return (
    <main className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <PageHeader
        title="Warranty Services"
        breadcrumbs={[{ label: 'Warranty' }]}
      />

      <div className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-2 border-gray-200 shadow-sm bg-white sticky top-24">
              <nav className="flex flex-col gap-1">
                {(sidebarItems as any[]).map((item: any, idx: number) => (
                  <button
                    key={idx}
                    className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${item.active ? 'bg-blue-50 text-[#002f6c]' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {item.label}
                    {item.active && <ChevronRight className="h-4 w-4 text-[#002f6c]" />}
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#002f6c] mb-4">Warranty Programs</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                QuadGen Wireless Solutions offering flexible and comprehensive support offerings for our wired and wireless products. Our goal is to match our capabilities to your specific needs.
              </p>

              {/* Visual Cards for Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Link href="/warranty-checker" className="group">
                  <div className="relative flex items-center gap-4 p-8 bg-gradient-to-br from-[#e0f2fe] to-white rounded-xl border-2 border-[#0088cc] hover:border-[#005f8f] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#0088cc] group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="h-8 w-8 text-[#0088cc]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-[#002f6c] mb-1 group-hover:text-[#0088cc] transition-colors">Check Warranty Status</h3>
                      <p className="text-sm text-gray-600 font-medium">Lookup by Serial Number</p>
                    </div>
                    <div className="bg-[#0088cc] p-2 rounded-full shadow-md text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
                <Link href="/warranty/register" className="group">
                  <div className="relative flex items-center gap-4 p-8 bg-gradient-to-br from-[#ccfbf1] to-white rounded-xl border-2 border-teal-500 hover:border-teal-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-teal-500 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-8 w-8 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-[#002f6c] mb-1 group-hover:text-teal-600 transition-colors">Register Product</h3>
                      <p className="text-sm text-gray-600 font-medium">Add new devices</p>
                    </div>
                    <div className="bg-teal-600 p-2 rounded-full shadow-md text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Terms & Conditions</h3>
                <p className="text-sm text-gray-500 mb-4">Read the standard warranty terms for Hardware and Software.</p>
                <Link href="#" className="text-sm font-semibold text-[#0088cc] flex items-center hover:underline">
                  Download PDF <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-500 mb-4">Common questions about replacement policies (RMA).</p>
                <Link href="#" className="text-sm font-semibold text-[#0088cc] flex items-center hover:underline">
                  View FAQs <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <FooterCategories />
      </div>
    </main>
  )
}
