import StatsCard from '@/components/admin/StatsCard'
import { Users, FileText, Activity, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AdminDashboard() {
  // Mock Data (Frontend Only Mode)
  const userCount = 1250
  const warrantyCount = 843
  const docCount = 12
  const articleCount = 45

  const recentActivity = [
    { id: '1', action: 'LOGIN', details: 'User logged in', createdAt: new Date(), user: { email: 'demo@quadgen.com', firstName: 'Demo' } },
    { id: '2', action: 'WARRANTY_CHECK', details: 'Checked serial: SN12345', createdAt: new Date(Date.now() - 3600000), user: null },
    { id: '3', action: 'DOCUMENT_UPLOAD', details: 'Uploaded Manual v2', createdAt: new Date(Date.now() - 7200000), user: { email: 'admin@quadgen.com', firstName: 'Admin' } }
  ]

  return (
    <div className="space-y-8 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1 text-sm">Overview of system activity and healthy metrics.</p>
        <p className="text-xs text-amber-600 mt-2 font-mono bg-amber-50 inline-block px-2 py-1 rounded border border-amber-200">
          {recentActivity.length > 0 && userCount === 1250 ? '● Offline Mode (Using Mock Data)' : ''}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={userCount}
          icon={Users}
          description="Active accounts in system"
        />
        <StatsCard
          title="Active Warranties"
          value={warrantyCount}
          icon={ShieldCheck}
          description="Verified product registrations"
        />
        <StatsCard
          title="Documents"
          value={docCount}
          icon={FileText}
          description="Available for download"
        />
        <StatsCard
          title="KB Articles"
          value={articleCount}
          icon={Activity}
          description="Published help content"
        />
      </div>

      {/* Activity Feed */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 bg-white/50">
            <CardTitle className="text-base text-slate-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {recentActivity.length > 0 ? (
                recentActivity.map((log) => (
                  <div key={log.id} className="flex items-start group">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {log.user?.firstName?.[0] || 'U'}
                    </div>
                    <div className="ml-4 space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium leading-none text-slate-900">
                          {log.user?.email || 'Unknown User'}
                        </p>
                        <span className="text-xs text-slate-400 tabular-nums">
                          {new Date(log.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-700">{log.action}</span> — {log.details}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-slate-500 text-sm py-8">
                  No recent activity recorded.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 border-slate-200 shadow-sm h-fit">
          <CardHeader className="border-b border-slate-100 bg-white/50">
            <CardTitle className="text-base text-slate-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 pt-6">
            <a href="/admin/documents" className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 flex items-center gap-3 transition-all group">
              <div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                <FileText className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-slate-700">Upload New Driver</div>
            </a>
            <a href="/admin/knowledge" className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 flex items-center gap-3 transition-all group">
              <div className="h-8 w-8 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-slate-700">Write New Article</div>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
