import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, category, url, version } = body

    const doc = await prisma.document.create({
      data: {
        title,
        category,
        url,
        version,
        description: ''
      }
    })

    // Log Activity (non-blocking)
    prisma.activityLog.create({
      data: {
        action: 'DOCUMENT_UPLOAD',
        details: `Uploaded ${title} (${category})`
      }
    }).catch(console.error)

    return NextResponse.json(doc)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}
