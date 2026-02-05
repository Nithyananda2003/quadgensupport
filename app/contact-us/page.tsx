'use client'

import { Users, FileText, Wrench, MessageCircle, ChevronRight, Search } from 'lucide-react'

import FooterCategories from '@/components/FooterCategories'

export default function ContactUsPage() {
  const BlueArrow = () => (
    <ChevronRight className="w-3 h-3 text-[#0088cc] inline-block mr-1" strokeWidth={3} />
  )

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans" suppressHydrationWarning>


      {/* Contact Title Area */}
      <div className="bg-white border-b border-gray-200 py-4 flex-shrink-0" suppressHydrationWarning>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#0088cc]">Home</a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#002f6c] font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow max-w-[1440px] mx-auto px-4 md:px-8 py-8 w-full" suppressHydrationWarning>
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 min-h-[600px]" suppressHydrationWarning>
          <h1 className="text-3xl md:text-4xl text-[#002f6c] font-bold mb-4 leading-tight">
            Contact QuadGen Support
          </h1>
          <p className="text-gray-500 mb-12 max-w-2xl">
            We're here to help. Choose the support option that best fits your needs, from self-service resources to direct expert assistance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Self-Service Online Help */}
            <div>
              <h2 className="text-xl text-[#002f6c] font-bold border-b border-gray-100 pb-4 mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#0088cc] rounded-full"></span>
                Self-Service Online Help
              </h2>

              <div className="space-y-8">
                {/* Forum Support */}
                <div className="flex items-start gap-5 group">
                  <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-[#0088cc] transition-colors">
                    <Users className="w-6 h-6 text-[#0088cc] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#002f6c] font-bold mb-1">Community Forums</h3>
                    <p className="text-sm font-semibold text-[#0088cc] mb-2">Connect with peers and experts</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <a href="#" className="text-[#0088cc] font-medium hover:underline">Visit our Community Forums</a> to discuss technical topics, share solutions, and get advice from the QuadGen community.
                    </p>
                  </div>
                </div>

                {/* Open a Case */}
                <div className="flex items-start gap-5 group">
                  <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-[#0088cc] transition-colors">
                    <FileText className="w-6 h-6 text-[#0088cc] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#002f6c] font-bold mb-1">Support Portal</h3>
                    <p className="text-sm font-semibold text-[#0088cc] mb-2">Manage your support cases</p>
                    <a href="/login" className="text-sm text-[#0088cc] font-medium hover:underline inline-flex items-center gap-1">
                      Open a new case <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Faulty Equipment */}
                <div className="flex items-start gap-5 group">
                  <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-[#0088cc] transition-colors">
                    <Wrench className="w-6 h-6 text-[#0088cc] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#002f6c] font-bold mb-1">Hardware Replacement</h3>
                    <p className="text-sm font-semibold text-[#0088cc] mb-2">RMA Services</p>
                    <a href="#" className="text-sm text-[#0088cc] font-medium hover:underline inline-flex items-center gap-1">
                      Request an RMA <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Want to Chat */}
                <div className="flex items-start gap-5 group">
                  <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-[#0088cc] transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#0088cc] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#002f6c] font-bold mb-1">Live Chat</h3>
                    <p className="text-sm font-semibold text-[#0088cc] mb-2">Real-time assistance</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Log in to access live chat support. Available Monday-Friday, 9AM-5PM EST.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Call a Local Support Expert */}
            <div>
              <h2 className="text-xl text-[#002f6c] font-bold border-b border-gray-100 pb-4 mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#0088cc] rounded-full"></span>
                Phone Support
              </h2>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg text-[#002f6c] font-bold mb-3">Global Support Line</h3>
                  <p className="text-3xl text-[#0088cc] font-bold mb-2">+1 650 265 0903</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Available 24/7 for critical issues. Standard support hours apply for non-critical inquiries. International calling charges may apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-[#002f6c] font-bold mb-4">Regional Support Numbers</h3>
                  <ul className="space-y-3">
                    {[
                      'Americas',
                      'Europe, Middle East, and Africa',
                      'Asia Pacific',
                      'Latin America'
                    ].map((region, idx) => (
                      <li key={idx} className="border-b border-gray-100 pb-3 last:border-0">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#0088cc] transition-colors flex items-center justify-between group">
                          <span>{region}</span>
                          <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-[#0088cc]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex-shrink-0" suppressHydrationWarning>
        <FooterCategories />
      </div>
    </main>
  )
}
