'use client'

export default function Page() {
  const items: Array<{ id: string; title: string; type: string; date: string }> = []
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
            {items.map(a => (
              <tr key={a.id} className="border-t">
                <td className="px-4 py-3">{a.title}</td>
                <td className="px-4 py-3">{a.type}</td>
                <td className="px-4 py-3">{new Date(a.date).toLocaleDateString()}</td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-500">No announcements</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
