
'use client'

import { Search, Store, CreditCard, Bike, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Search,
    title: "Search Restaurant",
    description: "Browse through hundreds of restaurants in your area",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Store,
    title: "Choose Food",
    description: "Select your favorite dishes from the restaurant's menu",
    color: "from-purple-500 to-pink-400",
  },
{
  icon: CreditCard,
  title: "Pay Securely",
  description: "Pay using Paystack (cards) or M-Pesa (mobile money)",
  color: "from-green-500 to-emerald-400",
},
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Enjoy your food delivered hot and fresh to your doorstep",
    color: "from-orange-500 to-red-400",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              How <span className="gradient-text">Jambo Food</span> Works
            </h2>
            <p className="text-gray-600 text-lg">
              Getting your favorite food delivered has never been easier. Just follow these simple steps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center z-10">
                <span className="text-2xl font-bold gradient-text">{index + 1}</span>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 h-full card-hover">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Paystack Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:max-w-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-bold">PAYSTACK VERIFIED</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Secure Payments with Paystack
                </h3>
                <p className="text-gray-300">
                  All payments are processed through Paystack's secure payment gateway. 
                  Your financial information is protected with bank-level security.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>3D Secure Authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Instant Payment Confirmation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-300">Secure Payments</div>
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