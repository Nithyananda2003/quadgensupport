import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'

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

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true, otpHash: null, otpExpires: null },
    select: { id: true, email: true, name: true, role: true, isVerified: true },
  })

  const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key')
  const token = await new SignJWT({ userId: updated.id, email: updated.email, role: updated.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(SECRET_KEY)

  const response = NextResponse.json({ success: true, user: updated })
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return response
}
