
import PortalSidebar from '@/components/portal/PortalSidebar'
import MainPortalContent from '@/components/portal/MainPortalContent'
import FooterCategories from '@/components/FooterCategories'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef2f6] flex flex-col font-sans text-gray-900">
      {/* Top Section with Sidebar and Main Content */}
      <div className="flex-grow flex max-w-[1440px] mx-auto w-full">
        {/* Left Sidebar */}
        <div className="w-72 flex-shrink-0 bg-[#f8fafc] border-r border-gray-200 hidden md:block">
          <PortalSidebar />
        </div>

        {/* Right Content Area */}
        <div className="flex-grow p-4 lg:p-6">
          <MainPortalContent />
        </div>
      </div>

      {/* Global Footer Categories */}
      <div className="w-full bg-[#002f6c]">
        <FooterCategories />
      </div>
    </main>
  )
}
