"use client"

import { useState } from "react"
import back3 from "../../assets/back3.webp"
import logo from "../../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { GoChevronRight, GoChevronDown } from "react-icons/go"
import { saveEmail } from "../../utils/emailStorage"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleEmailSubscribe = async (e) => {
    e.preventDefault()

    const result = await saveEmail(email, "footer-newsletter")

    setSubscriptionStatus(result)

    if (result.success) {
      // Clear the form
      setEmail("")

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus(null)
      }, 3000)
    }
  }

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen)
  }

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
  }

  return (
    <footer className="bg-cover bg-center text-white py-12 relative" style={{ backgroundImage: `url(${back3})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column - Logo and Description */}
          <div>
            <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12 mb-4" />
            <p className="text-sm">
              Your trusted partner in innovative solutions. We provide cutting-edge technology and services to help your
              business thrive.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                <FaWhatsapp size={24} />
              </a>
              <a href="mailto:info@example.com" className="text-gray-300 hover:text-gray-400">
                <MdEmail size={24} />
              </a>
            </div>
          </div>

          {/* Second Column - Company */}
          <div>
            <div className="flex justify-between items-center mb-2 md:hidden" onClick={toggleCompany}>
              <h3 className="text-lg font-semibold">Company</h3>
              {isCompanyOpen ? <GoChevronDown /> : <GoChevronRight />}
            </div>
            <h3 className="text-lg font-semibold hidden md:block">Company</h3>
            <ul className={`mt-2 space-y-1 ${isCompanyOpen ? "" : "hidden md:block"}`}>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Resources */}
          <div>
            <div className="flex justify-between items-center mb-2 md:hidden" onClick={toggleResources}>
              <h3 className="text-lg font-semibold">Resources</h3>
              {isResourcesOpen ? <GoChevronDown /> : <GoChevronRight />}
            </div>
            <h3 className="text-lg font-semibold hidden md:block">Resources</h3>
            <ul className={`mt-2 space-y-1 ${isResourcesOpen ? "" : "hidden md:block"}`}>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm mt-2">Subscribe to our newsletter to stay updated on the latest news and offers.</p>
            <form className="mt-4" onSubmit={handleEmailSubscribe}>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none text-sm w-full md:w-auto"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r text-sm">
                Subscribe
              </button>
            </form>
            {subscriptionStatus && (
              <p className={`mt-2 text-sm ${subscriptionStatus.success ? "text-green-500" : "text-red-500"}`}>
                {subscriptionStatus.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

