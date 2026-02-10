'use client'

import React, { useState, useMemo } from 'react'
import { Search, ChevronDown, Clock, ShieldCheck, Cpu, Wifi, Settings, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function MainPortalContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All Products')

  const tabs = ['All Products', 'IOT', 'APs', 'SmartZone', '+ More']
  
  const announcements = useMemo(() => [
    {
      title: 'QuadGen Security Page',
      date: '31 Aug 9, 2022',
      tags: [{ name: 'Security', color: 'bg-orange-100 text-orange-700' }],
      description: 'QuadGen IOT Controller vulnerabilities in Management',
      subDate: '9 Aug 9, 2022',
      category: 'IOT',
      subTags: [
        { name: 'Security', color: 'bg-blue-100 text-blue-700' },
        { name: 'IOT', color: 'bg-blue-100 text-blue-700' }
      ]
    },
    {
      title: 'QuadGen APs not affected by Qualcomm vulnerabilities : CVE-2025-24857',
      date: '25 Aug 9, 2022',
      category: 'APs',
      tags: [
        { name: 'Security', color: 'bg-orange-100 text-orange-700' },
        { name: 'APs', color: 'bg-blue-100 text-blue-700' }
      ]
    },
    {
      title: 'Critical Security Bypass Vulnerability Leading to Remote Code Execution and Shell Access in QuadGen Network Director (QND)',
      date: '25 Aug 9, 2022',
      category: 'SmartZone',
      tags: [
        { name: 'Security', color: 'bg-orange-100 text-orange-700' },
        { name: 'SmartZone', color: 'bg-blue-100 text-blue-700' }
      ]
    }
  ], [])

  const products = useMemo(() => [
    { name: 'QuadGen Indoor APs', sub: 'QuadGen Indoor APs', icon: Wifi, category: 'APs' },
    { name: 'QuadGen Outdoor APs', sub: 'QuadGen Network APs', icon: Wifi, category: 'APs' },
    { name: 'QuadGen IOT Controllers', sub: 'QuadGen Network AI', icon: Cpu, category: 'IOT' },
  ], [])

  const filteredAnnouncements = announcements.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTab = activeTab === 'All Products' || activeTab === '+ More' || item.category === activeTab
    return matchesSearch && matchesTab
  })

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'All Products' || activeTab === '+ More' || product.category === activeTab
    return matchesSearch && matchesTab
  })

  return (
    <div className="space-y-6">
      {/* Search Bar Section */}
      <div className="bg-white rounded shadow-sm border border-gray-100 p-2 flex items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            className="pl-10 border-none focus-visible:ring-0 shadow-none text-sm placeholder:text-gray-400" 
            placeholder="Search announcements or products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 text-[12px] text-gray-500 font-medium whitespace-nowrap pr-2">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
            <Clock className="h-3.5 w-3.5" />
            <span>Latest {'>'} Oldest</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
            <span>All Severities</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#162a45] h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs and Content Section */}
      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        {/* Tabs */}
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center gap-2">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-[13px] font-medium rounded transition-colors ${
                activeTab === tab ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Announcements List */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Announcements</h2>
            <span className="text-xs text-gray-400 font-medium">{filteredAnnouncements.length} found</span>
          </div>

          {filteredAnnouncements.length > 0 ? (
            <div className="space-y-8">
              {filteredAnnouncements.map((item, idx) => (
                <div key={idx} className="space-y-2 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-[14px] font-semibold text-[#1e3a5f] hover:underline cursor-pointer flex-grow leading-tight">
                      <Search className="h-3.5 w-3.5 inline mr-2 text-gray-400" />
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">{item.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag.name} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${tag.color}`}>
                        {tag.name}
                      </span>
                    ))}
                    {item.description && (
                      <span className="text-[13px] text-gray-600 ml-2">{item.description}</span>
                    )}
                    {item.subDate && (
                      <span className="text-[11px] text-gray-400 ml-auto">{item.subDate}</span>
                    )}
                  </div>

                  {item.subTags && (
                    <div className="flex items-center gap-2 mt-1">
                      {item.subTags.map(tag => (
                        <span key={tag.name} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${tag.color}`}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No announcements found matching your criteria.</p>
            </div>
          )}
          
          {filteredAnnouncements.length > 0 && (
            <div className="mt-8 text-center">
              <button className="text-[13px] font-bold text-[#1e3a5f] hover:underline flex items-center gap-1 mx-auto">
                View All Announcements <ChevronDown className="h-4 w-4 rotate-270" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Products</h2>
          <span className="text-[11px] text-gray-400 font-medium">{filteredProducts.length} items</span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.name} className="bg-white rounded shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center group hover:border-blue-200 transition-colors cursor-pointer">
                <span className="text-[12px] font-bold text-gray-700 mb-4">{product.name}</span>
                <div className="h-32 w-full bg-gray-50 rounded-md flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <product.icon className="h-16 w-16 text-gray-300 group-hover:text-blue-200 transition-colors" />
                </div>
                <span className="text-[11px] font-medium text-gray-400">{product.sub}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded border border-dashed border-gray-200 py-12 text-center">
            <p className="text-gray-400 text-sm">No products found for this category or search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
