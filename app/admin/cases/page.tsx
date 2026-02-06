'use client'

export default function Page() {
  const cases: Array<{ id: string; subject: string; status: string; priority: string; category: string; createdAt: string }> = []
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
            {cases.map(c => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3">{c.subject}</td>
                <td className="px-4 py-3">{c.status}</td>
                <td className="px-4 py-3">{c.priority}</td>
                <td className="px-4 py-3">{c.category}</td>
                <td className="px-4 py-3">{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {cases.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">No cases</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
