import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendMail } from '@/lib/mail'
import { otpEmailHtml } from '@/lib/templates/otp-email'
import bcrypt from 'bcryptjs'

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = body?.email as string
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  const code = generateCode()
  const otpHash = await bcrypt.hash(code, 10)
  const expires = new Date(Date.now() + 10 * 60 * 1000)

  await prisma.user.update({
    where: { id: user.id },
    data: { otpHash, otpExpires: expires },
  })

  const appName = process.env.APP_NAME || 'QuadGen Support'
  const supportEmail = process.env.SUPPORT_EMAIL || 'support@example.com'
  const html = otpEmailHtml(appName, supportEmail, code)
  await sendMail(email, 'Verify your email', `Your OTP is: ${code}. It expires in 10 minutes.`, html)
  return NextResponse.json({ success: true })
}
