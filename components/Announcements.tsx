import { AlertTriangle, ChevronRight } from 'lucide-react'

export default function Announcements() {
  const announcements = [
    {
      type: 'Security',
      title: 'QuadGen Security Page',
      date: 'Recent',
    },
    {
      type: 'Vulnerability',
      title: 'QuadGen IOT Controller vulnerabilities in Management Interface Authentication and Access Control',
      date: 'Jan 2025',
    },
    {
      type: 'Security',
      title: 'QuadGen APs not affected by Qualcomm vulnerabilities: CVE-2025-24857',
      date: 'Jan 2025',
    },
    {
      type: 'Critical',
      title: 'Critical Security Bypass Vulnerability Leading to Remote Code Execution and Shell Access in QuadGen Network Director (QND)',
      date: 'Jan 2025',
    },
    {
      type: 'Update',
      title: 'SmartZone Licensing via Fetchbot',
      date: 'Jan 2025',
    },
    {
      type: 'Security',
      title: 'Security Advisory 20250710: Reported vulnerabilities in QuadGen SmartZone and QuadGen Network Director',
      date: 'Jul 2025',
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Critical':
        return 'bg-red-100 text-red-800'
      case 'Vulnerability':
        return 'bg-orange-100 text-orange-800'
      case 'Security':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Announcements & Security Updates</h2>
        <p className="text-gray-600 mt-1">Latest news and updates for QuadGen products</p>
      </div>

      <div className="grid gap-4">
        {announcements.map((announcement, index) => (
          <a
            key={index}
            href="#"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${getTypeColor(announcement.type)}`}>
                    {announcement.type}
                  </span>
                  <span className="text-xs text-gray-500">{announcement.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 text-pretty">
                  {announcement.title}
                </h3>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
            </div>
          </a>
        ))}
      </div>

      <button className="mt-6 w-full py-2 border border-blue-900 text-blue-900 rounded font-medium hover:bg-blue-50 transition">
        View All Announcements
      </button>
    </div>
  )
}
