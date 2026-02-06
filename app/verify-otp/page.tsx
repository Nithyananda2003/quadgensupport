'use client'
import { Suspense, useEffect, useRef, useState, Fragment } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={null}>
      <VerifyOtpContent />
    </Suspense>
  )
}

function VerifyOtpContent() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const params = useSearchParams()
  const router = useRouter()
  // Use a stable ref for inputs
  const otpRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null))

  useEffect(() => {
    const e = params.get('email') || ''
    const c = params.get('otp') || ''
    if (e) setEmail(e)
    if (c) setOtp(c)
  }, [params])

  async function requestOtp() {
    setLoading(true)
    setMessage('')
    setError('')
    try {
      const res = await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) setError(data?.error || 'Failed to send OTP')
      else {
        setMessage('OTP sent to your email')
        setSeconds(60)
      }
    } catch {
      setError('Network error, please try again')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (seconds <= 0) return
    const t = setInterval(() => setSeconds(s => s - 1), 1000)
    return () => clearInterval(t)
  }, [seconds])

  function onOtpChange(i: number, v: string) {
    const val = v.replace(/\D/g, '').slice(0, 1)
    const arr = otp.padEnd(6, ' ').split('')
    arr[i] = val || ' ' // Use space to preserve length
    const next = arr.join('').trim() // Trim only for state if needed, but array structure matters for index

    // Better way: Reconstruct otp string properly
    let newOtpArray = otp.split('')
    // Ensure array is size 6
    while (newOtpArray.length < 6) newOtpArray.push('')

    newOtpArray[i] = val
    const newOtp = newOtpArray.join('')

    setOtp(newOtp)
    if (val && i < 5) otpRefs[i + 1].current?.focus()
  }

  function onOtpKey(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs[i - 1].current?.focus()
    if (e.key === 'ArrowLeft' && i > 0) otpRefs[i - 1].current?.focus()
    if (e.key === 'ArrowRight' && i < 5) otpRefs[i + 1].current?.focus()
  }

  function onOtpPaste(e: React.ClipboardEvent) {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!text) return
    e.preventDefault()
    setOtp(text)
    otpRefs[Math.min(text.length, 6) - 1]?.current?.focus()
  }

  async function verifyOtp() {
    // Sanitize OTP: remove spaces if any
    const cleanOtp = otp.replace(/\s+/g, '')

    setLoading(true)
    setMessage('')
    setError('')
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: cleanOtp }),
      })
      const data = await res.json()
      if (!res.ok) setError(data?.error || 'Verification failed')
      else {
        setMessage('Verified! Redirecting...')
        router.push('/login') // Redirect to login after successful verification? Or dashboard?
        // Usually login flow -> verify -> dashboard (with token)
        // If this is just sign up verification, pushing to login is safer unless auto-login happens
        // User requested "OTP based signup", usually implies auto-login. 
        // Let's assume login for safety unless API returns token.
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  // Initial OTP Request if email is present and no countdown running
  // But usually user comes here AFTER signup, so we might not want to auto-trigger requestOtp unless explicit
  // Signup usually sends the first OTP.

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="flex-grow flex items-center justify-center py-10 px-4">
        <Card className="w-full max-w-[450px] shadow-lg border-gray-200">
          <CardHeader className="text-center space-y-2 pb-6">
            <CardTitle className="text-2xl font-bold text-[#002f6c]">Verify Email</CardTitle>
            <CardDescription>Enter the 6-digit code sent to<br /><span className="font-medium text-gray-900">{email}</span></CardDescription>
          </CardHeader>
          <CardContent>
            {message && <div className="mb-6 p-3 bg-green-50 text-green-700 text-sm rounded-md border border-green-100 text-center font-medium">{message}</div>}
            {error && <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100 text-center font-medium">{error}</div>}

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2" onPaste={onOtpPaste}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    ref={otpRefs[i]}
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[i] || ''}
                    onChange={e => onOtpChange(i, e.target.value)}
                    onKeyDown={e => onOtpKey(i, e)}
                    className="w-12 h-12 text-center text-xl font-semibold rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#002f6c] focus:border-transparent transition-all shadow-sm"
                  />
                ))}
              </div>

              <Button
                onClick={verifyOtp}
                className="w-full bg-[#002f6c] hover:bg-[#001f4d] text-white h-11"
                disabled={loading || otp.replace(/\s+/g, '').length !== 6 || !email}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Verify Email
              </Button>

              <div className="text-center">
                <button
                  className="text-sm text-[#0088cc] hover:text-[#002f6c] font-semibold disabled:opacity-50 transition-colors"
                  onClick={requestOtp}
                  disabled={loading || seconds > 0}
                >
                  {seconds > 0 ? `Resend code in ${seconds}s` : 'Resend code'}
                </button>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-100 pt-6">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="py-6 text-center text-xs text-gray-500 border-t border-gray-200">
        © 2026 QuadGen Wireless Solutions.
      </div>
    </main>
  )
}
