
'use client'

import { Smartphone, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    step: 1,
    title: "Enter Phone Number",
    description: "Provide your M-Pesa registered phone number",
  },
  {
    step: 2,
    title: "STK Push Request",
    description: "Receive payment prompt on your phone",
  },
  {
    step: 3,
    title: "Enter PIN",
    description: "Enter your M-Pesa PIN to authorize payment",
  },
  {
    step: 4,
    title: "Instant Confirmation",
    description: "Get instant payment confirmation and receipt",
  },
]

export default function MpesaFlow() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold">M-PESA PAYMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              How <span className="text-green-600">M-Pesa</span> Payments Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pay securely using  M-Pesa. Reliable, fast, and trusted by millions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-transparent" />
              )}

              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 h-full card-hover">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                <div className="flex items-center text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Secure</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* M-Pesa Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:max-w-2xl">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose M-Pesa for Payments?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">No Card Required</h4>
                      <p className="text-green-100 text-sm">Pay directly from your mobile wallet</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Instant Processing</h4>
                      <p className="text-green-100 text-sm">Transactions complete in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Safaricom Security</h4>
                      <p className="text-green-100 text-sm">Bank-level security from Safaricom</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Widely Used</h4>
                      <p className="text-green-100 text-sm">Trusted by millions in Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">30M+</div>
                  <div className="text-green-100">M-Pesa Users in Kenya</div>
                  <div className="text-sm text-green-200 mt-2">Trusted nationwide</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/pattern-mpesa.svg')]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}