import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const setupTokenHeader = request.headers.get('x-admin-setup-token') || ''
  const setupTokenEnv = process.env.ADMIN_SETUP_TOKEN || ''
  if (!setupTokenEnv || setupTokenHeader !== setupTokenEnv) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const email = 'admin@quadgen.com'
  const password = 'admin123'
  const hashed = await bcrypt.hash(password, 10)

  const existing = await prisma.user.findUnique({ where: { email } })
  let user
  if (existing) {
    user = await prisma.user.update({
      where: { id: existing.id },
      data: { role: 'ADMIN', isVerified: true, password: hashed },
      select: { id: true, email: true, role: true, isVerified: true },
    })
  } else {
    user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name: 'Admin',
        firstName: 'Admin',
        lastName: 'User',
        company: 'QuadGen',
        isVerified: true,
        role: 'ADMIN',
      },
      select: { id: true, email: true, role: true, isVerified: true },
    })
  }

  return NextResponse.json({ success: true, user })
}
