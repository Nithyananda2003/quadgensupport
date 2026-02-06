'use client'

import type { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function QuickActions() {
  const router = useRouter()
  
  const actions = [
    { label: 'Activate Purchase', bg: 'bg-[#0088cc] hover:opacity-90', href: '#' },
    { label: 'Warranty Checker', bg: 'bg-[#0088cc] hover:opacity-90', href: '/warranty-checker' },
    { label: 'Register Warranty', bg: 'bg-[#0088cc] hover:opacity-90', href: '/warranty' },
    { label: 'Download Licenses', bg: 'bg-[#0088cc] hover:opacity-90', href: '/downloads' },
    { label: 'Submit A Case', bg: 'bg-[#0088cc] hover:opacity-90', href: '/contact-us' },
  ]

  const handleActionClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <div className="grid grid-cols-2 gap-px bg-white">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          onClick={(e) => handleActionClick(e, action.href)}
          className={`w-full ${action.bg} text-white py-4 px-2 text-sm font-semibold relative overflow-hidden group text-center flex items-center justify-center cursor-pointer`}
        >
          <span className="relative z-10">{action.label}</span>
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-b-[10px] border-l-transparent border-b-[#fcfaf2]"></div>
        </a>
      ))}

      {/* Feedback button - Blue */}
      <a 
        href="/feedback" 
        onClick={(e) => handleActionClick(e, '/feedback')}
        className="w-full bg-[#002f6c] hover:opacity-90 text-white py-4 px-2 text-sm font-semibold relative overflow-hidden text-center flex items-center justify-center cursor-pointer"
      >
        <span className="relative z-10">Feedback</span>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-b-[10px] border-l-transparent border-b-[#0088cc]"></div>
      </a>
    </div>
  )
}
