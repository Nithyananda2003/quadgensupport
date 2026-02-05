import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, category, content } = body

    // For demo purposes, we'll just grab the first user as author if not logged in context
    const author = await prisma.user.findFirst()

    if (!author) {
      return NextResponse.json({ error: 'No user found' }, { status: 400 })
    }

    const article = await prisma.knowledgeArticle.create({
      data: {
        title,
        category,
        content,
        authorId: author.id,
        isPublished: true
      }
    })

    // Log Creation (non-blocking)
    prisma.activityLog.create({
      data: {
        userId: author.id,
        action: 'ARTICLE_PUBLISH',
        details: `Published article: ${title} (${category})`
      }
    }).catch(console.error)

    return NextResponse.json(article)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}
