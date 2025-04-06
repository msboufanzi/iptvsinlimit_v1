"use client"
import { VscPassFilled } from "react-icons/vsc"
import payments from "../../assets/payments.png"

// Function to create a styled element
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

const PackageOffer = ({ nbr_month, plan, prix, isVip, titel, openPaymentPopup, description }) => {
  const handleBuyNow = () => {
    openPaymentPopup({
      title: titel,
      price: prix,
      months: nbr_month.toString(),
      plan: plan,
      description: description,
    })
  }

  return (
    <div
      className={`${isVip === 0 ? "bg-white pt-11 pb-10" : "bg-blue-600 text-white"} rounded-[20px] pr-10 pl-10
    w-full flex flex-col gap-5 justify-center items-center pb-5 pt-5 font-titel`}
    >
      {/* Conditional rendering for "Most Popular" based on isVip */}
      {isVip === 1 ? (
        <h2 className="mt-5 text-xl">Más Popular</h2>
      ) : (
        <p className="pt-12"></p> // Empty <p> tag if not VIP
      )}

      <h1 className={`text-3xl font-bold ${isVip === 1 ? "text-white" : "text-blue-600"}`}>
        {nbr_month === "test" ? "24 HORAS" : `${nbr_month} ${nbr_month === 1 ? "MES" : "MESES"}`}
      </h1>
      <h2 className={`text-2xl ${isVip === 1 ? "text-white" : "text-blue-600"}`}>{plan}</h2>
      <h1 className={`font-bold text-7xl ${isVip === 1 ? "text-white" : "text-blue-600"}`}>{prix}</h1>
      <h3 className={`text-2xl ${isVip === 1 ? "text-white" : "text-gray-700"}`}>
        {description || "RÁPIDO Y ESTABLE"}
      </h3>
      <button
        onClick={handleBuyNow}
        className={`rounded-[10px] pt-5 pb-5 pl-5 pr-5 mb-6 w-full ${
          isVip === 0 ? "text-white bg-blue-600" : "text-blue-600 bg-white"
        } hover:bg-blue-900 transition-all duration-300`}
      >
        COMPRAR AHORA
      </button>

      {/* Call to offersText */}
      {offersText({ text: "+22,000 Canales de TV", isVip })}
      {offersText({ text: "Canales Premium y Eventos PPV", isVip })}
      {offersText({ text: "Calidad 4K / Ultra HD", isVip })}
      {offersText({ text: "99.9% Tiempo de Actividad", isVip })}
      {offersText({ text: "Tecnología Anti-Congelamiento", isVip })}
      {offersText({ text: "Compatible con Todos los Dispositivos", isVip })}
      {offersText({ text: "Asistencia Técnica 24/7", isVip })}
      {offersText({ text: "Activación Instantánea", isVip })}

      <img alt="Métodos de Pago" src={payments || "/placeholder.svg"} className="mt-4" />
    </div>
  )
}

export default PackageOffer

