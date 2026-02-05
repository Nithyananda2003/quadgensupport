import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const serialNumber = searchParams.get('serialNumber')

    if (!serialNumber) {
      return NextResponse.json({ error: 'Serial number is required' }, { status: 400 })
    }

    const warranty = await prisma.warranty.findUnique({
      where: { serialNumber },
    })

    if (!warranty) {
      return NextResponse.json({ error: 'Warranty not found' }, { status: 404 })
    }

    // Log successful check
    await prisma.activityLog.create({
      data: {
        action: 'WARRANTY_CHECK',
        details: `Checked serial: ${serialNumber} (${warranty.productName})`,
        // If we had user context here we'd add userId, but this is a public route mostly
      }
    })

    return NextResponse.json({ success: true, warranty })

  } catch (error) {
    console.error('Warranty check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const serialNumber = body.serialNumber as string

    if (!serialNumber) {
      return NextResponse.json({ error: 'Serial number is required' }, { status: 400 })
    }

    const warranty = await prisma.warranty.findUnique({
      where: { serialNumber },
    })

    if (!warranty) {
      return NextResponse.json({ error: 'Warranty not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, warranty })
  } catch (error) {
    console.error('Warranty check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
