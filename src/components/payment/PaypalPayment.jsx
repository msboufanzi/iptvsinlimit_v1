"use client"
import { useState, useEffect } from "react"
import { FaPaypal } from "react-icons/fa"
import { createPayPalOrder, getPayPalEnvironment } from "../../api/paypal"

const PaypalPayment = ({ product, onSuccess, onCancel }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  // Clear processing state when component unmounts
  useEffect(() => {
    return () => {
      sessionStorage.removeItem('paymentProcessing')
    }
  }, [])

  // Handle direct PayPal checkout
  const handlePayPalCheckout = async () => {
    try {
      setIsProcessing(true)
      setError(null)

      console.log("Starting PayPal checkout for:", product)

      // Create order via our API
      const order = await createPayPalOrder(product)

      // Find the approval URL
      const approvalLink = order.links.find((link) => link.rel === "approve")

      if (approvalLink) {
        console.log("Redirecting to PayPal approval page:", approvalLink.href)
        // Redirect to PayPal approval page
        window.location.href = approvalLink.href
      } else {
        throw new Error("No approval link found in PayPal response")
      }
    } catch (err) {
      console.error("PayPal checkout error:", err)
      setError("Failed to connect to PayPal. Please try another payment method.")
      setIsProcessing(false)
      sessionStorage.removeItem('paymentProcessing')
    }
  }

  // Handle fallback direct checkout
  const handleDirectCheckout = () => {
    try {
      // Extract price from product
      const price = product?.price?.replace(/[^0-9.]/g, "") || "0.00"
      const description = encodeURIComponent(product?.title || "IPTV Subscription")

      // Create a basic PayPal checkout URL - using sandbox
      const paypalEnvironment = getPayPalEnvironment()
      const domain = paypalEnvironment === "sandbox" ? "www.sandbox.paypal.com" : "www.paypal.com"

      const paypalCheckoutUrl = `https://${domain}/cgi-bin/webscr?cmd=_xclick&business=sb-43rqz28379099@business.example.com&item_name=${description}&amount=${price}&currency_code=EUR&return=${encodeURIComponent(window.location.origin + "/payment/success?success=true")}&cancel_return=${encodeURIComponent(window.location.origin + "/payment/failed?canceled=true")}`

      console.log("Redirecting to direct PayPal checkout:", paypalCheckoutUrl)

      // Redirect to PayPal
      window.location.href = paypalCheckoutUrl
    } catch (err) {
      console.error("Error redirecting to PayPal:", err)
      setError("Failed to redirect to PayPal. Please try another payment method.")
      sessionStorage.removeItem('paymentProcessing')
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full">
      <div className="flex items-center justify-center mb-6">
        <FaPaypal className="text-[#0070ba] text-3xl mr-2" />
        <h2 className="text-2xl font-bold text-white">PayPal Checkout</h2>
      </div>

      {product && (
        <div className="mb-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-white font-bold">{product.title || "IPTV Subscription"}</h3>
          <p className="text-blue-400 text-xl">{product.price || "$0.00"}</p>
        </div>
      )}

      {/* Single PayPal checkout button */}
      <button
        onClick={handlePayPalCheckout}
        disabled={isProcessing}
        className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-4 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50 text-lg font-medium"
      >
        {isProcessing ? (
          <span className="flex items-center gap-2">
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            Processing...
          </span>
        ) : (
          <>
            <FaPaypal className="text-2xl" />
            Checkout with PayPal
          </>
        )}
      </button>

      {/* Error message */}
      {error && (
        <div className="text-red-500 text-center py-4 mt-4 border border-red-800 bg-red-900 bg-opacity-30 rounded-lg">
          {error}
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleDirectCheckout}
              className="flex-1 bg-[#0070ba] hover:bg-[#005ea6] text-white py-2 px-4 rounded-lg transition-colors"
            >
              Try Direct PayPal
            </button>
            <button
              onClick={() => {
                onCancel()
                sessionStorage.removeItem('paymentProcessing')
              }}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">Secure payment processing by PayPal</p>
        <p className="text-gray-500 text-xs mt-2">You'll be redirected to PayPal to complete your payment</p>
      </div>
    </div>
  )
}

export default PaypalPayment
