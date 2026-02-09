'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@quadgen.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || 'Login failed')
      }
      if (data?.user?.role !== 'ADMIN') {
        setError('This account is not an admin')
        return
      }
      router.push('/admin')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/quadgen.jpg" alt="QuadGen" className="h-16 w-auto object-contain mr-4" />
            <div className="border-l border-gray-300 pl-4">
              <div className="text-[#002f6c] font-bold text-2xl tracking-tight leading-none">QuadGen</div>
              <div className="text-[#0088cc] font-bold text-xs tracking-widest leading-none uppercase mt-1">Admin Login</div>
            </div>
          </div>
          <a href="/" className="text-sm text-gray-500 hover:text-[#002f6c] transition">Back to Home</a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#002f6c] mb-2">Admin Sign In</h1>
              <p className="text-gray-500 text-sm">Enter admin credentials</p>
            </div>
            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center border border-red-100">
                {error}
              </div>
            )}
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]/20 focus:border-[#0088cc] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#002f6c] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#001f4d] active:transform active:scale-[0.98] transition-all shadow-lg shadow-[#002f6c]/20"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-xs text-gray-500">
              Tip: Use admin@quadgen.com / admin123 after seeding admin.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001f4d] py-8 text-center">
        <p className="text-xs text-white/60">© 2026 QuadGen Wireless Solutions. All Rights Reserved.</p>
      </div>
    </main>
  )
}
