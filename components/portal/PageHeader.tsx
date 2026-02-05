'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#0088cc] transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#0088cc] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#002f6c] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#002f6c] tracking-tight">{title}</h1>
      </div>
    </div>
  )
}
