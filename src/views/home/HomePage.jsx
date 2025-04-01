"use client"

import { useRef, useState, useEffect } from "react"
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
import PaypalPayment from "../../components/payment/PaypalPayment"
import WhatsAppButton from "../../components/WhatsAppButton"

const HomePage = () => {
  // Refs for scrolling to sections
  const pricingRef = useRef(null)
  const servicesRef = useRef(null)
  const howItWorksRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  // State for payment popups
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)
  const [isPaypalPopupOpen, setIsPaypalPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Check for payment status in URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const paymentStatus = urlParams.get("payment_status")

    if (paymentStatus === "success") {
      // Show success message
      alert("Payment successful! Thank you for your purchase.")

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    } else if (paymentStatus === "canceled") {
      // Show canceled message
      alert("Payment was canceled. No charges were made.")

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

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
      setIsPaymentPopupOpen(false)
    } else if (method === "paypal") {
      // Close the payment method selection popup and open PayPal popup
      setIsPaymentPopupOpen(false)
      setIsPaypalPopupOpen(true)
    }
    // Stripe is handled directly in the PaymentPopup component
  }

  // Handle PayPal success
  const handlePaypalSuccess = (details) => {
    setIsPaypalPopupOpen(false)
    
    // Show success message with more details
    const message = `
      Payment completed successfully!
      Transaction ID: ${details.id || "N/A"}
      Status: ${details.status || "Completed"}
      
      Thank you for your purchase. You will receive your login details via email shortly.
    `
    alert(message)
    
    // Optionally redirect to success page
    // window.location.href = "/payment/success"
  }

  // Handle PayPal cancel
  const handlePaypalCancel = () => {
    setIsPaypalPopupOpen(false)
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

      {/* Payment Method Selection Popup */}
      <PaymentPopup
        isOpen={isPaymentPopupOpen}
        onClose={() => setIsPaymentPopupOpen(false)}
        onPaymentSelect={handlePaymentSelect}
        product={selectedProduct}
      />

      {/* PayPal Payment Popup - Simplified */}
      {isPaypalPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative">
            <button
              onClick={() => setIsPaypalPopupOpen(false)}
              className="absolute -top-4 -right-4 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              ×
            </button>
            <PaypalPayment product={selectedProduct} onSuccess={handlePaypalSuccess} onCancel={handlePaypalCancel} />
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default HomePage
