
// // 'use client'

// // // Replace the import
// // import { Apple, Play, QrCode, CheckCircle } from 'lucide-react'
// // import { motion } from 'framer-motion'

// // export default function DownloadApp() {
// //   const features = [
// //     "Real-time order tracking",
// //     "Exclusive app-only deals",
// //     "Easy reordering",
// //     "Save favorite restaurants",
// //     "Instant payment with Paystack",
// //     "24/7 customer support"
// //   ]

// //   return (
// //     <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
// //       <div className="section-padding">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           {/* Content */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
// //               Download the <span className="gradient-text">Jambo Food</span> App
// //             </h2>
// //             <p className="text-gray-600 text-lg mb-8">
// //               Get the best food delivery experience on your mobile device. 
// //               Order faster, track in real-time, and enjoy exclusive app-only offers.
// //             </p>

// //             {/* Features */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// //               {features.map((feature, index) => (
// //                 <div key={index} className="flex items-center space-x-3">
// //                   <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
// //                   <span className="text-gray-700">{feature}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* App Store Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-4 flex items-center justify-center space-x-3 transition-all duration-200 hover:scale-105">
// //                 <Apple className="w-6 h-6" />
// //                 <div className="text-left">
// //                   <div className="text-xs">Download on the</div>
// //                   <div className="text-lg font-semibold">App Store</div>
// //                 </div>
// //               </button>
              
// //               <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-4 flex items-center justify-center space-x-3 transition-all duration-200 hover:scale-105">
// //                 <Play className="w-6 h-6" />
// //                 <div className="text-left">
// //                   <div className="text-xs">Get it on</div>
// //                   <div className="text-lg font-semibold">Google Play</div>
// //                 </div>
// //               </button>
// //             </div>
// //           </motion.div>

// //           {/* QR Code & App Preview */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >
// //             {/* Floating Phone Mockup */}
// //             <div className="relative mx-auto max-w-md">
// //               <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" />
// //               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
              
// //               <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl relative z-10">
// //                 <div className="bg-gray-900 rounded-2xl p-1 mb-6 mx-auto w-12">
// //                   <div className="w-10 h-1 bg-gray-700 rounded-full mx-auto"></div>
// //                 </div>
                
// //                 <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-4 text-white mb-6">
// //                   <div className="flex items-center justify-between mb-4">
// //                     <div>
// //                       <div className="text-sm text-gray-400">Order #12345</div>
// //                       <div className="text-lg font-bold">Mama's Kitchen</div>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="text-sm text-gray-400">Estimated</div>
// //                       <div className="text-lg font-bold">15 min</div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="space-y-3">
// //                     <div className="flex items-center justify-between">
// //                       <div className="w-3/4 bg-gray-700 rounded-full h-2">
// //                         <div className="bg-primary-500 h-2 rounded-full w-3/4"></div>
// //                       </div>
// //                       <span className="text-sm">Preparing</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* QR Code Section */}
// //                 <div className="text-center">
// //                   <div className="inline-block bg-white p-4 rounded-xl shadow-lg mb-4">
// //                     <div className="w-40 h-40 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
// //                       <QrCode className="w-32 h-32 text-white" />
// //                     </div>
// //                   </div>
// //                   <p className="text-gray-600 text-sm">
// //                     Scan to download the app
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// 'use client'

// import { useState } from 'react'
// import { Apple, Play, CheckCircle, Bell, Loader2 } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { QRCodeSVG } from 'qrcode.react'
// import { supportAPI } from '@/app/lib/api'


// const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.jambofooddelivery"

// export default function DownloadApp() {
//   const [email, setEmail] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [isSubscribed, setIsSubscribed] = useState(false)
//   const [error, setError] = useState('')

//   const features = [
//     "Real-time order tracking",
//     "Exclusive app-only deals",
//     "Easy reordering",
//     "Save favorite restaurants",
//     "Secure Paystack & M-Pesa payments",
//     "24/7 customer support"
//   ]

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!email) {
//       setError('Please enter your email address')
//       return
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setError('Please enter a valid email address')
//       return
//     }

//     setIsLoading(true)
//     setError('')

//     try {
//       await supportAPI.subscribe(email)
//       setIsSubscribed(true)
//       setEmail('')
      
//       // Show success message
//       setTimeout(() => {
//         setIsSubscribed(false)
//       }, 5000)
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Failed to subscribe. Please try again.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
//       <div className="section-padding">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
//               Download <span className="gradient-text">Our Mobile App</span>
//             </h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Get the best food delivery experience on your mobile device. 
//               Coming soon to Google Play Store.
//             </p>

//             {/* Features */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
//                   <span className="text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Coming Soon Badge */}
//             <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
//               <Bell className="w-4 h-4 mr-2" />
//               <span className="font-semibold">Coming Soon to Google Play</span>
//             </div>

//             {/* App Store Buttons - Disabled for now */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <button 
//                 disabled
//                 className="bg-gray-300 text-gray-500 rounded-xl px-6 py-4 flex items-center justify-center space-x-3 cursor-not-allowed"
//               >
//                 <Apple className="w-6 h-6" />
//                 <div className="text-left">
//                   <div className="text-xs">Coming Soon</div>
//                   <div className="text-lg font-semibold">App Store</div>
//                 </div>
//               </button>
              
//               <button 
//                 disabled
//                 className="bg-gray-300 text-gray-500 rounded-xl px-6 py-4 flex items-center justify-center space-x-3 cursor-not-allowed"
//               >
//                 <Play className="w-6 h-6" />
//                 <div className="text-left">
//                   <div className="text-xs">Coming Soon</div>
//                   <div className="text-lg font-semibold">Google Play</div>
//                 </div>
//               </button>
//             </div>

//             {/* Notification Form */}
//             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
//               <h3 className="font-bold text-gray-900 mb-3">Get Launch Notifications</h3>
//               <p className="text-gray-600 mb-4 text-sm">
//                 Be the first to know when we launch on Google Play Store
//               </p>
              
//               <form onSubmit={handleSubscribe} className="space-y-3">
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value)
//                       setError('')
//                     }}
//                     placeholder="Enter your email"
//                     className={`flex-1 input-field ${error ? 'border-red-300' : ''}`}
//                     disabled={isLoading || isSubscribed}
//                   />
//                   <button 
//                     type="submit"
//                     disabled={isLoading || isSubscribed}
//                     className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isLoading ? (
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                     ) : isSubscribed ? (
//                       'Subscribed!'
//                     ) : (
//                       'Notify Me'
//                     )}
//                   </button>
//                 </div>
                
//                 {error && (
//                   <p className="text-red-600 text-sm">{error}</p>
//                 )}
                
//                 {isSubscribed && (
//                   <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
//                     ✅ Thank you! We'll notify you when the app is available.
//                   </div>
//                 )}
//               </form>
//             </div>
//           </motion.div>

//           {/* QR Code Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative mx-auto max-w-md">
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" />
//               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
              
//               <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl relative z-10">
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-register Now</h3>
//                   <p className="text-gray-600">Scan QR code to visit Google Play Store</p>
//                 </div>

//                 {/* QR Code Display */}
//                 <div className="flex flex-col items-center justify-center mb-8">
//                   <div className="mb-6 p-4 bg-white rounded-xl shadow-lg">
//                     <QRCodeSVG
//                       value={GOOGLE_PLAY_URL}
//                       size={200}
//                       level="H"
//                       includeMargin={true}
//                       bgColor="#FFFFFF"
//                       fgColor="#000000"
//                     />
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg mb-2">
//                       <Play className="w-5 h-5 mr-2" />
//                       <span className="font-bold">Google Play</span>
//                     </div>
//                     <p className="text-gray-600 text-sm max-w-xs">
//                       Scan with your phone's camera to visit the pre-registration page
//                     </p>
//                   </div>
//                 </div>

//                 {/* Launch Timeline */}
//                 <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
//                   <h4 className="font-bold text-gray-900 mb-4">Launch Progress</h4>
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span className="text-gray-700 font-medium">App Development</span>
//                         <div className="text-sm text-gray-500">Core features complete</div>
//                       </div>
//                       <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
//                         ✅ Complete
//                       </span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span className="text-gray-700 font-medium">Testing Phase</span>
//                         <div className="text-sm text-gray-500">Quality assurance</div>
//                       </div>
//                       <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
//                         In Progress
//                       </span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span className="text-gray-700 font-medium">Google Play Store</span>
//                         <div className="text-sm text-gray-500">App submission & review</div>
//                       </div>
//                       <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
//                         Coming Soon
//                       </span>
//                     </div>
                    
//                     <div className="pt-4 border-t border-gray-200">
//                       <div className="text-center">
//                         <div className="text-sm text-gray-500 mb-1">Estimated Launch</div>
//                         <div className="text-xl font-bold text-primary-600">Q1 2026</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Direct Link */}
//                 <div className="mt-6 text-center">
//                   <p className="text-sm text-gray-600 mb-3">Or visit directly:</p>
//                   <a 
//                     href={GOOGLE_PLAY_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
//                   >
//                     <Play className="w-4 h-4 mr-2" />
//                     Google Play Store Pre-registration
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Apple } from 'lucide-react'

const COLORS = {
  surface: '#F6F7F3',
  ink: '#26251F',
  primary: '#1F4B3F',
  primaryDark: '#163B31',
  accent: '#C97A3D',
  muted: '#78766E',
  border: '#E6E4DC',
}


const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.jambofooddelivery'

const FEATURES = [
  'Live rider tracking from kitchen to door',
  'Pay instantly with M-Pesa & Card',
  'Save your favourite restaurants and orders',
]

export default function DownloadApp() {
  return (
    <section id="download" className="py-20 md:py-28" style={{ backgroundColor: COLORS.surface }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <div>
            <h2
              className="text-[28px] font-semibold tracking-tight md:text-[34px]"
              style={{ color: COLORS.ink, fontFamily: 'var(--font-heading, sans-serif)' }}
            >
              Get the Jambo app
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>
              Scan the code or search &ldquo;Jambo Food Delivery&rdquo; on Google
              Play to start ordering.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[14px]" style={{ color: COLORS.ink }}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Google Play — live */}
            <div
              className="flex flex-1 flex-col items-center gap-4 rounded-2xl border p-6"
              style={{ borderColor: COLORS.border, backgroundColor: '#FFFFFF' }}
            >
              <div className="rounded-xl border p-3" style={{ borderColor: COLORS.border }}>
                <QRCodeSVG value={PLAY_STORE_URL} size={120} fgColor={COLORS.ink} bgColor="#FFFFFF" />
              </div>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-center text-[14px] font-medium"
                style={{ color: COLORS.primary }}
              >
                Get it on Google Play
              </a>
            </div>

            {/* App Store — not live yet */}
            <div
              className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-6"
              style={{ borderColor: COLORS.border, color: COLORS.muted }}
            >
              <Apple size={30} />
              <p className="text-center text-[13px]">Coming soon to the App Store</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}