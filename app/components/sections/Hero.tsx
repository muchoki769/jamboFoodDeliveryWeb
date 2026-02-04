
'use client'

import { useState, useEffect } from 'react'
import { Search, Shield, Clock, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const features = [
    { icon: Clock, text: 'Fast Delivery', subtext: '30-45 minutes' },
    { icon: Star, text: '4.8 Rating', subtext: '1000+ reviews' },
    { icon: Shield, text: 'Secure Payments', subtext: 'Paystack & M-Pesa' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="section-padding py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              <span className="gradient-text">Delicious Food</span>
              <br />
              <span className="text-gray-900">Delivered to Your</span>
              <span className="gradient-text"> Doorstep</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Order from the best restaurants in Kenya. Fast, reliable delivery with 100% secure Paystack payments. 
              Experience food delivery like never before.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  className="input-field pl-12 pr-40 py-4 text-lg shadow-lg"
                />
                <button className="absolute right-2 top-2 btn-primary flex items-center space-x-2">
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{feature.text}</h3>
                      <p className="text-sm text-gray-600">{feature.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <p className="text-gray-600 mb-6">Trusted by thousands of customers</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-3xl font-bold text-gray-400">5000+</div>
                <div className="text-3xl font-bold text-gray-400">4.8★</div>
                <div className="text-3xl font-bold text-gray-400">98%</div>
                <div className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold">
                   VERIFIED
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}