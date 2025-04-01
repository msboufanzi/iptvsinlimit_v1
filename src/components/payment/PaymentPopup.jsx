"use client"
import { IoLogoWhatsapp } from "react-icons/io"
import { SiPaypal } from "react-icons/si"
import { FaStripe } from "react-icons/fa"
import { useState } from "react"

const PaymentPopup = ({ isOpen, onClose, onPaymentSelect, product }) => {
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isOpen) return null

  // Stripe payment links for different subscription plans
  const stripeLinks = {
    test: "https://buy.stripe.com/00g7vi9Ilebxf9mdQY", // Test - €1.00 EUR
    1: "https://buy.stripe.com/6oE4j6cUxd7tf9m7sw", // 1 Month - €12.99 EUR
    3: "https://buy.stripe.com/14k9Dq3jXd7t7GU7sx", // 3 Months - €39.99 EUR
    6: "https://buy.stripe.com/aEUeXK07L0kHgdq7sy", // 6 Months - €49.99 EUR
    12: "https://buy.stripe.com/6oEcPC5s54AX2mAdQX", // 12 Months - €69.99 EUR
  }

  const handleStripePayment = () => {
    setIsProcessing(true)

    // Notify parent component about processing state
    onPaymentSelect("stripe")

    // Get the appropriate Stripe link based on the product's months
    const months = product?.months || "1"
    const stripeLink = stripeLinks[months]

    if (stripeLink) {
      // Add a return URL parameter to redirect back to the site after payment
      const returnUrl = encodeURIComponent(window.location.origin + "/payment/success?success=true")
      const cancelUrl = encodeURIComponent(window.location.origin + "/payment/failed?canceled=true")
      const linkWithReturn = `${stripeLink}?client_reference_id=${returnUrl}&cancel_url=${cancelUrl}`

      // Redirect to Stripe payment page
      window.location.href = linkWithReturn
    } else {
      console.error("No Stripe link found for this product")
      setIsProcessing(false)
    }
  }

  const handlePaypalPayment = () => {
    setIsProcessing(true)
    onPaymentSelect("paypal")
  }

  const handleWhatsAppContact = () => {
    onPaymentSelect("whatsapp")
  }

  // Add a clean close function that resets processing state
  const handleClose = () => {
    setIsProcessing(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-blue-600">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Select Payment Method</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white text-xl">
            ×
          </button>
        </div>

        {product && (
          <div className="mb-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-white font-bold">{product.title || "IPTV Subscription"}</h3>
            <p className="text-blue-400 text-xl">{product.price || "$0.00"}</p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleStripePayment}
            disabled={isProcessing}
            className="w-full bg-[#6772e5] hover:bg-[#5469d4] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                <FaStripe className="text-2xl" />
                Pay with Stripe
              </>
            )}
          </button>

          <button
            onClick={handlePaypalPayment}
            disabled={isProcessing}
            className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
          >
            <SiPaypal className="text-2xl" />
            Pay with PayPal
          </button>

          <button
            onClick={handleWhatsAppContact}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
          >
            <IoLogoWhatsapp className="text-2xl" />
            Contact via WhatsApp
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Secure payment processing</p>
          <div className="flex justify-center mt-2 space-x-2">
            <img src="/visa.svg" alt="Visa" className="h-6" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/amex.svg" alt="American Express" className="h-6" />
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-4 text-center">For assistance, contact us at +34 649 324 985</p>
      </div>
    </div>
  )
}

export default PaymentPopup

