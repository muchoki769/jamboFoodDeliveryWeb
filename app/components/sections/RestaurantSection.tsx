// // components/sections/RestaurantSection.tsx
// 'use client'

// import { motion } from 'framer-motion'
// import { Store, Star, Clock, Truck, CheckCircle } from 'lucide-react'

// const features = [
//   {
//     icon: Store,
//     title: "500+ Restaurants",
//     description: "Partnered with the best restaurants in major cities",
//   },
//   {
//     icon: Star,
//     title: "4.8+ Rating",
//     description: "Consistently high customer satisfaction",
//   },
//   {
//     icon: Clock,
//     title: "30 Min Delivery",
//     description: "Average delivery time across all cities",
//   },
//   {
//     icon: Truck,
//     title: "Free Delivery",
//     description: "On orders above Ksh 1,000",
//   },
// ]

// export default function RestaurantSection() {
//   return (
//     <section id="restaurants" className="py-20 bg-white">
//       <div className="section-padding">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
//             Discover <span className="gradient-text">Restaurants</span> Near You
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             From local favorites to international cuisine, we partner with the best restaurants 
//             in Nairobi, Mombasa, Kisumu, and Nakuru.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 card-hover"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
//                 <feature.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Restaurant Cities */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
//         >
//           <h3 className="text-2xl font-bold text-center mb-8">Available Cities</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'].map((city, index) => (
//               <div key={city} className="text-center">
//                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                   <span className="text-2xl font-bold gradient-text">{city.charAt(0)}</span>
//                 </div>
//                 <h4 className="font-bold text-gray-900">{city}</h4>
//                 <p className="text-sm text-gray-600">Available now</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">
//             Want to list your restaurant?
//           </h3>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             Join hundreds of successful restaurants already using Jambo Food Delivery 
//             to reach more customers and grow their business.
//           </p>
//           <a
//             href="https://admin.jambofooddelivery.com/"
//             className="btn-primary inline-flex items-center text-lg px-8"
//           >
//             Get Started
//             <CheckCircle className="ml-2 w-5 h-5" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import {
  Beef,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Croissant,
  Fish,
  Pizza,
  Salad,
  Soup,
  Star,
  Utensils,
} from 'lucide-react'

const COLORS = {
  surface: '#F6F7F3',
  ink: '#26251F',
  primary: '#1F4B3F',
  accent: '#C97A3D',
  muted: '#78766E',
  border: '#E6E4DC',
  cardBg: '#FFFFFF',
  iconBg: '#EEF0E9',
}

const RESTAURANTS = [
  { name: 'Mama Oliech Kitchen', cuisine: 'Kenyan · Tilapia', rating: 4.8, time: '25–35 min', icon: Fish },
  { name: 'Choma Zone', cuisine: 'Nyama choma & grills', rating: 4.7, time: '30–40 min', icon: Beef },
  { name: 'Spice Route', cuisine: 'Indian', rating: 4.6, time: '20–30 min', icon: Soup },
  { name: 'Bella Napoli', cuisine: 'Italian · Pizza', rating: 4.5, time: '25–35 min', icon: Pizza },
  { name: 'Green Bowl', cuisine: 'Salads & healthy', rating: 4.9, time: '15–25 min', icon: Salad },
  { name: 'Sunrise Bakery', cuisine: 'Pastries & bread', rating: 4.7, time: '20–30 min', icon: Croissant },
  { name: 'Jiko Express', cuisine: 'Chapati, pilau & more', rating: 4.6, time: '20–30 min', icon: Utensils },
  { name: 'Urban Brew', cuisine: 'Coffee & snacks', rating: 4.8, time: '15–20 min', icon: Coffee },
]

const CARD_WIDTH = 264
const GAP = 20
const STEP = CARD_WIDTH + GAP

export default function FeaturedRestaurants() {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [constraint, setConstraint] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && trackRef.current) {
        const overflow = trackRef.current.scrollWidth - containerRef.current.offsetWidth
        setConstraint(overflow > 0 ? overflow : 0)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    const next = Math.min(0, Math.max(-constraint, x.get() - dir * STEP))
    animate(x, next, { type: 'spring', stiffness: 320, damping: 32 })
  }

  return (
    <section id="restaurants" className="py-20 md:py-28" style={{ backgroundColor: COLORS.surface }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2
              className="text-[28px] font-semibold tracking-tight md:text-[34px]"
              style={{ color: COLORS.ink, fontFamily: 'var(--font-heading, sans-serif)' }}
            >
              Featured restaurants near you
            </h2>
            <p className="mt-2 max-w-md text-[15px]" style={{ color: COLORS.muted }}>
              Handpicked spots people keep ordering from, across Nairobi and beyond.
            </p>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              aria-label="Previous restaurants"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: COLORS.border, color: COLORS.ink }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next restaurants"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: COLORS.border, color: COLORS.ink }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div ref={containerRef} className="mt-10 overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            style={{ x }}
            dragConstraints={{ left: -constraint, right: 0 }}
            dragElastic={0.05}
            className="flex cursor-grab gap-5 active:cursor-grabbing"
          >
            {RESTAURANTS.map((r) => {
              const Icon = r.icon
              return (
                <a
                  key={r.name}
                  href="#"
                  draggable={false}
                  className="shrink-0 select-none overflow-hidden rounded-2xl border"
                  style={{ width: CARD_WIDTH, borderColor: COLORS.border, backgroundColor: COLORS.cardBg }}
                >
                  <div
                    className="flex h-32 items-center justify-center"
                    style={{ backgroundColor: COLORS.iconBg }}
                  >
                    <Icon size={34} color={COLORS.primary} strokeWidth={1.5} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-medium" style={{ color: COLORS.ink }}>
                      {r.name}
                    </h3>
                    <p className="mt-1 text-[13px]" style={{ color: COLORS.muted }}>
                      {r.cuisine}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[13px]" style={{ color: COLORS.muted }}>
                      <span className="flex items-center gap-1">
                        <Star size={13} color={COLORS.accent} fill={COLORS.accent} />
                        {r.rating.toFixed(1)}
                      </span>
                      <span>{r.time}</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}