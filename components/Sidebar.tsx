import { AlertCircle, ArrowUp, Tag, Check, HelpCircle, Settings, Power } from 'lucide-react'

export default function Sidebar() {
  const menuItems = [
    { icon: AlertCircle, label: 'Announcements', active: true },
    { icon: ArrowUp, label: 'Upgrade Guides' },
    { icon: Tag, label: 'License Management' },
    { icon: Check, label: 'Warranty & RMA' },
    { icon: HelpCircle, label: 'KB & Forums' },
    { icon: Settings, label: 'Tools' },
    { icon: Power, label: 'Asset Management' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`w-full flex items-center gap-3 px-5 py-4 text-left text-sm font-medium border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-all ${
            item.active 
              ? 'bg-blue-50 text-[#002f6c] border-l-4 border-l-[#0088cc]' 
              : 'text-gray-600 hover:text-[#002f6c]'
          }`}
        >
          <item.icon className={`h-5 w-5 ${item.active ? 'text-[#0088cc]' : 'text-gray-400 group-hover:text-[#0088cc]'}`} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}
