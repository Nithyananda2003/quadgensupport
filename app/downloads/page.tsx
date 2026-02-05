'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import FooterCategories from '@/components/FooterCategories'
import { ChevronRight, Download, FileText, Search, Filter } from 'lucide-react'

const downloads = [
  {
    name: 'QuadGen IoT 3.0.0.0 (GA) vRIoT Server Software Release for HyperVisor (.tar.gz upgrade image)',
    version: '3.0.0.0',
    type: 'GZ',
    updated: '2025-12-23'
  },
  {
    name: 'QuadGen IoT 3.0.0.0 (GA) vRIoT Server Software Release (OVA)',
    version: '3.0.0.0',
    type: 'OVA',
    updated: '2025-12-23'
  },
  {
    name: 'QuadGen IoT 3.0.0.0 (GA) vRIoT Server Software Release (.qcow2.tar) (KVM Guest image)',
    version: '3.0.0.0',
    type: 'TAR',
    updated: '2025-12-23'
  },
  {
    name: 'SmartZone 7.1.1.3 Sigpack 1.670.2 (Application Signature Package)',
    version: '7.1.1.3',
    type: 'GZ',
    updated: '2025-12-22'
  },
  {
    name: 'SmartZone 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release GPB.proto (Google ProtoBuf) image for GPB/MQTT',
    version: '7.1.1.3.571',
    type: 'ZIP',
    updated: '2025-12-22'
  },
  {
    name: 'SmartZone 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release SNMP MIBs for SZ300 and vSZ-H (ZIP)',
    version: '7.1.1.3.571',
    type: 'ZIP',
    updated: '2025-12-22'
  },
  {
    name: 'SmartZone 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release SNMP MIBs for SZ-100 and vSZ-E (ZIP)',
    version: '7.1.1.3.571',
    type: 'ZIP',
    updated: '2025-12-22'
  },
  {
    name: 'SmartZone 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release SNMP MIBs for Access Points',
    version: '7.1.1.3.571',
    type: 'ZIP',
    updated: '2025-12-22'
  },
  {
    name: 'vSZ-D 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release (.ximg image)',
    version: '7.1.1.3.571',
    type: 'XIMG',
    updated: '2025-12-22'
  },
  {
    name: 'vSZ-D 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release (ESXi .ova image)',
    version: '7.1.1.3.571',
    type: 'OVA',
    updated: '2025-12-22'
  },
  {
    name: 'vSZ 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release (.ximg image)',
    version: '7.1.1.3.571',
    type: 'XIMG',
    updated: '2025-12-22'
  },
  {
    name: 'vSZ 7.1.1.3 FIPS, CC, JITC and NIAP (LT-GA) Software Release (ESXi .ova image)',
    version: '7.1.1.3.571',
    type: 'OVA',
    updated: '2025-12-22'
  },
  {
    name: 'QuadGen Network Director 4.5 Software Release',
    version: '4.5.0.60',
    type: 'OVA',
    updated: '2025-12-19'
  },
  {
    name: 'QuadGen Network Director 4.5.0.52 to 4.5.0.60 Upgrade package',
    version: '4.5',
    type: 'PKG',
    updated: '2025-12-19'
  },
  {
    name: 'QuadGen ICX FastIron 10.0.20b_cd4 (GA) Software Release (.zip) - NOTE: This is a Technology Release',
    version: '10.0.20b_cd4',
    type: 'ZIP',
    updated: '2025-12-16'
  }
]

export default function DownloadsPage() {
  const router = useRouter()

  useEffect(() => {
    // Optional: Check login
    // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    // if (!isLoggedIn) {
    //   router.push('/login')
    // }
  }, [router])

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">


      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 flex-shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#0088cc]">Home</a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#002f6c] font-semibold">Downloads</span>
        </div>
      </div>

      {/* Login Banner */}
      <div className="bg-[#002f6c] text-white px-4 md:px-8 py-3 flex justify-between items-center text-sm font-medium flex-shrink-0 shadow-inner">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0088cc] animate-pulse"></div>
          <span>Please log in to access restricted downloads.</span>
        </div>
        <button className="text-white/70 hover:text-white transition-colors">×</button>
      </div>

      <div className="flex-grow max-w-[1440px] mx-auto px-4 md:px-8 py-8 w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h1 className="text-[#002f6c] text-2xl md:text-3xl font-bold">Software Downloads</h1>

              <div className="flex items-center gap-1 text-xs font-medium bg-gray-50 p-1 rounded-lg border border-gray-200">
                <button disabled className="px-3 py-1.5 text-gray-400 cursor-not-allowed">Prev</button>
                <button className="px-3 py-1.5 bg-white text-[#002f6c] shadow-sm rounded-md border border-gray-200">1</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">2</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">Next</button>
              </div>
            </div>

            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] focus:bg-white transition-all appearance-none cursor-pointer">
                <option>Filter by Product Family...</option>
                <option>SmartZone</option>
                <option>Unleashed</option>
                <option>ICX Switches</option>
                <option>Cloud</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronRight className="h-4 w-4 text-gray-400 rotate-90" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 border-b border-gray-200 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">File Name</th>
                  <th className="px-6 py-4 font-semibold w-32">Version</th>
                  <th className="px-6 py-4 font-semibold w-24">Type</th>
                  <th className="px-6 py-4 font-semibold w-32">Updated</th>
                  <th className="px-6 py-4 font-semibold w-20">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {downloads.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-gray-400 mt-0.5 group-hover:text-[#0088cc] transition-colors" />
                        <span className="text-[#002f6c] font-medium group-hover:text-[#0088cc] transition-colors cursor-pointer leading-snug">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-mono text-xs">{item.version}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{item.updated}</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-[#0088cc] transition-colors" title="Download">
                        <Download className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 15 of 1325 results</span>
            <button className="text-[#0088cc] font-medium hover:underline">View All</button>
          </div>
        </div>
      </div>

      <div className="mt-auto flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
