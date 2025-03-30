"use client"

import { useState } from "react"
import back3 from "../../assets/back3.webp"
import logo from "../../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { GoChevronRight, GoChevronDown } from "react-icons/go"

// Update the FooterSection component to handle multiple open sections better
const FooterSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col items-center sm:items-start sm:justify-start mt-3 gap-5 w-full sm:w-auto">
      <div className="flex gap-3 cursor-pointer items-center" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="text-white font-bold">{title}</div>
        <div className="bg-blue-600 w-12 h-0.5 mt-0"></div>
        {isExpanded ? (
          <GoChevronDown className="text-blue-600 text-xl" />
        ) : (
          <GoChevronRight className="text-blue-600 text-xl" />
        )}
      </div>
      <div className={`flex flex-col gap-3 w-full ${isExpanded ? "block" : "hidden sm:flex"}`}>{children}</div>
    </div>
  )
}

// Update the FooterLink component to handle info display better
const FooterLink = ({ text, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="flex gap-5 cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => setShowInfo(!showInfo)}
      >
        <div>
          <GoChevronRight className="text-blue-600 text-xl mt-1" />
        </div>
        <div className="text-white">{text}</div>
      </div>

      {showInfo && <div className="bg-gray-800 p-3 rounded-lg ml-8 text-sm text-white max-w-xs">{info}</div>}
    </div>
  )
}

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)

  const handleEmailSubscribe = (e) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setSubscriptionStatus({
        success: false,
        message: "Please enter a valid email address",
      })
      return
    }

    // In a real app, you would send this to your server
    console.log("Email subscribed:", email)

    // Simulate successful subscription
    setSubscriptionStatus({
      success: true,
      message: "Thank you for subscribing!",
    })

    // Clear the form
    setEmail("")

    // Clear the status message after 3 seconds
    setTimeout(() => {
      setSubscriptionStatus(null)
    }, 3000)
  }

  return (
    <div className="">
      <div className="relative bg-cover bg-center w-full" style={{ backgroundImage: `url(${back3})` }}>
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="relative z-10 flex flex-col pt-5 pr-5 pl-5 sm:pr-20 sm:pl-20 gap-5 mr text-[12px] sm:text-xl">
          <div className="w-full h-0.5 bg-white"></div>
          {/* Update the main footer layout to be more responsive */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            {/* Logo and contact section */}
            <div className="flex flex-col items-center sm:items-start justify-between">
              <div className="">
                <img alt="logo" src={logo || "/placeholder.svg"} className="w-64" />
              </div>
              <div className="text-white pt-3">You can contact us:</div>
              <div className="flex gap-2 sm:gap-5">
                <div>
                  <FaWhatsapp
                    className="text-blue-600 mt-1 cursor-pointer"
                    onClick={() => window.open("https://wa.me/212681431448", "_blank")}
                  />
                </div>
                <div className="text-white">+34 649 324 985</div>
              </div>
              <div className="flex gap-5">
                <div>
                  <MdEmail
                    className="text-blue-600 mt-1 cursor-pointer"
                    onClick={() => (window.location.href = "mailto:support@streamtvuniverse.com")}
                  />
                </div>
                <div className="text-white">support@tvsinlimites.com</div>
              </div>
            </div>

            {/* Support section */}
            <div className="w-full sm:w-auto">
              <FooterSection title="SUPPORT">
                <FooterLink
                  text="Contact"
                  info="For any inquiries, please contact us via WhatsApp at +212681431448 or email at support@tvsinlimites.com"
                />
                <FooterLink
                  text="FAQ"
                  info="Find answers to commonly asked questions about our IPTV service in our FAQ section."
                />
                <FooterLink
                  text="About Us"
                  info="TV Sin Limites is a premium IPTV service provider offering over 22,000 channels and 150,000 VODs in HD, FHD, and 4K quality."
                />
                <FooterLink
                  text="BLOG"
                  info="Our blog features the latest news, updates, and guides about our IPTV service and the industry."
                />
              </FooterSection>
            </div>

            {/* Useful Links section */}
            <div className="w-full sm:w-auto">
              <FooterSection title="Useful Links">
                <FooterLink
                  text="Plans & Prices"
                  info="Explore our flexible subscription plans starting from just $12.99/month."
                />
                <FooterLink
                  text="Privacy Policy"
                  info="We respect your privacy and are committed to protecting your personal data. Our Privacy Policy outlines how we collect, use, and safeguard your information."
                />
                <FooterLink
                  text="Terms Of Service"
                  info="By using our service, you agree to our Terms of Service, which outline the rules, guidelines, and restrictions for using our IPTV service."
                />
                <FooterLink
                  text="Refund Policy"
                  info="We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact our support team to request a refund."
                />
              </FooterSection>
            </div>

            {/* Newsletter section */}
            <div className="flex flex-col items-center sm:items-start sm:justify-start gap-5 mt-3 w-full sm:w-auto">
              <div className="flex gap-3">
                <div className="text-white font-bold">Newsletter Sign Up</div>
                <div className="bg-blue-600 w-12 h-0.5 mt-2 sm:mt-4"></div>
              </div>
              <div className="text-white">Sign Up To Get Exclusive Offers!</div>
              <form onSubmit={handleEmailSubscribe} className="flex flex-col gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-800 pt-3 pb-3 sm:pt-5 sm:pb-5 pr-4 pl-4 rounded-[8px] text-white hover:bg-blue-700 transition-colors"
                >
                  SUBSCRIBE NOW
                </button>
              </form>

              {subscriptionStatus && (
                <div className={`mt-2 text-sm ${subscriptionStatus.success ? "text-green-500" : "text-red-500"}`}>
                  {subscriptionStatus.message}
                </div>
              )}
            </div>
          </div>

          <div className="w-full h-0.5 bg-white"></div>
          <div className="flex items-center justify-center mt-6 mb-10 sm:text-xl gap-2">
            <div className="text-white">Copyright © 2024 IPTV, All rights reserved. Powered by</div>
            <div>
              <a className="text-blue-600">TV Sin Limites</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
