"use client"
import { HiArrowUpCircle } from "react-icons/hi2"
import services from "../../assets/services.webp"
import Service from "./Service"

const ServiceSection = ({ openPaymentPopup }) => {
  const handleActivateClick = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-40 gap-8">
      <div className="text-white font-bold flex flex-col items-center justify-center text-center px-4">
        <div className="text-xl sm:text-3xl md:text-5xl flex flex-col sm:flex-row gap-2 flex-wrap justify-center">
          <h1>We are proud to offer</h1>
          <div className="bloc bg-blue-600 py-1 px-2 sm:py-3 sm:px-3 rounded-[10px] inline-block">The best IPTV</div>
          <h1>Subscription</h1>
        </div>
        <div className="text-xl sm:text-3xl md:text-5xl mt-2">Service Available</div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="bg-gray-500 sm:bg-white w-16 h-0.5"></div>
        <div className="text-white">OUR SERVICES</div>
        <div className="bg-gray-500 sm:bg-white w-16 h-0.5"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-5 text-center sm:text-start">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <Service
            number="01"
            title="Antifreeze Technology"
            description="Watching TV without freezing is a dream for all IPTV users. With our frost-free IPTV server, it becomes reality."
          />
          <Service
            number="02"
            title="Premium Content"
            description="Access premium channels, sports events, and exclusive content from around the world in high definition quality."
          />
        </div>
        <div>
          <img alt="Services" src={services || "/placeholder.svg"} className="rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <Service
            number="03"
            title="Multi-Device Support"
            description="Watch your favorite content on any device - Smart TVs, phones, tablets, computers, and streaming boxes."
          />
          <Service
            number="04"
            title="24/7 Customer Support"
            description="Our dedicated support team is available around the clock to assist you with any questions or issues."
          />
        </div>
      </div>
      <div className="relative group mt-5">
        <button
          onClick={handleActivateClick}
          className="bg-blue-600 rounded-[20px] sm:rounded-[40px] p-2 sm:p-3 text-white text-sm sm:text-base flex items-center justify-between hover:bg-blue-700 transition-colors"
        >
          Activate Your IPTV Plan
          <HiArrowUpCircle className="text-white text-2xl sm:text-3xl ml-2 sm:ml-3" />
        </button>
      </div>
    </div>
  )
}

export default ServiceSection

