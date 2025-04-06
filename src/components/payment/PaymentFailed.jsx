"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaTimesCircle } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

const PaymentFailed = () => {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("I had an issue with my payment. Can you help me complete my purchase?")
    window.location.href = `https://wa.me/212681431448?text=${message}`
  }

  useEffect(() => {
    // Check if this is a redirect from Stripe
    const urlParams = new URLSearchParams(window.location.search)
    const isCanceled = urlParams.get("canceled") === "true"

    if (!isCanceled) {
      // If not coming from a canceled payment, redirect to home
      navigate("/")
      return
    }

    // Start countdown to redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl max-w-md w-full text-center">
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Payment Unsuccessful</h1>
        <p className="text-lg mb-6">Your payment was not completed. No charges were made to your account.</p>
        <p className="text-gray-400 mb-8">If you encountered any issues, please contact our support team.</p>
        <p className="text-sm text-gray-500">Redirecting to home page in {countdown} seconds...</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </button>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <IoLogoWhatsapp className="text-xl" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailed

