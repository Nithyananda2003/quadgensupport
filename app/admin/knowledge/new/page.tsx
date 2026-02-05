'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewArticlePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: ''
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/admin/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/knowledge')
        router.refresh()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href="/admin/knowledge" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 text-sm">
        <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Write New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                placeholder="How to reset device..."
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select onValueChange={v => setFormData({ ...formData, category: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GENERAL">General</SelectItem>
                  <SelectItem value="TROUBLESHOOTING">Troubleshooting</SelectItem>
                  <SelectItem value="SETUP">Setup Guide</SelectItem>
                  <SelectItem value="FIRMWARE">Firmware</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Content (Markdown Supported)</Label>
              <Textarea
                className="min-h-[300px] font-mono text-sm"
                placeholder="# Introduction&#10;Write your help article here..."
                value={formData.content}
                onChange={e => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-[#002f6c]" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Publish Article
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
