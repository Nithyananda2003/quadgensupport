'use client'

import { useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'

import FooterCategories from '@/components/FooterCategories'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('About')

  const sidebarLinks = [
    { name: 'About', active: true },
    { name: 'Our Privacy Policy', active: false },
    { name: 'Third-Party Information Requests', active: false },
    { name: 'Support Terms and Conditions', active: false },
  ]

  return (
    <main className="min-h-screen bg-[#fcfaf2] flex flex-col">


      {/* Sub-header Bar */}
      <div className="bg-[#fcfaf2] border-b border-gray-300 py-2 px-4 md:px-12 hidden md:block flex-shrink-0">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="text-[#002f6c] text-sm font-medium">About</div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8 flex-grow">
        <div className="flex flex-col md:flex-row bg-white shadow-lg min-h-[600px] border border-gray-200">
          {/* Left Sidebar */}
          <div className="w-full md:w-[300px] border-r border-[#ddd]">
            <ul className="text-[14px]">
              {(sidebarLinks as any[]).map((link: any, index: number) => (
                <li key={index} className="border-b border-[#eee]">
                  <a
                    href="#"
                    className={`flex items-center px-4 py-3 hover:bg-[#f9f9f9] transition-colors ${link.active
                      ? 'bg-[#002f6c] text-[#fcfaf2] font-bold hover:bg-[#001f4d]'
                      : 'text-[#333] hover:text-[#002f6c]'
                      }`}
                  >
                    <ChevronRight className={`h-3 w-3 mr-2 ${link.active ? 'text-[#fcfaf2]' : 'text-[#0088cc]'}`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-[32px] text-[#002f6c] font-normal mb-6 leading-tight">
              Getting The Most Out Of The QuadGen Support Website
            </h1>

            <p className="text-[#333] mb-8 text-[15px] leading-relaxed">
              We want to make your online support experience as smooth and efficient as possible. Here are a few tips to help you get the most out of the QuadGen Support website:
            </p>

            <div className="space-y-6">
              {[
                {
                  id: 1,
                  text: 'Register for a Support Account',
                  link: 'Register',
                  href: '/registration'
                },
                {
                  id: 2,
                  text: 'Check your warranty status',
                  link: 'Warranty Checker',
                  href: '/warranty-checker'
                },
                {
                  id: 3,
                  text: 'Download the latest software',
                  link: 'Software Downloads',
                  href: '/downloads'
                },
                {
                  id: 4,
                  text: 'Search our Knowledge Base',
                  link: 'Knowledge Base',
                  href: '/knowledge'
                },
                {
                  id: 5,
                  text: 'Open a Support Case',
                  link: 'Contact Support',
                  href: '/contact-us'
                }
              ].map((item: any) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#002f6c] text-[#fcfaf2] flex items-center justify-center font-bold text-lg">
                    {item.id}
                  </div>
                  <div className="pt-1">
                    <p className="text-[#333] text-[15px]">
                      <a href={item.href} className="text-[#0088cc] hover:underline font-bold mr-1">{item.link}</a>
                      {item.text.replace(item.link, '')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-10 mt-auto bg-white border-t border-gray-200 flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
