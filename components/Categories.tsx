import { ChevronRight } from 'lucide-react'

export default function Categories() {
  const categories = [
    { name: 'Announcements', icon: '📢' },
    { name: 'Upgrade Guides', icon: '📈' },
    { name: 'License Management', icon: '📋' },
    { name: 'Warranty & RMA', icon: '🛡️' },
    { name: 'KB & Forums', icon: '💬' },
    { name: 'Tools', icon: '🔧' },
    { name: 'Asset Management', icon: '📦' },
  ]

  return (
    <div className="sticky top-4">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
        <nav className="space-y-2">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between p-3 rounded hover:bg-blue-50 transition group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900">
                  {category.name}
                </span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-900 transition" />
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-6 bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h3 className="font-bold text-gray-900 mb-3">Need Help?</h3>
        <p className="text-sm text-gray-700 mb-4">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <button className="w-full py-2 bg-blue-900 text-white rounded font-medium hover:bg-blue-800 transition">
          Contact Support
        </button>
      </div>
    </div>
  )
}
