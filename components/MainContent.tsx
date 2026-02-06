'use client'

import { ArrowRight, Globe, Network, Wifi, Shield, Server, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
}

export default function MainContent() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8 max-w-4xl mx-auto pt-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Network & Engineering <br className="hidden md:block" /> <span className="text-[#1a73e8]">Services Company</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Enabling customers with best-in-class quality and fast market strategies for improved network performance across multi-technology domains.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <Link href="/contact-us" className="inline-flex justify-center items-center gap-2 bg-[#1a73e8] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#1557b0] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-[#1a73e8] bg-blue-50 hover:bg-blue-100 transition-all hover:-translate-y-0.5 text-base">
            Learn More
          </Link>
        </motion.div>
      </motion.section>

      {/* Stats/About Highlights */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-gray-100 py-12"
      >
        <motion.div variants={item}>
          <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="text-4xl font-bold text-gray-900 mb-2">$500M+</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Cumulative Revenue</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Professionals</div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <Link href="/services" className="text-[#1a73e8] font-medium hover:underline flex items-center gap-1">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1a73e8]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1a73e8] transition-colors duration-300 shadow-sm group-hover:shadow-md">
              <Network className="h-6 w-6 text-[#1a73e8] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">System Integration</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              End-to-end integration covering Design, Build, Install, and Test phases. We ensure seamless deployment for complex network infrastructures.
            </p>
            <ul className="space-y-3 mb-8">
              {['Design and Engineer (D&E)', 'Build and Deploy (B&D)', 'Install and Commission (I&C)', 'Test and Integrate (T&I)'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1a73e8]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1a73e8]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <Wifi className="h-5 w-5 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Network Engineering</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive services for NextGen Wireless, IP-OTN and IoT networks.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1a73e8]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Shield className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Private Networks</h3>
              <p className="text-gray-600 leading-relaxed">Customized private network solutions ensuring security, reliability, and high performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-500 max-w-2xl">Innovative hardware and software solutions driving the future of connectivity.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {[
            { name: "Small Cells", icon: Wifi },
            { name: "5G Core", icon: Server },
            { name: "SD-WAN", icon: Globe },
            { name: "60Hz Backhaul", icon: Network },
            { name: "CPE", icon: Shield }
          ].map((product, idx) => (
            <motion.div key={idx} variants={item}>
              <Link href="#" className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 hover:border-[#1a73e8] hover:shadow-lg transition-all duration-300 group bg-white text-center h-48 hover:-translate-y-1">
                <product.icon className="h-8 w-8 text-gray-400 group-hover:text-[#1a73e8] mb-4 transition-colors duration-300 transform group-hover:scale-110" />
                <span className="font-semibold text-gray-900 group-hover:text-[#1a73e8] transition-colors duration-300">{product.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Partner with Trust</h2>
        <p className="text-gray-600 mb-8 mx-auto max-w-lg">
          "A satisfied customer is the only strategy we have."
        </p>
        <Link href="/contact-us" className="inline-block border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-200">
          Contact Sales
        </Link>
      </motion.section>
    </div>
  )
}
