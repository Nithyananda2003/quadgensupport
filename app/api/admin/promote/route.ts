import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key')

async function getUserIdFromRequest(request: Request) {
  const cookieHeader = request.headers.get('cookie') || ''
  const tokenMatch = cookieHeader.match(/(?:^|;\s*)token=([^;]+)/)
  const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : null
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return (payload as any).userId as string
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  const setupTokenHeader = request.headers.get('x-admin-setup-token') || ''
  const setupTokenEnv = process.env.ADMIN_SETUP_TOKEN || ''
  if (!setupTokenEnv || setupTokenHeader !== setupTokenEnv) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json().catch(() => ({}))
  const email: string | undefined = body?.email

  let targetUserId: string | null = null
  if (email) {
    const found = await prisma.user.findUnique({ where: { email } })
    if (!found) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    targetUserId = found.id
  } else {
    targetUserId = await getUserIdFromRequest(request)
    if (!targetUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const updated = await prisma.user.update({
    where: { id: targetUserId },
    data: { role: 'ADMIN' },
    select: { id: true, email: true, role: true, name: true },
  })

  return NextResponse.json({ success: true, user: updated })
}
