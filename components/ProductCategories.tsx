import { Wifi, Radio, Server } from 'lucide-react'

export default function ProductCategories() {
  const categories = [
    { title: 'QuadGen Indoor APs', icon: Wifi, description: 'High-performance indoor connectivity' },
    { title: 'QuadGen Outdoor APs', icon: Radio, description: 'Ruggedized outdoor wireless' },
    { title: 'QuadGen ICX Switches', icon: Server, description: 'Scalable enterprise switching' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0088cc]/30 transition-all cursor-pointer group flex flex-col items-center text-center">
           <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0088cc] group-hover:scale-110 transition-all duration-300">
             <category.icon className="h-8 w-8 text-[#002f6c] group-hover:text-white transition-colors" />
           </div>
           <h3 className="text-[#002f6c] font-bold text-base mb-2 group-hover:text-[#0088cc] transition-colors">{category.title}</h3>
           <p className="text-xs text-gray-500">{category.description}</p>
        </div>
      ))}
    </div>
  )
}
