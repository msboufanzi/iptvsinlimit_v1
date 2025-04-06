"use client"

import { useState } from "react"
import { GoChevronDown, GoArrowUp } from "react-icons/go"

const Container = ({ question, reponse }) => {
  const [bgColor, setBgColor] = useState("bg-white")
  const [textColor, setTextColor] = useState("text-black")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setBgColor((prevColor) => (prevColor === "bg-white" ? "bg-blue-600" : "bg-white"))
    setTextColor((prevColor) => (prevColor === "text-black" ? "text-white" : "text-black"))
    setIsExpanded((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col">
      <div
        className={`${bgColor} ${textColor} font-titel font-bold text-xl p-6 ${isExpanded ? "rounded-tl-[10px] rounded-tr-[10px] sm:rounded-tl-[20px] sm:rounded-tr-[20px]" : "rounded-[10px] sm:rounded-[20px]"} m-3 flex justify-between cursor-pointer transition-all duration-300`}
        onClick={handleClick}
      >
        {question}
        {isExpanded ? (
          <GoArrowUp className="text-white text-3xl" />
        ) : (
          <GoChevronDown className="text-blue-600 text-3xl" />
        )}
      </div>
      {isExpanded ? (
        <div className="text-white text-xl font-bold ml-16 mt-8 mb-8 mr-16 animate-fadeIn">{reponse}</div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

const Question = () => {
  return (
    <div className="mr-0 py-16" id="faq-section">
      <div className="ml-5 sm:ml-36 flex items-start justify-start gap-3 mt-10 text-blue-600">
        <div className="text-xl">PREGUNTAS / RESPUESTAS</div>
        <div className="bg-blue-600 w-20 h-0.5 mt-4"></div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center text-white text-5xl font-bold gap-3 pt-16">
        <h1>Preguntas</h1>
        <h1 className="bg-blue-600 p-3 rounded-[15px]">Frecuentes</h1>
      </div>
      <div className="sm:mr-48 sm:ml-48 mt-16">
        {Container({
          question: "¿Hay algún cargo adicional?",
          reponse: "Todos los precios están incluidos en tu suscripción, sin cargos ocultos.",
        })}
        {Container({
          question: "¿Qué velocidad de internet necesito para IPTV?",
          reponse:
            "Se recomienda una velocidad mínima de internet de 10Mbps para la transmisión estándar, pero si deseas transmitir contenido en 4K, necesitarás una velocidad de internet de 25 Mbps.",
        })}
        {Container({
          question: "¿Cuántos dispositivos puedo usar a la vez con mi suscripción?",
          reponse:
            "La suscripción estándar en StreamTVUniverse te permite ver en hasta 1 dispositivo simultáneamente. Para más conexiones IPTV, consulta nuestro Servicio de Conexiones Múltiples en la página de Precios o contáctanos por WhatsApp para planes premium disponibles.",
        })}
        {Container({
          question: "¿Qué dispositivos puedo usar para IPTV?",
          reponse:
            "Nuestro servicio IPTV es compatible con Smart TVs, dispositivos de streaming (Amazon Firestick, Roku, Apple TV), computadoras, tablets, Android, smartphones y más...",
        })}
        {Container({
          question: "¿Puedo usar una VPN con su servicio IPTV?",
          reponse:
            "Sí, puedes utilizar una VPN con el servicio IPTV que proporcionamos para mayor privacidad y seguridad.",
        })}
        {Container({
          question: "¿Dónde puedo ver el Servicio IPTV?",
          reponse:
            "Puedes disfrutar de nuestro Servicio de Suscripción IPTV en EE.UU., Reino Unido, Australia, Canadá, Francia, Bélgica, Suiza, España, Portugal, Italia, Alemania, Países Bajos, regiones árabes, América Latina, Turquía y más.",
        })}
        {Container({
          question: "¿Puedo cancelar mi suscripción en cualquier momento?",
          reponse:
            "Sí, puedes cancelar fácilmente el plan de suscripción en cualquier momento sin ningún cargo adicional por cancelación. Simplemente sigue las instrucciones de cancelación en el sitio web o contacta al equipo de soporte para obtener ayuda.",
        })}
      </div>
    </div>
  )
}

export default Question

