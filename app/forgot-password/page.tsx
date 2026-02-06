'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [emailLocked, setEmailLocked] = useState(false)
  const [step, setStep] = useState(1)
  const [otpVerified, setOtpVerified] = useState(false)

  const router = useRouter()
  const params = useSearchParams()

  const otpRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement>(null)
  )

  useEffect(() => {
    const e = params.get('email') || ''
    if (e) setEmail(e)
  }, [params])

  async function sendOtp() {
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

      if (!res.ok) {
        setError(data?.error || 'Failed to send OTP')
      } else {
        setMessage('OTP sent to your email')
        setSeconds(60)
        setEmailLocked(true)
        setStep(2)
        otpRefs[0].current?.focus()
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (seconds <= 0) return
    const timer = setInterval(() => setSeconds(s => s - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  function onOtpChange(i: number, value: string) {
    const val = value.replace(/\D/g, '').slice(0, 1)
    const arr = otp.padEnd(6, ' ').split('')
    arr[i] = val
    const next = arr.join('').replace(/\s/g, '')
    setOtp(next)

    if (val && i < 5) {
      otpRefs[i + 1].current?.focus()
    }
  }

  function onOtpKey(
    i: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      otpRefs[i - 1].current?.focus()
    }
    if (e.key === 'ArrowLeft' && i > 0) {
      otpRefs[i - 1].current?.focus()
    }
    if (e.key === 'ArrowRight' && i < 5) {
      otpRefs[i + 1].current?.focus()
    }
  }

  function onOtpPaste(
    e: React.ClipboardEvent<HTMLDivElement>
  ) {
    const text = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6)

    if (!text) return

    e.preventDefault()
    setOtp(text)
    otpRefs[Math.min(text.length, 6) - 1]?.current?.focus()
  }

  async function verifyOtp() {
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const res = await fetch('/api/auth/check-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error || 'OTP verification failed')
      } else {
        setOtpVerified(true)
        setStep(3)
        setMessage('OTP verified. Set your new password.')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  async function resetPassword() {
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error || 'Password reset failed')
      } else {
        setMessage('Password updated. Redirecting to login...')
        router.push('/login')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#002f6c] mb-2">
                Forgot Password
              </h1>
              <p className="text-gray-500 text-sm">
                Verify your email and set a new password
              </p>
            </div>

            {message && (
              <div className="mb-6 p-3 bg-green-50 text-green-700 text-sm rounded-lg text-center border border-green-100">
                {message}
              </div>
            )}

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-5">
              {step === 1 && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    disabled={emailLocked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border bg-gray-50"
                  />
                  <button
                    className="mt-4 bg-[#002f6c] text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
                    onClick={sendOtp}
                    disabled={loading || !email}
                  >
                    Send OTP
                  </button>
                </div>
              )}

              {step >= 2 && (
                <div>
                  <label className="block text-xs font-semibold mb-3">
                    OTP
                  </label>
                  <div
                    className="flex justify-between gap-2"
                    onPaste={onOtpPaste}
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <input
                        key={i}
                        ref={otpRefs[i]}
                        inputMode="numeric"
                        maxLength={1}
                        value={otp[i] || ''}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => onOtpChange(i, e.target.value)}
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLInputElement>
                        ) => onOtpKey(i, e)}
                        className="w-12 h-12 text-center text-lg border rounded-lg"
                      />
                    ))}
                  </div>

                  {!otpVerified && (
                    <button
                      className="mt-4 bg-[#002f6c] text-white px-4 py-2 rounded-lg disabled:opacity-50"
                      onClick={verifyOtp}
                      disabled={loading || otp.length !== 6}
                    >
                      Verify OTP
                    </button>
                  )}
                </div>
              )}

              {step === 3 && (
                <>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewPassword(e.target.value)
                    }
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setConfirmPassword(e.target.value)
                    }
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <button
                    className="bg-[#002f6c] text-white px-4 py-2 rounded-lg disabled:opacity-50"
                    onClick={resetPassword}
                    disabled={
                      loading ||
                      newPassword.length < 8 ||
                      newPassword !== confirmPassword
                    }
                  >
                    Reset Password
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
