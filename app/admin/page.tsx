import { prisma } from '@/lib/prisma'

export default async function Page() {
  const [usersCount, warrantiesCount, casesCount, announcementsCount] = await Promise.all([
    prisma.user.count(),
    prisma.warranty.count(),
    prisma.supportCase.count(),
    prisma.announcement.count(),
  ])
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <a href="/admin/users" className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-sm text-gray-500">Users</div>
          <div className="text-2xl font-bold">{usersCount}</div>
        </a>
        <a href="/admin/warranties" className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-sm text-gray-500">Warranties</div>
          <div className="text-2xl font-bold">{warrantiesCount}</div>
        </a>
        <a href="/admin/cases" className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-sm text-gray-500">Cases</div>
          <div className="text-2xl font-bold">{casesCount}</div>
        </a>
        <a href="/admin/announcements" className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-sm text-gray-500">Announcements</div>
          <div className="text-2xl font-bold">{announcementsCount}</div>
        </a>
      </div>
    </div>
  )
}
