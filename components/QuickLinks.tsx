'use client'

import { Download, Shield, FileText, Users, Zap, LifeBuoy } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function QuickLinks() {
  const router = useRouter()
  
  const links = [
    {
      icon: Zap,
      label: 'Activate Purchase',
      description: 'Purchase Code Required',
      href: '#',
    },
    {
      icon: Shield,
      label: 'Warranty Checker',
      description: 'Check warranty status',
      href: '/warranty-checker',
    },
    {
      icon: FileText,
      label: 'Register Warranty',
      description: 'Register your products',
      href: '/warranty',
    },
    {
      icon: Download,
      label: 'Download Licenses',
      description: 'Get your licenses',
      href: '/downloads',
    },
    {
      icon: Users,
      label: 'Submit A Case',
      description: 'Open support ticket',
      href: '/contact-us',
    },
    {
      icon: LifeBuoy,
      label: 'View Your Customers',
      description: 'Manage accounts',
      href: '#',
    },
  ]

  const handleLinkClick = (e, href) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {links.map((link, index) => {
        const Icon = link.icon
        return (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition text-center group cursor-pointer"
          >
            <Icon className="h-8 w-8 mx-auto mb-2 text-blue-900 group-hover:text-blue-600 transition" />
            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-900 transition">
              {link.label}
            </h3>
            <p className="text-xs text-gray-600 mt-1">{link.description}</p>
          </a>
        )
      })}
    </div>
  )
}
