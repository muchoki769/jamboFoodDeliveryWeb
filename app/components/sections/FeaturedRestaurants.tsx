
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Clock, Bike, ChevronRight, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const restaurants = [
  {
    id: 1,
    name: "Mama's Kitchen",
    cuisine: "African • Kenyan",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free delivery",
    image: "/images/restaurants/mamas-kitchen.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian • Pizza",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "Ksh 150",
    image: "/images/restaurants/pizza-palace.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese • Sushi",
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: "Free delivery",
    image: "/images/restaurants/sushi-master.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisine: "American • Burgers",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "Ksh 100",
    image: "/images/restaurants/burger-hub.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Spice Route",
    cuisine: "Indian • Curry",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: "Free delivery",
    image: "/images/restaurants/spice-route.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "Green Bowl",
    cuisine: "Healthy • Salads",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: "Ksh 120",
    image: "/images/restaurants/green-bowl.jpg",
    featured: false,
  },
]

const categories = ["All", "African", "Italian", "Japanese", "American", "Indian", "Healthy", "Fast Food"]

export default function FeaturedRestaurants() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("rating")

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="gradient-text">Featured</span> Restaurants
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover the finest restaurants in Kenya. Each restaurant is carefully selected for quality and service.
            </p>
          </div>
          
          <button className="btn-primary mt-4 md:mt-0 inline-flex items-center">
            View All Restaurants
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <button className="flex items-center text-sm text-gray-600 hover:text-primary-600">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 animate-pulse-slow" />
                
                {/* Featured Badge */}
                {restaurant.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white text-primary-600 text-xs font-bold rounded-full shadow-lg">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-gray-900">{restaurant.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bike className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{restaurant.deliveryFee}</span>
                    </div>
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700 font-semibold">
                    View Menu →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}