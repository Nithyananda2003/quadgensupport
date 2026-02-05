'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { CheckCircle, Download, HelpCircle, MessageSquare, ShieldCheck } from 'lucide-react'

export default function RightSidebar() {
  const router = useRouter()

  const actions = [
    { label: 'Activate Purchase', icon: CheckCircle, href: '#' },
    { label: 'Warranty Checker', icon: ShieldCheck, href: '/warranty-checker' },
    { label: 'Register Warranty', icon: ShieldCheck, href: '/warranty/register' },
    { label: 'Download Licenses', icon: Download, href: '/downloads' },
    { label: 'Submit A Case', icon: HelpCircle, href: '/contact-us' },
  ]

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (isLoggedIn) {
      if (href !== '#') {
        router.push(href)
      }
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          onClick={(e) => handleActionClick(e, action.href)}
          className="w-full bg-white border border-gray-200 hover:border-[#0088cc] hover:shadow-md rounded-xl p-4 flex items-center gap-4 transition-all group cursor-pointer"
        >
          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0088cc] transition-colors">
            <action.icon className="h-5 w-5 text-[#002f6c] group-hover:text-white transition-colors" />
          </div>
          <span className="font-semibold text-[#002f6c] text-sm group-hover:text-[#0088cc] transition-colors">{action.label}</span>
        </a>
      ))}

      {/* Feedback button */}
      <a
        href="/feedback"
        onClick={(e) => handleActionClick(e, '/feedback')}
        className="w-full bg-gradient-to-r from-[#002f6c] to-[#0088cc] text-white rounded-xl p-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all mt-2 group"
      >
        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <div>
          <span className="block font-bold text-sm">Feedback</span>
          <span className="text-xs text-blue-100 opacity-90">Help us improve</span>
        </div>
      </a>
    </div>
  )
}
