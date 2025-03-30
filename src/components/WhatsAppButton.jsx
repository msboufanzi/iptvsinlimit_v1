"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle scroll events to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Don't trigger while animating
      if (isAnimating) return

      // Show button when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isAnimating])

  const handleClick = () => {
    // Animate the button when clicked
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)

    // Open WhatsApp
    window.open("https://wa.me/+34649324985", "_blank")
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <button
        onClick={handleClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-all duration-300 ${
          isAnimating ? "scale-110" : "hover:scale-105"
        }`}
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </button>

      {/* Subtle pulsing effect */}
      <span className="absolute inset-0 rounded-full bg-blue-600 animate-pulse opacity-60"></span>
    </div>
  )
}

export default WhatsAppButton

