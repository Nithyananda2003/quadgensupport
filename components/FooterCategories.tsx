import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Globe, Mail, Phone, MapPin } from 'lucide-react';

const FooterCategories = () => {
  return (
    <footer className="bg-[#002f6c] text-white font-sans mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-6">
            <img src="/quadgen.jpg" alt="QuadGen" className="h-14 w-auto bg-white p-2 rounded-md" />
            <p className="text-gray-300 text-sm leading-relaxed">
              QuadGen Wireless is a network solutions company that provides engineering services and software solutions to the telecommunications industry.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 text-[#0088cc] mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  #607, World Trade Centre, Brigade Gateway, Malleshwaram West, Bangalore – 560055, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="h-4 w-4 text-[#0088cc] flex-shrink-0" />
                <div className="flex gap-3">
                  <a href="tel:+918022658720" className="hover:text-white transition-colors">+91 80 2265 8720</a>
                  <span className="text-gray-600">|</span>
                  <a href="tel:+918022658719" className="hover:text-white transition-colors">+91 80 2265 8719</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="h-4 w-4 text-[#0088cc] flex-shrink-0" />
                <a href="mailto:marketing@quadgenwireless.com" className="hover:text-white transition-colors">marketing@quadgenwireless.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-[#0088cc] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Home</a></li>
              <li><a href="/about-us" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">About Us</a></li>
              <li><a href="/products" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Products</a></li>
              <li><a href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Services</a></li>
              <li><a href="/careers" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Careers</a></li>
              <li><a href="/contact-us" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-[#0088cc] pb-2 inline-block">Support</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/product-support" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Product Support</a></li>
              <li><a href="/knowledge" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Knowledge Base</a></li>
              <li><a href="/downloads" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Downloads</a></li>
              <li><a href="/warranty-checker" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Warranty Check</a></li>
              <li><a href="/warranty/register" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Register Product</a></li>
              <li><a href="/community" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">Community Forums</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-[#0088cc] pb-2 inline-block">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-6">Stay updated with our latest news and product releases.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/quadgen-wireless/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#0088cc] transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0088cc] transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0088cc] transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0088cc] transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="mt-8">
              <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors border border-gray-600 rounded-md px-4 py-2 hover:border-white">
                <Globe className="h-4 w-4" />
                <span>United States (English)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#001f4d] border-t border-[#003d8c]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuadGen Wireless. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCategories;
