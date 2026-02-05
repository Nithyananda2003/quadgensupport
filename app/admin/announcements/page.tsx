import { prisma } from '@/lib/prisma'

export default async function Page() {
  const items = await prisma.announcement.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { id: true, title: true, type: true, date: true },
  })
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold">Announcements</h1>
      <div className="mt-6 overflow-x-auto bg-white border border-gray-100 rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {(items as any[]).map((a: any) => (
              <tr key={a.id} className="border-t">
                <td className="px-4 py-3">{a.title}</td>
                <td className="px-4 py-3">{a.type}</td>
                <td className="px-4 py-3">{new Date(a.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
