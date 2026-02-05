import { prisma } from '@/lib/prisma'

export default async function Page() {
  const cases = await prisma.supportCase.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { id: true, subject: true, status: true, priority: true, category: true, createdAt: true },
  })
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold">Support Cases</h1>
      <div className="mt-6 overflow-x-auto bg-white border border-gray-100 rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Priority</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {(cases as any[]).map((c: any) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3">{c.subject}</td>
                <td className="px-4 py-3">{c.status}</td>
                <td className="px-4 py-3">{c.priority}</td>
                <td className="px-4 py-3">{c.category}</td>
                <td className="px-4 py-3">{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
