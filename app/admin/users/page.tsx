// import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MoreVertical, Shield, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default async function UsersPage() {
  // Mock Data (Frontend Only Mode)
  const users = [
    { id: '1', name: 'Admin User', email: 'admin@quadgen.com', role: 'ADMIN', isVerified: true, createdAt: new Date(), company: 'QuadGen' },
    { id: '2', name: 'John Doe', email: 'john@example.com', role: 'USER', isVerified: true, createdAt: new Date(Date.now() - 86400000), company: 'Acme Corp' },
    { id: '3', name: 'Jane Smith', email: 'jane@test.com', role: 'USER', isVerified: false, createdAt: new Date(Date.now() - 172800000), company: undefined },
    { id: '4', name: 'Robert Brown', email: 'bob@example.com', role: 'USER', isVerified: true, createdAt: new Date(Date.now() - 400000000), company: 'TechSolutions' },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#002f6c]">User Management</h1>
          <p className="text-gray-500 mt-2">View and manage registered users.</p>
        </div>
        <Button className="bg-[#002f6c] hover:bg-[#001f4d] text-white gap-2">
          <Mail className="h-4 w-4" /> Invite User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-medium text-gray-500">User</th>
                  <th className="p-4 font-medium text-gray-500">Role</th>
                  <th className="p-4 font-medium text-gray-500">Status</th>
                  <th className="p-4 font-medium text-gray-500">Company</th>
                  <th className="p-4 font-medium text-gray-500">Joined</th>
                  <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(users as any[]).map((user: any) => (
                  <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                          {user.name?.[0] || user.email[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name || 'No Name'}</div>
                          <div className="text-gray-500 text-xs">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={user.role === 'ADMIN' ? 'default' : 'secondary'} className={user.role === 'ADMIN' ? 'bg-[#002f6c]' : ''}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {user.isVerified ? (
                        <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">Verified</span>
                      ) : (
                        <span className="text-orange-600 text-xs font-medium bg-orange-50 px-2 py-0.5 rounded-full">Pending</span>
                      )}
                    </td>
                    <td className="p-4 text-gray-500">{user.company || '-'}</td>
                    <td className="p-4 text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
