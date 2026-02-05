import { prisma } from '@/lib/prisma'

export default async function Page() {
  const warranties = await prisma.warranty.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { id: true, serialNumber: true, productName: true, customerName: true, status: true, expiryDate: true },
  })
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
            {(warranties as any[]).map((w: any) => (
              <tr key={w.id} className="border-t">
                <td className="px-4 py-3">{w.serialNumber}</td>
                <td className="px-4 py-3">{w.productName}</td>
                <td className="px-4 py-3">{w.customerName || '-'}</td>
                <td className="px-4 py-3">{w.status}</td>
                <td className="px-4 py-3">{new Date(w.expiryDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
