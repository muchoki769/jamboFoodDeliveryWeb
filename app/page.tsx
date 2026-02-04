// src/app/page.tsx

import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import DownloadApp from "./components/sections/DownloadApp";
import FeaturedRestaurants from "./components/sections/FeaturedRestaurants";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import PaymentMethods from "./components/sections/PaymentMethod";
import RestaurantSection from "./components/sections/RestaurantSection";
import SecurityBadges from "./components/sections/SecurityBadges";
import Testimonials from "./components/sections/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      {/* <FeaturedRestaurants /> */}
       <RestaurantSection />
      <HowItWorks />
      <PaymentMethods />
      <AboutSection />
      <ContactSection />
      <Testimonials />
      <SecurityBadges />
      <DownloadApp />
    </>
  )
}