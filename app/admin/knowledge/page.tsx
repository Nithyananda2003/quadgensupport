// import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Plus, Edit, Eye } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function KnowledgePage() {
  // Mock Data (Frontend Only Mode)
  const articles = [
    { id: '1', title: 'How to Reset Your Router', category: 'TROUBLESHOOTING', content: 'Step 1: Press the reset button...', isPublished: true, views: 124, createdAt: new Date() },
    { id: '2', title: 'Setting up 5G Extender', category: 'SETUP', content: 'Unbox the device and plug it in...', isPublished: true, views: 89, createdAt: new Date(Date.now() - 172800000) },
    { id: '3', title: 'Understanding LED Indicators', category: 'GENERAL', content: 'The blue light means...', isPublished: true, views: 245, createdAt: new Date(Date.now() - 500000000) },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#002f6c]">Knowledge Base</h1>
          <p className="text-gray-500 mt-2">Create and manage support articles.</p>
        </div>
        <Link href="/admin/knowledge/new">
          <Button className="bg-[#002f6c] hover:bg-[#001f4d] text-white gap-2">
            <Plus className="h-4 w-4" /> New Article
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(articles as any[]).map((article: any) => (
          <Card key={article.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                  {article.category}
                </span>
                <span className={`h-2 w-2 rounded-full ${article.isPublished ? 'bg-green-500' : 'bg-gray-300'}`} />
              </div>
              <CardTitle className="text-lg text-[#002f6c] line-clamp-2">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500 mb-4 line-clamp-3">
                {article.content.substring(0, 100)}...
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" /> {article.views} views
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-[#0088cc]">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {articles.length === 0 && (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <BookOpen className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No articles yet</p>
            <p className="text-xs text-gray-400 mt-1">Write your first knowledge base article to help users.</p>
          </div>
        )}
      </div>
    </div>
  )
}
