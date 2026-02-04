
'use client'

import { Shield, Lock, CreditCard, CheckCircle, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const badges = [
  {
    icon: Shield,
    title: "PCI DSS Compliant",
    description: "Meeting the highest security standards for payment processing",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Lock,
    title: "3D Secure 2.0",
    description: "Advanced authentication for every transaction",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: CreditCard,
    title: "Encrypted Payments",
    description: "End-to-end encryption for all payment data",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Smartphone,
    title: "M-Pesa Integrated",
    description: "Secure mobile money payments with Safaricom M-Pesa",
    color: "from-green-500 to-emerald-400",
    },
  {
    icon: CheckCircle,
    title: "Paystack Integrated",
    description: "Paystack for secure card transactions",
    color: "from-orange-500 to-red-400",
  },
]

export default function SecurityBadges() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              <span className="gradient-text">Security</span> & Trust
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your security is our top priority. We use industry-leading standards to protect every transaction.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              
              <div className="relative p-8 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:max-w-lg">
                <h3 className="text-2xl font-bold mb-4">
                   Paystack & Mpesa Integration Partner
                </h3>
                <p className="text-gray-300 mb-6">
                  Jambo Food Delivery wiill soon be an officially verified Paystack & Mpesa integration partner, 
                  ensuring secure, reliable, and instant payment processing for all transactions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="text-sm text-gray-300">Platform</div>
                    <div className="font-mono font-bold">Paystack & Mpesa Integrated</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="text-sm text-gray-300">Soon to be Verified</div>
                    <div className="font-bold">2026</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-300">Transaction Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/web/icon-192.png')]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}