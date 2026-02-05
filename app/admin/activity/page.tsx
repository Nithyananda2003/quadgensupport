// import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Clock, Shield, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const dynamic = 'force-dynamic'

export default async function ActivityPage() {
  // Mock Data (Frontend Only Mode)
  const logs = [
    { id: '1', action: 'LOGIN', details: 'User logged in', createdAt: new Date(), ipAddress: '192.168.1.1', user: { email: 'demo@quadgen.com' } },
    { id: '2', action: 'SETTINGS_UPDATE', details: 'Updated support email', createdAt: new Date(Date.now() - 3600000), ipAddress: '10.0.0.1', user: { email: 'admin@quadgen.com' } },
    { id: '3', action: 'DOCUMENT_DELETE', details: 'Deleted old driver v1.0', createdAt: new Date(Date.now() - 7200000), ipAddress: '127.0.0.1', user: { email: 'admin@quadgen.com' } },
    { id: '4', action: 'WARRANTY_CHECK', details: 'Checked serial SN12345', createdAt: new Date(Date.now() - 10800000), ipAddress: '203.0.113.1', user: null },
    { id: '5', action: 'ARTICLE_PUBLISH', details: 'Published "WiFi Troubleshooting"', createdAt: new Date(Date.now() - 15800000), ipAddress: '10.0.0.2', user: { email: 'editor@quadgen.com' } },
  ]

  return (
    <div className="space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#002f6c]">Activity Logs</h1>
          <p className="text-gray-500 mt-2">Audit trail of all system actions.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">System Events</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search logs..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {(logs as any[]).map((log: any) => (
              <div key={log.id} className="flex gap-4 border-b last:border-0 pb-4 last:pb-0">
                <div className="mt-1">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-semibold text-[#002f6c]">{log.action}</h4>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(log.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400">
                    {log.user && (
                      <span className="flex items-center gap-1">
                        <Shield className="h-3 w-3" /> {log.user.email}
                      </span>
                    )}
                    {log.ipAddress && (
                      <span>IP: {log.ipAddress}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {logs.length === 0 && (
              <div className="text-center py-8 text-gray-500">No logs found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
