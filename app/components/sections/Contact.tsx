// components/sections/ContactSection.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Loader2, CheckCircle } from 'lucide-react'
import { supportAPI } from '@/app/lib/api'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    // Handle contact form submission
     try {
      await supportAPI.contact(formData)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (err: any) {
      setSubmitError(err.response?.data?.message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
    
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? We're here to help. Contact our support team for assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
               {submitSuccess && (
                <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-lg">
                  <p className="font-medium">Error: {submitError}</p>
                </div>
              )}
              

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                       disabled={isSubmitting}
        
                      className="input-field  disabled:bg-gray-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                       disabled={isSubmitting}
                      className="input-field disabled:bg-gray-50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                       disabled={isSubmitting}
                      className="input-field disabled:bg-gray-50"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                       disabled={isSubmitting}
                      className="input-field disabled:bg-gray-50"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                     disabled={isSubmitting}
                    rows={4}
                    className="input-field disabled:bg-gray-50"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >

                  {/* <span>Send Message</span>
                  <Send className="w-5 h-5" /> */}
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                    <a href="mailto:support@jambofood.com" className="text-primary-600 hover:underline">
                      support@jambofood.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Support</h4>
                    <p className="text-gray-600 mb-2">Available Monday to Friday, 8AM-8PM</p>
                    <a href="tel:+254700123456" className="text-primary-600 hover:underline">
                      +254 700 123 456
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Headquarters</h4>
                    <p className="text-gray-600">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Support Hours</h4>
                    <p className="text-gray-600">24/7 Customer Support via Chat</p>
                    <p className="text-gray-600 text-sm">Phone: Mon-Fri, 8AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Note */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Need immediate help?</h4>
              <p className="text-gray-600 mb-4">
                For urgent inquiries, please call our support line. For restaurant partnership 
                inquiries, visit our restaurant onboarding page.
              </p>
              <a
                href="https://jambofooddeliverybackend-754053186113.europe-west1.run.app/restaurant/onboard"
                className="text-primary-600 hover:underline font-semibold"
              >
                Restaurant Partnership →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}