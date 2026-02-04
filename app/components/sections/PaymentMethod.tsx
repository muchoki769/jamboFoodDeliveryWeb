
'use client'

import { CreditCard, Smartphone, Shield, Lock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const paymentMethods = [
  {
    name: "Paystack",
    description: "Secure card payments",
    icon: CreditCard,
    features: ["Visa/Mastercard", "3D Secure", "Instant Processing"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "M-Pesa",
    description: "Mobile money payments",
    icon: Smartphone,
    features: ["Safaricom M-Pesa", "STK Push", "Instant Confirmation"],
    color: "from-green-500 to-emerald-400",
  },
]

const securityFeatures = [
  {
    icon: Shield,
    title: "PCI DSS Level 1 Certified",
    description: "Highest level of payment security compliance",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your payment data is encrypted at all times",
  },
//   {
//     icon: CheckCircle,
//     title: "Two-Factor Authentication",
//     description: "Extra security layer for all transactions",
//   },
{
  icon: CheckCircle,
  title: "Paystack Integration",
  description: "Coming soon - Secure card payment integration",
  color: "from-blue-500 to-cyan-400",
},
]

export default function PaymentMethods() {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Secure <span className="gradient-text">Payment</span> Methods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from multiple secure payment options. All transactions are protected with bank-level security.
            </p>
          </motion.div>
        </div>

        {/* Payment Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-lg" />
              
              <div className="relative p-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-gray-900">{method.name}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>100% Secure Transactions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:max-w-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Bank-Level Security for Every Transaction
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <feature.icon className="w-8 h-8 text-primary-400 mb-3" />
                      <h4 className="font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-gray-300">Security Incidents</div>
                  <div className="text-sm text-gray-400 mt-2">Since launch</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/images/pattern-lock.svg')]"></div>
          </div>
        </motion.div>

        {/* Payment Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-8">
            Officially Verified Payment Partners
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {/* Paystack Logo */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-32 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">PAYSTACK</span>
              </div>
            </div>
            
            {/* M-Pesa Logo */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-32 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M-PESA</span>
              </div>
            </div>
            
            {/* Safaricom Logo */}
            {/* <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-32 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SAFARICOM</span>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}