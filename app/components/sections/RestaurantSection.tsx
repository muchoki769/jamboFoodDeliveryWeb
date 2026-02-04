// components/sections/RestaurantSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Store, Star, Clock, Truck, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Store,
    title: "500+ Restaurants",
    description: "Partnered with the best restaurants in major cities",
  },
  {
    icon: Star,
    title: "4.8+ Rating",
    description: "Consistently high customer satisfaction",
  },
  {
    icon: Clock,
    title: "30 Min Delivery",
    description: "Average delivery time across all cities",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above Ksh 1,000",
  },
]

export default function RestaurantSection() {
  return (
    <section id="restaurants" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Discover <span className="gradient-text">Restaurants</span> Near You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From local favorites to international cuisine, we partner with the best restaurants 
            in Nairobi, Mombasa, Kisumu, and Nakuru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Restaurant Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Available Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'].map((city, index) => (
              <div key={city} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold gradient-text">{city.charAt(0)}</span>
                </div>
                <h4 className="font-bold text-gray-900">{city}</h4>
                <p className="text-sm text-gray-600">Available now</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Want to list your restaurant?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants already using Jambo Food Delivery 
            to reach more customers and grow their business.
          </p>
          <a
            href=""
            className="btn-primary inline-flex items-center text-lg px-8"
          >
            Get Started
            <CheckCircle className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}