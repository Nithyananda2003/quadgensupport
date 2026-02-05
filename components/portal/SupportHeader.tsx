'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react'
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
    { name: 'Home', href: '/' },
    { name: 'Knowledge Base', href: '/knowledge' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact', href: '/contact-us' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/quadgen.jpg" alt="QuadGen" className="h-12 w-auto" />
            <div className="hidden sm:block border-l border-gray-400 pl-3">
              <div className="text-[#002f6c] font-bold text-lg leading-none group-hover:text-[#0088cc] transition-colors tracking-tight">QuadGen</div>
              <div className="text-gray-600 text-[10px] uppercase font-bold tracking-wider leading-none mt-1">Support Portal</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-semibold transition-colors hover:text-[#0088cc] ${pathname === item.href ? 'text-[#002f6c]' : 'text-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-[#002f6c] font-bold hover:text-[#0088cc] hover:bg-blue-50/50">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#002f6c]">
                      <User className="h-4 w-4" />
                    </div>
                    My Account
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="cursor-pointer font-medium py-2.5 px-3">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/cases" className="cursor-pointer font-medium py-2.5 px-3">My Tickets</Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-gray-100 my-1" />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-700 cursor-pointer font-medium py-2.5 px-3">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-700 font-semibold hover:text-[#002f6c] hover:bg-gray-100/50">
                    Log In
                  </Button>
                </Link>
                <Link href="/registration">
                  <Button className="bg-[#002f6c] hover:bg-[#001f4d] text-white rounded-full px-6 font-semibold shadow-md shadow-blue-900/10 transition-all hover:shadow-blue-900/20">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#0088cc]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2 pt-4 gap-3 flex flex-col px-4">
                {isLoggedIn ? (
                  <>
                    <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 w-full py-3 px-2 rounded-lg text-left text-sm font-semibold text-[#002f6c] bg-blue-50/50">
                      <User className="h-5 w-5" /> My Account
                    </Link>
                    <button onClick={handleLogout} className="w-full py-3 px-2 text-left text-sm font-semibold text-red-600 flex items-center gap-3 hover:bg-red-50 rounded-lg">
                      <LogOut className="h-5 w-5" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-center font-semibold border-gray-300 text-gray-700">Log In</Button>
                    </Link>
                    <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-[#002f6c] justify-center text-white font-semibold">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
