import { ChevronRight, FileText, Monitor, Users, Shield, Radio, Server, Wifi, Cloud } from 'lucide-react'

export default function Resources() {
  const productCategories = [
    {
      title: 'Access Points',
      icon: Wifi,
      items: ['QuadGen Indoor APs', 'QuadGen Outdoor APs'],
    },
    {
      title: 'Switches & Infrastructure',
      icon: Server,
      items: ['QuadGen ICX Switches', 'QuadGen Edge and virtual Edge'],
    },
    {
      title: 'Management',
      icon: Monitor,
      items: ['QuadGen SmartZone (SZ)', 'QuadGen Network Director (QND)', 'QuadGen Unleashed'],
    },
    {
      title: 'Cloud & Wireless',
      icon: Cloud,
      items: ['QuadGen One', 'QuadGen Cloud', 'Cloudpath Enrollment System'],
    },
    {
      title: 'Advanced Solutions',
      icon: Shield,
      items: ['QuadGen AI', 'QuadGen IoT Suite', 'QuadGen WAN Gateway (QWG)'],
    },
    {
      title: 'End of Life Products',
      icon: Radio,
      items: ['EOL QuadGen Products'],
    },
  ]

  const supportResources = [
    { label: 'Knowledge Search', icon: FileText },
    { label: 'How-To Hub', icon: Monitor },
    { label: 'Community Discussions', icon: Users },
    { label: 'Security Bulletins', icon: Shield },
    { label: 'Technical Support', icon: Radio },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Resources & Product Documentation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {productCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-blue-900" />
                <h3 className="font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="flex items-center justify-between text-sm text-gray-700 hover:text-blue-900 transition group">
                      <span>{item}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-900 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Essential Support Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {supportResources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-500 hover:shadow-md transition"
              >
                <Icon className="h-6 w-6 text-blue-900 mb-2" />
                <span className="text-sm font-medium text-gray-900 text-center">{resource.label}</span>
              </a>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Training & Education</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>QuadGen Education Youtube Channel</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>Training Portal (QuadGen University)</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>Technical Documentation</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Security & Compliance</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>Security Bulletins</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>Federal FIPS and CC compliance</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-900 hover:underline flex items-center space-x-2">
                <span>Open Source Software</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
