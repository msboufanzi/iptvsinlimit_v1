"use client"

import { useState } from "react"
import { IoLogoWhatsapp } from "react-icons/io"
import PackageOffer from "./PackageOffer"
import { saveEmail } from "../../utils/emailStorage"

const PricingSection = ({ openPaymentPopup }) => {
  const [email, setEmail] = useState("")
  const [emailStatus, setEmailStatus] = useState(null)

  const handleEmailSubmit = async (e) => {
    e.preventDefault()

    const result = await saveEmail(email, "pricing-section")

    setEmailStatus(result)

    if (result.success) {
      // Clear the form
      setEmail("")

      // Clear the status message after 3 seconds
      setTimeout(() => {
        setEmailStatus(null)
      }, 3000)
    }
  }

  return (
    <div className="py-16" id="pricing-section">
      <div className="text-white flex flex-col items-center justify-center py-3 mt-8 gap-6">
        <div className="flex text-xl sm:text-4xl font-bold gap-3 flex-wrap justify-center text-center px-4">
          <h1 className="mt-3">Elige el Plan Perfecto Para</h1>
          <h1>
            <div className="bloc bg-blue-600 py-3 px-3 rounded-[10px]">Ti!</div>
          </h1>
        </div>
        <p className="font-serif text-center px-6 max-w-3xl">
          Selecciona tu Plan de Suscripción IPTV Premium y Desbloquea un Universo de Entretenimiento Español e
          Internacional.
        </p>
      </div>

      {/* Package Offers */}
      <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 mt-5 mb-9 gap-3 flex-wrap">
        <PackageOffer
          nbr_month={1}
          plan={"Plan Básico"}
          prix={"€12.99"}
          isVip={0}
          titel={"IPTV Premium – Suscripción de 1 Mes"}
          openPaymentPopup={openPaymentPopup}
          description="Acceso completo por 1 mes"
        />
        <PackageOffer
          nbr_month={3}
          plan={"Plan Estándar"}
          prix={"€39.99"}
          isVip={0}
          titel={"IPTV Premium – Suscripción de 3 Meses"}
          openPaymentPopup={openPaymentPopup}
          description="Acceso completo por 3 meses"
        />
        <PackageOffer
          nbr_month={6}
          plan={"Plan Premium"}
          prix={"€49.99"}
          isVip={0}
          titel={"IPTV Premium – Suscripción de 6 Meses"}
          openPaymentPopup={openPaymentPopup}
          description="Acceso completo por 6 meses"
        />
        <PackageOffer
          nbr_month={12}
          plan={"Plan Lujo"}
          prix={"€69.99"}
          isVip={1}
          titel={"Plan Lujo – Suscripción de 12 Meses"}
          openPaymentPopup={openPaymentPopup}
          description="Acceso completo por 12 meses"
        />
      </div>

      {/* Custom Service Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row text-5xl sm:text-6xl font-bold gap-2 text-white text-center">
          <div>¿Necesitas un</div>
          <div className="bg-blue-600 p-3 text-center rounded-[10px]">Plan Especial?</div>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-1/3 p-2 font-titel">
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Tu dirección de correo..."
              className="pt-5 pb-5 pr-4 pl-4 rounded-[8px] w-full text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 pt-4 pb-4 pr-4 pl-4 rounded-[8px] text-white text-2xl w-full mt-3 hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>

          {emailStatus && (
            <div className={`mt-2 text-sm ${emailStatus.success ? "text-green-500" : "text-red-500"}`}>
              {emailStatus.success ? "¡Gracias por suscribirte!" : "Error al enviar. Inténtalo de nuevo."}
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.open("https://wa.me/212681431448", "_blank")}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          <IoLogoWhatsapp className="text-2xl" />
          Contacta por WhatsApp para Planes Personalizados
        </button>
      </div>
    </div>
  )
}

export default PricingSection

