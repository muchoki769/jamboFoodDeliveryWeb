// components/sections/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Target, Users, Globe, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To connect people with the best food experiences in their cities, delivered fast and fresh.",
  },
  {
    icon: Users,
    title: "Our Community",
    description: "Serving thousands of happy customers across Kenya since 2026.",
  },
  {
    icon: Globe,
    title: "Our Reach",
    description: "Operating in 4 major cities with plans to expand in African nations.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    description: "Quality food, reliable service, and secure payments every time.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            About <span className="gradient-text">Jambo Food</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're revolutionizing food delivery in Kenya by connecting customers with the best 
            local restaurants through a seamless, secure, and delightful experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-200 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-primary-100">Cities</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}