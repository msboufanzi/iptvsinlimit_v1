"use client"

import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  // Create the WhatsApp URL with the phone number
  const whatsappNumber = "212681431448"
  const message = "Hello, I'm interested in your IPTV service. Can you provide more information?"
  const encodedMessage = encodeURIComponent(message)

  // Direct WhatsApp URL that works on both mobile and web
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Pure HTML approach with no JavaScript */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Pulsing effect */}
      <div
        className="absolute inset-0 rounded-full bg-green-500 opacity-60"
        style={{ animation: "pulse 2s infinite", zIndex: -1 }}
      ></div>

      {/* Inline animation for maximum compatibility */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default WhatsAppButton

