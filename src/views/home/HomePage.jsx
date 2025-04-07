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
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for payment status in URL on component mount
  useEffect(() => {
    // Clear any stuck payment processing state
    sessionStorage.removeItem('paymentProcessing')
    
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get("success") === "true"
    const canceled = urlParams.get("canceled") === "true"
    const paymentId = urlParams.get("paymentId")
    const token = urlParams.get("token")

    if (success || paymentId || token) {
      // Show success message
      setPaymentStatus({
        success: true,
        message: "Payment successful! Thank you for your purchase."
      })
      
      // Make sure popups are closed
      setIsPaymentPopupOpen(false)
      setIsPaypalPopupOpen(false)

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    } else if (canceled) {
      // Show canceled message
      setPaymentStatus({
        success: false,
        message: "Payment was canceled. No charges were made."
      })
      
      // Make sure popups are closed
      setIsPaymentPopupOpen(false)
      setIsPaypalPopupOpen(false)

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
    
    // Add event listener for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
  
  // Handle page visibility changes (when user returns from payment gateway)
  const handleVisibilityChange = () => {
    if (!document.hidden) {
      // User has returned to the page
      const wasProcessing = sessionStorage.getItem('paymentProcessing')
      
      if (wasProcessing) {
        // Clear the processing state
        sessionStorage.removeItem('paymentProcessing')
        
        // Close any open popups
        setIsPaymentPopupOpen(false)
        setIsPaypalPopupOpen(false)
      }
    }
  }

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
        `https://wa.me/212681431448?text=I'm interested in purchasing ${selectedProduct?.title || "your IPTV subscription"}`,
        "_blank",
      )
      setIsPaymentPopupOpen(false)
    } else if (method === "paypal") {
      // Close the payment method selection popup and open PayPal popup
      setIsPaymentPopupOpen(false)
      setIsPaypalPopupOpen(true)
    } else if (method === "stripe") {
      // Stripe is handled in the PaymentPopup component
      // We don't need to do anything here
    }
  }

  // Handle PayPal success
  const handlePaypalSuccess = (details) => {
    setIsPaypalPopupOpen(false)
    sessionStorage.removeItem('paymentProcessing')

    // Show success message with more details
    setPaymentStatus({
      success: true,
      message: `Payment completed successfully! Transaction ID: ${details.id || "N/A"}. You will receive your login details via email shortly.`,
    })
  }

  // Handle PayPal cancel
  const handlePaypalCancel = () => {
    setIsPaypalPopupOpen(false)
    sessionStorage.removeItem('paymentProcessing')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    
      {/* Navbar with scroll functions */}
      <Navbar
        scrollToPricing={() => scrollToSection(pricingRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToHowItWorks={() => scrollToSection(howItWorksRef)}
        scrollToFaq={() => scrollToSection(faqRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Payment Status Alert */}
      {paymentStatus && (
        <div
          className={`fixed top-20 left-0 right-0 z-50 mx-auto max-w-md p-4 rounded-lg ${
            paymentStatus.success ? "bg-green-600" : "bg-red-600"
          } text-white text-center animate-fadeIn`}
        >
          {paymentStatus.message}
          <button
            className="ml-4 bg-white bg-opacity-20 px-2 py-1 rounded-md hover:bg-opacity-30"
            onClick={() => setPaymentStatus(null)}
          >
            ×
          </button>
        </div>
      )}

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

        {/* Bizum Information Section */}
        <div className="bg-gray-800 text-white py-4 px-6 text-center">
          <p>
            ¿Sabías que también aceptamos pagos a través de <strong>Bizum</strong>? 
            <a
              href="https://wa.me/212681431448?text=Hola, estoy interesado en pagar a través de Bizum."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Contáctanos en <strong>WhatsApp</strong>
            </a> para más información.
          </p>
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
              onClick={() => {
                setIsPaypalPopupOpen(false)
                sessionStorage.removeItem('paymentProcessing')
              }}
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
