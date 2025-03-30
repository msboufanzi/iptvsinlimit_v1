"use client"

import { useRef } from "react"
import Navbar from "../../components/navBar/Navbar"
import Hero from "../../components/home/Hero"
import BrandInfo from "../../components/home/BrandInfo"
import PricingSection from "../../components/home/PricingSection"
import ServiceSection from "../../components/home/ServiceSection"
import WhyChoseUs from "../../components/home/WhyChoseUs"
import HowItWork from "../../components/home/HowItWork"
import FeedBack from "../../components/home/FeedBack"
import Question from "../../components/home/Question"
import Footer from "../../components/footer/Footer"
import PaymentPopup from "../../components/payment/PaymentPopup"
import WhatsAppButton from "../../components/WhatsAppButton"
import { useState } from "react"

const HomePage = () => {
  // Refs for scrolling to sections
  const pricingRef = useRef(null)
  const servicesRef = useRef(null)
  const howItWorksRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  // State for payment popup
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to open payment popup
  const openPaymentPopup = (product) => {
    setSelectedProduct(product)
    setIsPaymentPopupOpen(true)
  }

  // Function to handle payment selection
  const handlePaymentSelect = (method) => {
    if (method === "whatsapp") {
      window.open(
        `https://wa.me/34649324985?text=I'm interested in purchasing ${selectedProduct?.title || "your IPTV subscription"}`,
        "_blank",
      )
    }
    // Other payment methods would be handled here
    setIsPaymentPopupOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar with scroll functions */}
      <Navbar
        scrollToPricing={() => scrollToSection(pricingRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToHowItWorks={() => scrollToSection(howItWorksRef)}
        scrollToFaq={() => scrollToSection(faqRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}
      <Hero scrollToPricing={() => scrollToSection(pricingRef)} />

      {/* Brand Info Section */}
      <div className="bg-black py-8 pb-10">
        <BrandInfo />

        {/* Pricing Section */}
        <div ref={pricingRef} id="pricing-section">
          <PricingSection openPaymentPopup={openPaymentPopup} />
        </div>

        {/* Services Section */}
        <div ref={servicesRef}>
          <ServiceSection openPaymentPopup={openPaymentPopup} />
        </div>

        {/* Why Choose Us Section */}
        <WhyChoseUs />

        {/* How It Works Section */}
        <div ref={howItWorksRef}>
          <HowItWork />
        </div>

        {/* Feedback Section */}
        <FeedBack with_back={true} />

        {/* FAQ Section */}
        <div ref={faqRef}>
          <Question />
        </div>
      </div>

      {/* Footer with Contact Section */}
      <div ref={contactRef}>
        <Footer />
      </div>

      {/* Payment Popup */}
      <PaymentPopup
        isOpen={isPaymentPopupOpen}
        onClose={() => setIsPaymentPopupOpen(false)}
        onPaymentSelect={handlePaymentSelect}
        product={selectedProduct}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default HomePage

