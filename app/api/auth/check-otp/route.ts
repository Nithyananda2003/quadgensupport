import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = body?.email as string
  const otp = body?.otp as string
  if (!email || !otp) return NextResponse.json({ error: 'Email and OTP required' }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  if (!user.otpHash || !user.otpExpires) return NextResponse.json({ error: 'No OTP pending' }, { status: 400 })
  if (user.otpExpires < new Date()) return NextResponse.json({ error: 'OTP expired' }, { status: 400 })

  const ok = await bcrypt.compare(otp, user.otpHash)
  if (!ok) return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 })

  return NextResponse.json({ success: true })
}
