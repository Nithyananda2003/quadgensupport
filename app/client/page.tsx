'use client'

export default function Page() {
  const latestCases: Array<{ id: string; subject: string; status: string; createdAt: string }> = []
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold">Client Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-gray-100 rounded-xl">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="/warranty/register" className="px-3 py-2 bg-[#002f6c] text-white rounded-lg text-sm">Register Warranty</a>
            <a href="/warranty" className="px-3 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">View Warranties</a>
            <a href="/support/new" className="px-3 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm">Open Support Case</a>
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-xl">
          <h2 className="text-lg font-semibold">Latest Cases</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {latestCases.map(c => (
              <li key={c.id} className="flex justify-between border-b py-2">
                <span>{c.subject}</span>
                <span className="text-gray-500">{c.status}</span>
              </li>
            ))}
            {latestCases.length === 0 && <li className="text-gray-500">No recent cases</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
