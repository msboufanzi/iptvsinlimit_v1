"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"

const PaymentSuccess = () => {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if this is a redirect from Stripe
    const urlParams = new URLSearchParams(window.location.search)
    const isSuccess = urlParams.get("success") === "true"

    if (!isSuccess) {
      // If not coming from a successful payment, redirect to home
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
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-lg mb-6">Thank you for your purchase. Your IPTV subscription has been activated.</p>
        <p className="text-gray-400 mb-8">You will receive your login details via email shortly.</p>
        <p className="text-sm text-gray-500">Redirecting to home page in {countdown} seconds...</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default PaymentSuccess

