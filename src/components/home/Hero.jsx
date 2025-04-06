"use client"
import { GrFormNextLink } from "react-icons/gr"
import back1 from "../../assets/back1.jpg"

const Hero = ({ scrollToPricing }) => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back1})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white gap-4 sm:gap-8 h-full pt-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            El Mejor Servicio
            <div className="flex gap-5 justify-center">
              <div>de Suscripción</div>
              <div className="block text-blue-600">IPTV</div>
            </div>
            Disponible
          </h1>
        </div>

        <div className="flex items-center gap-5 text-xl sm:text-2xl md:text-3xl">
          {/* Left Line */}
          <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-blue-500 mt-2"></div>

          <div>TV Sin Límites</div>

          {/* Right Line */}
          <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-blue-500 mt-2"></div>
        </div>

        <div className="text-center max-w-2xl text-base mr-8 ml-8">
          <p className="leading-relaxed">
            En StreamTVUniverse, ofrecemos el mejor servicio de suscripción IPTV, proporcionando acceso a más de 22,000
            canales de TV y 150,000 VODs en 4K, FHD y HD. ¡Nuestro servicio es accesible desde cualquier dispositivo y
            ubicación, todo a precios increíbles!
          </p>
        </div>

        <div className="group relative">
          <button
            onClick={scrollToPricing}
            className="bg-blue-500 text-white border-black px-10 py-5 rounded-[10px]
              hover:bg-blue-600 transition-all duration-300 flex items-center transform hover:scale-105"
          >
            SUSCRÍBETE AHORA
            <GrFormNextLink className="ml-3 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

