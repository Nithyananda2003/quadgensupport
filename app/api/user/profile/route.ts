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

export async function GET(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, firstName: true, lastName: true, company: true, phone: true },
  })
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ user })
}

export async function PUT(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  const { firstName, lastName, company, phone } = body
  const name = `${firstName || ''} ${lastName || ''}`.trim() || null
  const updated = await prisma.user.update({
    where: { id: userId },
    data: { firstName, lastName, company, phone, name },
    select: { id: true, email: true, name: true, firstName: true, lastName: true, company: true, phone: true },
  })
  return NextResponse.json({ user: updated })
}
