'use client'
import { useState } from 'react'

interface SetupResult {
  message?: string;
  error?: string;
  [key: string]: any;
}

export default function Page() {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<SetupResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function promote() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/admin/promote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-setup-token': token
        },
        body: JSON.stringify(email ? { email } : {})
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || 'Failed')
      } else {
        setResult(data)
      }
    } catch (e) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-md space-y-4">
      <h1 className="text-xl font-semibold">Admin Setup</h1>
      <p className="text-sm">Enter the setup token and (optionally) an email to promote.</p>
      <div className="space-y-2">
        <label className="block text-sm">Setup Token</label>
        <input className="border px-3 py-2 w-full" value={token} onChange={e => setToken(e.target.value)} placeholder="setup-123" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">Email (optional)</label>
        <input className="border px-3 py-2 w-full" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@example.com" />
      </div>
      <button className="bg-black text-white px-4 py-2" onClick={promote} disabled={loading}>
        {loading ? 'Promoting...' : 'Promote'}
      </button>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {result && <pre className="bg-gray-100 p-3 text-xs overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
