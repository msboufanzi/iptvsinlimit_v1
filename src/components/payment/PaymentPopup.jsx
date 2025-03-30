"use client"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaCreditCard } from "react-icons/fa"
import { SiPaypal } from "react-icons/si"

const PaymentPopup = ({ isOpen, onClose, onPaymentSelect, product }) => {
  if (!isOpen) return null

  const handlePaypalPayment = () => {
    onPaymentSelect("paypal")
  }

  const handleCreditCardPayment = () => {
    onPaymentSelect("credit")
  }

  const handleWhatsAppContact = () => {
    onPaymentSelect("whatsapp")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-blue-600">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Select Payment Method</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handlePaypalPayment}
            className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
          >
            <SiPaypal className="text-2xl" />
            Pay with PayPal
          </button>

          <button
            onClick={handleCreditCardPayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
          >
            <FaCreditCard className="text-2xl" />
            Pay with Credit Card
          </button>

          <button
            onClick={handleWhatsAppContact}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
          >
            <IoLogoWhatsapp className="text-2xl" />
            Contact via WhatsApp
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-4 text-center">For assistance, contact us at +34 649 324 985</p>
      </div>
    </div>
  )
}

export default PaymentPopup

