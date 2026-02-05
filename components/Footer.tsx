import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center overflow-hidden">
                <img src="/quadgen.jpg" alt="Q" className="h-full w-auto object-contain" />
              </div>
              <span className="font-bold text-lg">QuadGen Support</span>
            </div>
            <p className="text-gray-400 text-sm">
              Providing comprehensive support and documentation for QuadGen Wireless products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Access Points</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Switches</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Controllers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">IoT Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Knowledgebase</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Community Forums</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Submit a Case</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Security Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:marketing@quadgenwireless.com" className="hover:text-blue-400 transition break-all">
                  marketing@quadgenwireless.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918022658720" className="hover:text-blue-400 transition">
                    +91 80 2265 8720
                  </a>
                  <a href="tel:+918022658719" className="hover:text-blue-400 transition">
                    +91 80 2265 8719
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  #607, World Trade Centre, Brigade Gateway,<br />
                  No.26/1, Dr.Rajkumar Road,<br />
                  Malleshwaram West, Bangalore – 560055, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Products</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition">Partners</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Events</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/quadgen-wireless/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2026 QuadGen Wireless Solutions. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition">Accessibility</a>
            <a href="#" className="hover:text-blue-400 transition">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
