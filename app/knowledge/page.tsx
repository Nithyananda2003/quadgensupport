'use client'

import SupportHeader from '@/components/portal/SupportHeader'
import PageHeader from '@/components/portal/PageHeader'
import FooterCategories from '@/components/FooterCategories'
import { Search, ChevronDown, FileText, ChevronRight, Filter } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function KnowledgePage() {
  const sidebarSections = [
    { title: "Product Family", items: ["EOL Products", "ICX Switches", "SmartZone", "Unleashed"] },
    { title: "Content Type", items: ["Articles", "Guides", "Release Notes", "Security Advisories"] }
  ]

  const results = [
    {
      title: 'How long will QuadGen Support EOL products?',
      snippet: 'At some point, all companies choose to discontinue products. When this happens, we provide a timeline for End of Life (EOL) and End of Support (EOS).',
      date: 'Jan 17, 2024',
      type: 'Article'
    },
    {
      title: 'Steps to Add Licenses to Virtual Controllers (LiMAN)',
      snippet: 'Click on the Device Serial Number. Once you click on + Add License, you will be prompted to select the entitlement pack.',
      date: 'Feb 15, 2021',
      type: 'Guide'
    },
    {
      title: 'Activating QuadGen One Licenses',
      snippet: 'This article provides instructions on how to activate QuadGen One licenses using the activation code.',
      date: 'Jan 30, 2024',
      type: 'Article'
    },
    {
      title: 'Converting Unleashed AP to Standalone',
      snippet: 'Guide to repurpose an Unleashed AP for standalone use via CLI or Web Interface.',
      date: 'Dec 17, 2021',
      type: 'Guide'
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <PageHeader title="Knowledge Base" breadcrumbs={[{ label: 'Knowledge Base' }]} />

      <div className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-4 border-gray-200 shadow-sm bg-white">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 font-bold text-gray-900">
                <Filter className="h-4 w-4" /> Filters
              </div>
              {(sidebarSections as any[]).map((section: any, idx: number) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{section.title}</h4>
                  <div className="space-y-2">
                    {(section.items as any[]).map((item: any, i: number) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#002f6c] cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-[#0088cc] focus:ring-[#0088cc]" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles, error codes, or topics..."
                className="pl-12 py-6 text-base rounded-xl shadow-sm border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc]"
              />
            </div>

            {/* Results List */}
            <div className="space-y-4">
              {(results as any[]).map((result: any, idx: number) => (
                <Card key={idx} className="p-6 border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                  <div className="flex gap-4">
                    <div className="hidden sm:flex h-10 w-10 bg-blue-50 rounded-lg items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-[#0088cc]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#002f6c] group-hover:text-[#0088cc] mb-2">{result.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{result.snippet}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="bg-gray-100 px-2 py-0.5 rounded font-medium text-gray-600">{result.type}</span>
                        <span>{result.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <FooterCategories />
      </div>
    </main>
  )
}
