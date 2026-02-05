'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ShieldCheck, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/knowledge?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#002f6c] to-[#001f4d] py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
        >
          QuadGen Support
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Find answers, download drivers, check warranty status, or submit a request. We're here to help.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="How can we help you today?"
              className="h-14 w-full pl-12 pr-4 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 focus:border-white/30 text-lg shadow-xl backdrop-blur-sm transition-all"
            />
          </form>
        </motion.div>

        {/* Highlighted Warranty Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Check Warranty */}
          <Link href="/warranty-checker" className="group">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[300px] text-left border-l-8 border-[#0088cc]">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-[#0088cc] transition-colors">
                <ShieldCheck className="h-7 w-7 text-[#002f6c] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#002f6c] transition-colors">Check Warranty</h3>
                <p className="text-sm text-gray-500">View status & expiry</p>
              </div>
            </div>
          </Link>

          {/* Register Product */}
          <Link href="/warranty/register" className="group">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[300px] text-left border-l-8 border-teal-500">
              <div className="h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                <PlusCircle className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-teal-600 transition-colors">Register Product</h3>
                <p className="text-sm text-gray-500">Activate new warranty</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
