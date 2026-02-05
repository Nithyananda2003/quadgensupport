'use client'

import { ChevronRight } from 'lucide-react'


import FooterCategories from '@/components/FooterCategories'

export default function RenewalsPage() {
  const sidebarLinks = [
    { name: 'Renewals', active: true },
  ]

  return (
    <main className="min-h-screen bg-[#555555] flex flex-col">


      {/* Sub-header Bar - White */}
      <div className="bg-white border-b border-gray-200 py-2 px-4 md:px-12 hidden md:block flex-shrink-0">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="text-[#002f6c] text-sm font-medium">Renewals</div>
        </div>
      </div>

      {/* Content Area - White Container on Grey Background */}
      <div className="flex-grow overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-white shadow-2xl min-h-screen">
          <div className="px-4 md:px-12 py-8">
            <div className="flex flex-col md:flex-row bg-white min-h-[500px] border border-gray-200 rounded-lg overflow-hidden">

              {/* Left Sidebar */}
              <div className="w-full md:w-[280px] border-r border-gray-200 bg-white">
                <ul className="text-[14px]">
                  {sidebarLinks.map((link, index) => (
                    <li key={index} className="border-b border-gray-100">
                      <a
                        href="#"
                        className={`flex items-center px-4 py-3 hover:bg-gray-50 transition-colors ${link.active
                          ? 'bg-[#002f6c] text-[#fcfaf2] font-bold hover:bg-[#001f4d]'
                          : 'text-gray-700 hover:text-[#0088cc] bg-transparent'
                          }`}
                      >
                        <div className="mr-3">
                          {link.active ? (
                            <ChevronRight className="h-3 w-3 text-[#fcfaf2]" />
                          ) : (
                            <ChevronRight className="h-3 w-3 text-[#0088cc]" />
                          )}
                        </div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li className="flex-1"></li>
                </ul>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8 md:p-14 bg-white">
                <h1 className="text-[34px] text-[#002f6c] font-normal mb-8 leading-tight">
                  Support Renewals
                </h1>

                <div className="space-y-8 text-[16px] text-gray-700 leading-[1.6]">
                  <p>
                    If you are a QuadGen customer who would like to renew your existing QuadGen support contract, please contact your QuadGen reseller. If you aren't sure who your reseller is, please email us at <a href="mailto:quadgen.renewals@quadgenwireless.com" className="text-[#0088cc] hover:underline">quadgen.renewals@quadgenwireless.com</a>.
                  </p>

                  <p>
                    If you are a QuadGen reseller or distributor and you would like to check on the renewal opportunities you have for your customers, you can view opportunities and get renewals quotes at <a href="https://partners.quadgenwireless.com/sf/connect?page=renewals" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:underline">https://partners.quadgenwireless.com/sf/connect?page=renewals</a>
                  </p>

                  <p className="pt-4 text-gray-500">
                    Thanks for being a QuadGen Networks customer!
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="h-8"></div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-12 mt-auto bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <FooterCategories />
        </div>
      </div>
    </main>
  )
}
