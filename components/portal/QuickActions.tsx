'use client'

import { Book, Ticket, Download, Users, Phone, FileText } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

const actions = [
  {
    title: "Submit a Request",
    description: "Create a support ticket for your issue",
    icon: Ticket,
    href: "/cases/new",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Knowledge Base",
    description: "Browse articles and guides",
    icon: Book,
    href: "/knowledge",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Downloads",
    description: "Get drivers, firmware, and manuals",
    icon: Download,
    href: "/downloads",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Community",
    description: "Join discussions with other users",
    icon: Users,
    href: "https://community.quadgen.com",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "Contact Us",
    description: "Direct line to our support team",
    icon: Phone,
    href: "/contact-us",
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "Documentation",
    description: "Technical specs and datasheets",
    icon: FileText,
    href: "/docs",
    color: "text-teal-600",
    bg: "bg-teal-50"
  }
]

export default function QuickActions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Support Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, idx) => (
            <Link key={idx} href={action.href} className="group hover:-translate-y-1 transition-transform duration-300">
              <Card className="p-6 border-gray-200 hover:border-blue-500/30 hover:shadow-md transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{action.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
