// import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Plus, Download, Trash2 } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DocumentsPage() {
  // Mock Data (Frontend Only Mode)
  const documents = [
    { id: '1', title: 'Wireless Adapter Driver v2.1', category: 'DRIVER', version: '2.1.0', createdAt: new Date(), url: '#' },
    { id: '2', title: 'User Manual - Series X', category: 'MANUAL', version: '1.0', createdAt: new Date(Date.now() - 86400000), url: '#' },
    { id: '3', title: 'Firmware Update Tool', category: 'SOFTWARE', version: '3.4', createdAt: new Date(Date.now() - 172800000), url: '#' },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#002f6c]">Documents</h1>
          <p className="text-gray-500 mt-2">Manage drivers, manuals, and software downloads.</p>
        </div>
        <Link href="/admin/documents/new">
          <Button className="bg-[#002f6c] hover:bg-[#001f4d] text-white gap-2">
            <Plus className="h-4 w-4" /> Add Document
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-medium text-gray-500">Name</th>
                  <th className="p-4 font-medium text-gray-500">Category</th>
                  <th className="p-4 font-medium text-gray-500">Version</th>
                  <th className="p-4 font-medium text-gray-500">Date Added</th>
                  <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(documents as any[]).map((doc: any) => (
                  <tr key={doc.id} className="border-b last:border-0 hover:bg-gray-50/50">
                    <td className="p-4 font-medium flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-500" />
                      {doc.title}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {doc.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{doc.version || '-'}</td>
                    <td className="p-4 text-gray-500">{new Date(doc.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-[#0088cc]">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {documents.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No documents found. Click "Add Document" to upload one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
