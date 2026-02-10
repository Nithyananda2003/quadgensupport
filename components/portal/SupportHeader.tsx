'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, User, LogOut, ChevronDown, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SupportHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const checkLogin = () => {
      // Simple check based on implementation plan/context
      if (typeof window !== 'undefined') {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
      }
    }

    window.addEventListener('scroll', handleScroll)
    checkLogin()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch (err) {
      console.error(err)
    }
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
    router.refresh()
  }

  const navItems = [
    { name: 'Documentation', href: '/downloads' },
    { name: 'Knowledge', href: '/knowledge' },
    { name: 'Cases', href: '#' },
    { name: 'Assets', href: '/assets' },
    { name: 'Active Purchase', href: '#' },
    { name: 'Purchase', href: '/registration' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1e293b] border-b border-gray-700 shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center h-16">
        {/* Logo Section with Slant */}
        <div className="bg-white h-full px-8 flex items-center relative mr-8" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', width: '280px' }}>
          <Link href="/" className="flex items-center gap-3">
            <img src="/quadgen.jpg" alt="QuadGen" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-[#002f6c] font-black text-xl leading-none tracking-tighter">QuadGen</span>
              <span className="text-gray-400 text-[8px] uppercase font-bold tracking-[0.2em] mt-0.5">Wireless Solutions</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[13px] font-bold tracking-tight transition-all hover:text-white ${
                pathname.startsWith(item.href) ? 'text-white border-b-2 border-blue-400 py-5' : 'text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 px-6">
          <Link href="/warranty-checker">
            <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white h-9 px-4 text-[11px] font-bold uppercase tracking-wider rounded flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-orange-900/20">
              <ShieldCheck className="h-4 w-4" />
              Warranty Checker
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 ml-2 border-l border-gray-600 pl-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600 border border-gray-600">
                <User className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
