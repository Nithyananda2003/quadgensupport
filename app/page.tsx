
import SupportHeader from '@/components/portal/SupportHeader'
import FooterCategories from '@/components/FooterCategories'
import Hero from '@/components/portal/Hero'
import QuickActions from '@/components/portal/QuickActions'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] flex flex-col font-sans text-gray-900">

      {/* Content wrapper */}
      <div className="flex-grow">
        <Hero />
        <QuickActions />
      </div>

      {/* Footer Categories - Full Width */}
      <div className="mt-auto flex-shrink-0 border-t border-gray-100">
        <FooterCategories />
      </div>
    </main>
  )
}
