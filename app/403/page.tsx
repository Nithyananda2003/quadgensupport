'use client'
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-2 text-gray-600 text-sm">You do not have permission to access this page.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/" className="bg-[#002f6c] text-white px-4 py-2 rounded-lg text-sm">Go Home</a>
          <a href="/login" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm">Login</a>
        </div>
      </div>
    </main>
  )
}
