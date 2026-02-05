import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { sendMail } from '@/lib/mail'
import { otpEmailHtml } from '@/lib/templates/otp-email'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const name = `${firstName} ${lastName}`.trim()

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        firstName,
        lastName,
        isVerified: false,
      },
    })

    const code = Math.floor(100000 + Math.random() * 900000).toString()
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

    // Log Signup Activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'SIGNUP',
        details: `New user registration: ${email}`
      }
    })

    return NextResponse.json({ success: true, message: 'OTP sent to email. Please verify.' })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
