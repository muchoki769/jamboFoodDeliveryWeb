import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Jambo Food Delivery - Fresh Food Delivered Fast',
  description: 'Order delicious food from the best restaurants in your area. Fast delivery, secure payments, and a seamless online ordering experience.',
  keywords: 'food delivery, online ordering, best restaurants,secure payments',
  openGraph: {
    title: 'Jambo Food Delivery',
    description: 'Fresh Food Delivered Fast',
    type: 'website',
    images: ['https://www.jambofooddelivery.com/web/icon-512.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${inter.variable} ${poppins.variable} antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>

    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Jambo Food Delivery',
              url: 'https://jambofooddelivery.com',
              "logo": "https://jambofooddelivery.com/web/icon-512.png"
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>

  );
}
