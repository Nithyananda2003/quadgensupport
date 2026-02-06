'use client'

export default function Page() {
  const warranties: Array<{ id: string; serialNumber: string; productName: string; customerName?: string; status: string; expiryDate: string }> = []
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold">Warranties</h1>
      <div className="mt-6 overflow-x-auto bg-white border border-gray-100 rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Serial</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {warranties.map(w => (
              <tr key={w.id} className="border-t">
                <td className="px-4 py-3">{w.serialNumber}</td>
                <td className="px-4 py-3">{w.productName}</td>
                <td className="px-4 py-3">{w.customerName || '-'}</td>
                <td className="px-4 py-3">{w.status}</td>
                <td className="px-4 py-3">{new Date(w.expiryDate).toLocaleDateString()}</td>
              </tr>
            ))}
            {warranties.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">No warranties</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
