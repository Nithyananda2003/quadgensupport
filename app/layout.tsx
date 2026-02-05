import React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'
import SupportHeader from '@/components/portal/SupportHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuadGen Support',
  description: 'QuadGen Support Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://static.cloud.coveo.com/searchui/v2.5549/css/CoveoFullSearch.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" media="screen" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <SupportHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
