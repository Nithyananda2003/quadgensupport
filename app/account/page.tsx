'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import FooterCategories from '@/components/FooterCategories'

export default function AccountPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState({ firstName: '', lastName: '', company: '', phone: '' })
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '' })
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    const fetchMe = async () => {
      try {
        const res = await fetch('/api/user/profile')
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to load profile')
        setProfile({
          firstName: data.user.firstName || '',
          lastName: data.user.lastName || '',
          company: data.user.company || '',
          phone: data.user.phone || '',
        })
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMe()
  }, [isLoggedIn, router])

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to update')
    } catch (e: any) {
      setError(e.message)
    }
  }

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwords),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to change password')
      setPasswords({ currentPassword: '', newPassword: '' })
    } catch (e: any) {
      setError(e.message)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">


      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-[#002f6c] font-bold text-xl mb-4">Profile</h2>
            {error && <div className="mb-4 text-sm text-red-600 bg-red-50 px-3 py-2 rounded border border-red-100">{error}</div>}
            {loading ? (
              <div className="text-sm text-gray-500">Loading...</div>
            ) : (
              <form className="space-y-4" onSubmit={saveProfile}>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">First Name</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Last Name</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Company</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Phone</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                </div>
                <button type="submit" className="bg-[#002f6c] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#001f4d]">Save Changes</button>
              </form>
            )}
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-[#002f6c] font-bold text-xl mb-4">Change Password</h2>
            <form className="space-y-4" onSubmit={changePassword}>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Current Password</label>
                <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={passwords.currentPassword} onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">New Password</label>
                <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm" value={passwords.newPassword} onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })} />
              </div>
              <button type="submit" className="bg-[#002f6c] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#001f4d]">Update Password</button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-auto flex-shrink-0">
        <FooterCategories />
      </div>
    </main>
  )
}
