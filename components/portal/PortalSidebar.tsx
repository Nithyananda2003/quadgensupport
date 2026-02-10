'use client'

import React from 'react'
import { 
  Circle, 
  Layout, 
  Shield, 
  PlusSquare, 
  ShoppingCart, 
  Key, 
  Mail, 
  MessageSquare,
  ChevronRight 
} from 'lucide-react'
import Link from 'next/link'

export default function PortalSidebar() {
  const topNav = [
    { name: 'Announcements', icon: Circle, href: '/announcements' },
    { name: 'Asset Management', icon: Layout, href: '/assets' },
  ]

  const actionButtons = [
    { name: 'Warranty Checker', icon: Shield, href: '/warranty-checker' },
    { name: 'Register Warranty', icon: PlusSquare, href: '/warranty/register' },
    { name: 'Active Purchase', icon: ShoppingCart, href: '#' },
    { name: 'Activate Purchase', icon: Key, href: '/registration' },
    { name: 'Submit Case', icon: Mail, href: '#' },
    { name: 'Feedback', icon: MessageSquare, href: '/feedback' },
  ]

  return (
    <div className="flex flex-col h-full py-6 px-4 space-y-8 bg-[#f8fafc]">
      {/* Top Section */}
      <nav className="space-y-1">
        {topNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            <item.icon className="h-4 w-4 text-gray-400" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Action Buttons Section */}
      <div className="space-y-2">
        {actionButtons.map((button) => (
          <Link
            key={button.name}
            href={button.href}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#1e3a5f] hover:bg-[#162a45] text-white rounded shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <button.icon className="h-4 w-4 text-blue-200" />
              <span className="text-[13px] font-medium">{button.name}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-blue-300 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ))}
      </div>
    </div>
  )
}
