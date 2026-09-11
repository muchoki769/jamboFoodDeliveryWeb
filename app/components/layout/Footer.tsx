// // src/components/layout/Footer.tsx
// import Link from 'next/link'
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

// export default function Footer() {
//   const footerLinks = {
//     Company: [
//       { href: '/about', label: 'About Us' },
//       { href: '/careers', label: 'Careers' },
//     //   { href: '/press', label: 'Press' },
//       { href: '/blog', label: 'Blog' },
//     ],
//     Support: [
//       { href: '/help', label: 'Help Center' },
//       { href: '/contact', label: 'Contact Us' },
//       { href: '/privacy', label: 'Privacy Policy' },
//       { href: '/terms', label: 'Terms of Service' },
//     ],
//     ForRestaurants: [
//       { href: '/partner', label: 'Partner with Us' },
//       { href: '/business', label: 'Business Solutions' },
//       { href: '/merchant', label: 'Merchant Center' },
//       { href: '/ads', label: 'Advertise' },
//     ],
//     Cities: [
//       { href: '/nairobi', label: 'Nairobi' },
//       { href: '/mombasa', label: 'Mombasa' },
//       { href: '/kisumu', label: 'Kisumu' },
//       { href: '/nakuru', label: 'Nakuru' },
//     ],
//   }

//   const socialLinks = [
//     { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
//     { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//     { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
//     { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
//   ]

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="section-padding py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//           {/* Brand Column */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="flex items-center space-x-2 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
//                 <span className="text-white font-bold text-2xl">J</span>
//               </div>
//               <span className="text-3xl font-bold font-display">
//                 Jambo<span className="text-primary-400">Food</span>
//               </span>
//             </Link>
//             <p className="text-gray-400 mb-8 max-w-md">
//               Delivering happiness to your doorstep. Fresh food from the best restaurants, 
//               delivered fast with secure Paystack payments.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-300">ndungudavidmuchoki@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-300">+254 742732103</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-300">Westlands, Nairobi, Kenya</span>
//               </div>
//             </div>
//           </div>

//           {/* Links Columns */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h3 className="font-bold text-lg mb-6">{category}</h3>
//               <ul className="space-y-4">
//                 {links.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition-colors duration-200"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 my-12"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-6 md:mb-0">
//             <div className="flex items-center space-x-6 mb-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="text-gray-400 hover:text-white transition-colors duration-200"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//             <p className="text-gray-500 text-sm">
//               © {new Date().getFullYear()} Jambo Food Delivery. All rights reserved.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-6">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
//                 <span className="text-black font-bold text-sm">JFD</span>
//               </div>
//               <span className="text-gray-300"> </span>
//             </div>
//             <div className="text-gray-500 text-sm">
//               • Secure Payments
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
import Link from 'next/link'
import { Bike, Facebook, Instagram, Linkedin, ShieldCheck, Twitter } from 'lucide-react'

const COLORS = {
  surface: '#F6F7F3',
  ink: '#26251F',
  primary: '#1F4B3F',
  accent: '#C97A3D',
  muted: '#78766E',
  border: '#E6E4DC',
}

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Contact us', href: '#contact' },
      { label: 'Partner with us', href: '/partner' },
    ],
  },
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Restaurants near you', href: '#restaurants' },
      { label: 'Download the app', href: '#download' },
      { label: 'Track an order', href: '/track' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help centre', href: '/help' },
      { label: 'Safety & security', href: '#security' },
      { label: 'Terms of service', href: 'https://admin.jambofooddelivery.com/terms' },
      { label: 'Privacy policy', href: 'https://admin.jambofooddelivery.com/privacy' },
    ],
  },
]

const SOCIALS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.surface, borderTop: `1px solid ${COLORS.border}` }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="#home" className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Bike size={18} color={COLORS.surface} strokeWidth={2.25} />
              </span>
              <span className="text-lg font-semibold" style={{ color: COLORS.ink }}>
                Jambo <span className="font-normal" style={{ color: COLORS.muted }}>Food Delivery</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed" style={{ color: COLORS.muted }}>
              Fresh meals from restaurants you trust, delivered fast across Kenya.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                  style={{ borderColor: COLORS.border, color: COLORS.ink }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[14px] font-medium" style={{ color: COLORS.ink }}>
                {col.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] transition-colors hover:opacity-100"
                      style={{ color: COLORS.muted }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row md:items-center"
          style={{ borderColor: COLORS.border }}
        >
          <p className="text-[13px]" style={{ color: COLORS.muted }}>
            © {new Date().getFullYear()} Jambo Food Delivery. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px]" style={{ color: COLORS.muted }}>
            <ShieldCheck size={15} color={COLORS.primary} />
            Secure Payments
          </div>
        </div>
      </div>
    </footer>
  )
}