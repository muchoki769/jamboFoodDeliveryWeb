
// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X, ShoppingCart, MapPin, User, ChevronDown } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/restaurants', label: 'Restaurants' },
//     { href: '/about', label: 'About' },
//     { href: '/contact', label: 'Contact' },
//   ]

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="section-padding">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
//               <span className="text-white font-bold text-xl">J</span>
//             </div>
//             <span className="text-2xl font-bold font-display gradient-text">
//               Jambo<span className="text-primary-600">Food</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
//               <MapPin className="w-5 h-5" />
//               <span className="font-medium">Nairobi</span>
//               <ChevronDown className="w-4 h-4" />
//             </button>
            
//             <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <ShoppingCart className="w-6 h-6 text-gray-700" />
//               <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 3
//               </span>
//             </button>

//             <Link
//               href="/login"
//               className="btn-primary text-sm"
//             >
//               Sign In
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="pt-6 pb-4 space-y-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="block py-2 text-lg text-gray-700 hover:text-primary-600 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//                 <div className="pt-4 border-t space-y-4">
//                   <button className="flex items-center space-x-2 text-gray-700 w-full">
//                     <MapPin className="w-5 h-5" />
//                     <span>Change Location</span>
//                   </button>
//                   <button className="flex items-center space-x-2 text-gray-700 w-full">
//                     <ShoppingCart className="w-5 h-5" />
//                     <span>Cart (3 items)</span>
//                   </button>
//                   <Link
//                     href="/login"
//                     className="block w-full text-center btn-primary"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Sign In
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   )
// }



// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MapPin, User, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const cities = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Nairobi')
  const [showCityDropdown, setShowCityDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#restaurants', label: 'Restaurants' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-5'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-bold font-display gradient-text">
              Jambo<span className="text-primary-600">Food</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{selectedCity}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCityDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* City Dropdown */}
              <AnimatePresence>
                {showCityDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city)
                          setShowCityDropdown(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedCity === city ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href=""
              className="btn-primary text-sm"
            >
              Sign In
            </Link>
            
            <Link
              href=""
              className="btn-secondary text-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white rounded-xl mt-4 shadow-xl border border-gray-200"
            >
              <div className="py-6 px-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors px-4 hover:bg-gray-50 rounded-lg"
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t space-y-4">
                  {/* City Selector Mobile */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500 px-4">Select City</div>
                    <div className="grid grid-cols-2 gap-2 px-4">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setSelectedCity(city)
                            setIsOpen(false)
                          }}
                          className={`py-2 px-4 rounded-lg text-center transition-colors ${
                            selectedCity === city
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 px-4">
                    <Link
                      href=""
                      className="block w-full text-center btn-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href=""
                      className="block w-full text-center btn-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}