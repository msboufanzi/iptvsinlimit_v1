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
          <h1>Nos enorgullece ofrecer</h1>
          <div className="bloc bg-blue-600 py-1 px-2 sm:py-3 sm:px-3 rounded-[10px] inline-block">El mejor IPTV</div>
          <h1>Suscripción</h1>
        </div>
        <div className="text-xl sm:text-3xl md:text-5xl mt-2">Servicio Disponible</div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="bg-gray-500 sm:bg-white w-16 h-0.5"></div>
        <div className="text-white">NUESTROS SERVICIOS</div>
        <div className="bg-gray-500 sm:bg-white w-16 h-0.5"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-5 text-center sm:text-start">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <Service
            number="01"
            title="Tecnología Anti-Congelamiento"
            description="Ver TV sin congelamiento es un sueño para todos los usuarios de IPTV. Con nuestro servidor IPTV libre de congelamiento, se hace realidad."
          />
          <Service
            number="02"
            title="Contenido Premium"
            description="Accede a canales premium, eventos deportivos y contenido exclusivo de todo el mundo en alta definición."
          />
        </div>
        <div>
          <img alt="Servicios" src={services || "/placeholder.svg"} className="rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <Service
            number="03"
            title="Soporte Multi-Dispositivo"
            description="Mira tu contenido favorito en cualquier dispositivo - Smart TVs, teléfonos, tablets, computadoras y cajas de streaming."
          />
          <Service
            number="04"
            title="Soporte al Cliente 24/7"
            description="Nuestro equipo de soporte dedicado está disponible las 24 horas para ayudarte con cualquier pregunta o problema."
          />
        </div>
      </div>
      <div className="relative group mt-5">
        <button
          onClick={handleActivateClick}
          className="bg-blue-600 rounded-[20px] sm:rounded-[40px] p-2 sm:p-3 text-white text-sm sm:text-base flex items-center justify-between hover:bg-blue-700 transition-colors"
        >
          Activa Tu Plan IPTV
          <HiArrowUpCircle className="text-white text-2xl sm:text-3xl ml-2 sm:ml-3" />
        </button>
      </div>
    </div>
  )
}

export default ServiceSection

