"use client"
import { VscPassFilled } from "react-icons/vsc"
import payments from "../../assets/payments.png"

// Fonction pour créer un élément stylisé
const offersText = ({ text, isVip }) => {
  return (
    <div className="flex w-full justify-start items-start gap-3">
      <div>
        <VscPassFilled className={`${isVip === 0 ? "text-blue-600" : "text-white"} mt-2 text-xl`} />
      </div>
      <div className={`${isVip === 1 ? "text-white" : "text-gray-500"} text-xl`}>{text}</div>
    </div>
  )
}

const PackageOffer = ({ nbr_month, plan, prix, isVip, titel, openPaymentPopup }) => {
  const handleBuyNow = () => {
    openPaymentPopup({ title: titel, price: prix, months: nbr_month })
  }

  return (
    <div
      className={`${isVip === 0 ? "bg-white pt-11 pb-10" : "bg-blue-600 text-white"} rounded-[20px] pr-10 pl-10
    w-full flex flex-col gap-5 justify-center items-center pb-5 pt-5 font-titel`}
    >
      {/* Conditional rendering for "Most Popular" based on isVip */}
      {isVip === 1 ? (
        <h2 className="mt-5 text-xl">Most Popular</h2>
      ) : (
        <p className="pt-12"></p> // Empty <p> tag if not VIP
      )}

      <h1 className="text-3xl font-bold">
        {nbr_month} {nbr_month === 1 ? "MONTH" : "MONTHS"}
      </h1>
      <h2 className="text-blue-600 text-2xl">{plan}</h2>
      <h1 className={`font-bold text-7xl ${isVip === 0 ? "text-blue-600" : "text-white"}`}>{prix}</h1>
      <h3 className="text-2xl">FAST & STABLE</h3>
      <button
        onClick={handleBuyNow}
        className={`rounded-[10px] pt-5 pb-5 pl-5 pr-5 mb-6 w-full ${
          isVip === 0 ? "text-white bg-blue-600" : "text-blue-600 bg-white"
        } hover:bg-blue-900 transition-all duration-300`}
      >
        BUY NOW
      </button>

      {/* Call to offersText */}
      {offersText({ text: "+22,000 TV Channels", isVip })}
      {offersText({ text: "Premium Channels & PPV Events", isVip })}
      {offersText({ text: "4K / Ultra HD Quality", isVip })}
      {offersText({ text: "99.9% Server Uptime", isVip })}
      {offersText({ text: "Anti-Freeze Technology", isVip })}
      {offersText({ text: "All Devices are Supported", isVip })}
      {offersText({ text: "24/7 Technical Assistance", isVip })}
      {offersText({ text: "Instant Activation", isVip })}

      <img alt="Methods Payments" src={payments || "/placeholder.svg"} className="mt-4" />
    </div>
  )
}

export default PackageOffer

