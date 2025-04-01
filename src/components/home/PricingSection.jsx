"use client"

import { useState } from "react"
import { IoLogoWhatsapp } from "react-icons/io"
import PackageOffer from "./PackageOffer"
import { saveEmail } from "../../utils/emailStorage"

const PricingSection = ({ openPaymentPopup }) => {
  const [email, setEmail] = useState("")
  const [emailStatus, setEmailStatus] = useState(null)

  const handleEmailSubmit = async (e) => {
    e.preventDefault()

    const result = await saveEmail(email, "pricing-section")
    
    setEmailStatus(result)

    if (result.success) {
      // Clear the form
      setEmail("")

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setEmailStatus(null)
      }, 3000)
    }
  }

  return (
    <div className="py-16" id="pricing-section">
      <div className="text-white flex flex-col items-center justify-center py-3 mt-8 gap-6">
        <div className="flex text-xl sm:text-4xl font-bold gap-3 flex-wrap justify-center text-center px-4">
          <h1 className="mt-3">Choose the Perfect Plan For</h1>
          <h1>
            <div className="bloc bg-blue-600 py-3 px-3 rounded-[10px]">You!</div>
          </h1>
        </div>
        <p className="font-serif text-center px-6 max-w-3xl">
          Select your Premium IPTV Subscription Plan and Unlock a Universe of Spanish and International Entertainment.
        </p>
      </div>

      {/* Package Offers */}
      <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 mt-5 mb-9 gap-3 flex-wrap">
        {/* Test Package */}
        <PackageOffer
          nbr_month="test"
          plan={"Test Plan"}
          prix={"€1.00"}
          isVip={0}
          titel={"Test IPTV – 24 Hours Access"}
          openPaymentPopup={openPaymentPopup}
          description="Try our service for 24 hours"
        />
        <PackageOffer
          nbr_month={1}
          plan={"Basic Plan"}
          prix={"€12.99"}
          isVip={0}
          titel={"Premium IPTV – 1 Month Subscription"}
          openPaymentPopup={openPaymentPopup}
          description="Full access for 1 month"
        />
        <PackageOffer
          nbr_month={3}
          plan={"Standard Plan"}
          prix={"€39.99"}
          isVip={0}
          titel={"Premium IPTV – 3 Months Subscription"}
          openPaymentPopup={openPaymentPopup}
          description="Full access for 3 months"
        />
        <PackageOffer
          nbr_month={6}
          plan={"Premium Plan"}
          prix={"€49.99"}
          isVip={0}
          titel={"Premium IPTV – 6 Months Subscription"}
          openPaymentPopup={openPaymentPopup}
          description="Full access for 6 months"
        />
        <PackageOffer
          nbr_month={12}
          plan={"Luxury Plan"}
          prix={"€69.99"}
          isVip={1}
          titel={"Luxury Plan – 12 Months Subscription"}
          openPaymentPopup={openPaymentPopup}
          description="Full access for 12 months"
        />
      </div>

      {/* Custom Service Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row text-5xl sm:text-6xl font-bold gap-2 text-white text-center">
          <div>Need a</div>
          <div className="bg-blue-600 p-3 text-center rounded-[10px]">Special Plan?</div>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-1/3 p-2 font-titel">
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Your email address..."
              className="pt-5 pb-5 pr-4 pl-4 rounded-[8px] w-full text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 pt-4 pb-4 pr-4 pl-4 rounded-[8px] text-white text-2xl w-full mt-3 hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>

          {emailStatus && (
            <div className={`mt-2 text-sm ${emailStatus.success ? "text-green-500" : "text-red-500"}`}>
              {emailStatus.message}
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.open("https://wa.me/34649324985", "_blank")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          <IoLogoWhatsapp className="text-2xl" />
          Contact via WhatsApp for Customized Plans
        </button>
      </div>
    </div>
  )
}

export default PricingSection
