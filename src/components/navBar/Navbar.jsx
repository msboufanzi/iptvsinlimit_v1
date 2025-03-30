"use client"

import { useState, useEffect } from "react"
import logo from "../../assets/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ scrollToPricing, scrollToServices, scrollToHowItWorks, scrollToFaq, scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Change the handleGetStarted function to scroll to pricing section
  const handleGetStarted = () => {
    scrollToPricing()
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-95 shadow-lg py-4" : "py-7"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="w-52 sm:w-40" />
        </div>

        {/* Menu button for small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} className="text-red-600" /> : <FaBars size={24} className="text-white" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-5 md:space-x-8 lg:space-x-10 font-bold text-white">
          <button onClick={scrollToPricing} className="hover:text-gray-300">
            Plans & Pricing
          </button>
          <button onClick={scrollToServices} className="hover:text-gray-300">
            Services
          </button>
          <button onClick={scrollToHowItWorks} className="hover:text-gray-300">
            How It Works
          </button>
          <button onClick={scrollToFaq} className="hover:text-gray-300">
            FAQ
          </button>
          <button onClick={scrollToContact} className="hover:text-orange-500">
            Contact us
          </button>
        </div>

        {/* Get Started Button */}
        <div className="hidden sm:flex">
          <button
            onClick={handleGetStarted}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="bg-black bg-opacity-95 pt-6 pb-6 flex flex-col w-full text-start">
          <button
            onClick={() => {
              scrollToPricing()
              toggleMenu()
            }}
            className="p-2 text-white hover:text-blue-600"
          >
            Plans & Pricing
          </button>
          <hr className="border-gray-800 my-0" />

          <button
            onClick={() => {
              scrollToServices()
              toggleMenu()
            }}
            className="p-2 text-white hover:text-blue-600"
          >
            Services
          </button>
          <hr className="border-gray-800 my-0" />

          <button
            onClick={() => {
              scrollToHowItWorks()
              toggleMenu()
            }}
            className="p-2 text-white hover:text-blue-600"
          >
            How It Works
          </button>
          <hr className="border-gray-800 my-0" />

          <button
            onClick={() => {
              scrollToFaq()
              toggleMenu()
            }}
            className="p-2 text-white hover:text-blue-600"
          >
            FAQ
          </button>
          <hr className="border-gray-800 my-0" />

          <button
            onClick={() => {
              scrollToContact()
              toggleMenu()
            }}
            className="p-2 text-white hover:text-blue-600"
          >
            Contact us
          </button>
          <hr className="border-gray-800 my-0" />

          <button
            onClick={() => {
              handleGetStarted()
              toggleMenu()
            }}
            className="p-2 text-blue-600 font-bold"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar

