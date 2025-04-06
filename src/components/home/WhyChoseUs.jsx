import movies from "../../assets/films.jpg"
import { FaChartPie } from "react-icons/fa"
import { LuChartNetwork } from "react-icons/lu"
import { HiPresentationChartLine } from "react-icons/hi"
import { PiChartLineUpBold } from "react-icons/pi"
import { TiWorld } from "react-icons/ti"
import { MdSettingsSuggest } from "react-icons/md"
import { IoIosTv } from "react-icons/io"
import { MdMovie } from "react-icons/md"

const service = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 mb-2 sm:mb-20">
      <div>{icon}</div>
      <div className="text-white text-[10px] sm:text-xl">{text}</div>
    </div>
  )
}

const container = ({ icon, number, text }) => {
  return (
    <div className="flex items-center justify-center gap-3 ">
      <div>{icon}</div>
      <div className="text-white">
        <h1 className="text-3xl sm:text-5xl font-bold">{number}+</h1>
        <p className="text-[12px] sm:text-xl">{text}</p>
      </div>
    </div>
  )
}

const WhyChoseUs = () => {
  return (
    <div>
      <div className="flex items-start justify-start mt-40">
        <div className="relative h-screen bg-cover bg-center w-1/2" style={{ backgroundImage: `url(${movies})` }}>
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-black/30 opacity-95" />
        </div>

        <div className=" flex flex-col items-start justify-start sm:mr-20 gap-5">
          <div className="flex items-center pt-4 gap-4">
            <p className="text-blue-600">Por Qué Elegirnos</p>
            <div className="bg-blue-600 w-20 h-0.5"></div>
          </div>
          <div className=" text-white font-bold text-2xl sm:text-5xl">
            Nos esforzamos por ofrecer una experiencia
            <span className="text-blue-600"> IPTV! </span>
            completa y satisfactoria
          </div>
          <div className="text-white text-[13px] sm:text-xl mt-4">
            Al elegirnos para tu servicio IPTV, te beneficias de planes de suscripción flexibles, opciones de conexiones
            múltiples y funcionalidad DVR avanzada
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center ">
            <div>
              {service({
                text: "Actualizaciones y Mejoras Regulares Estamos comprometidos a mejorar continuamente nuestro servicio IPTV para mejorar tu experiencia de visualización.",
                icon: <FaChartPie className="text-blue-600 text-2xl sm:text-5xl" />,
              })}
              {service({
                text: "Soporte Multi-Dispositivo Nuestro servicio IPTV es compatible con una amplia gama de dispositivos, aplicaciones, incluyendo smartphones, Firestick, smart TVs y dispositivos de streaming.",
                icon: <LuChartNetwork className="text-blue-600 text-2xl sm:text-5xl" />,
              })}
            </div>
            <div>
              {service({
                text: "Interfaz Fácil de Usar Nos enorgullecemos de proporcionar una interfaz fácil de usar que es sencilla de navegar.",
                icon: <HiPresentationChartLine className="text-blue-600 text-2xl sm:text-5xl" />,
              })}
              {service({
                text: "Características Exclusivas y Complementos Ofrecemos características exclusivas y complementos que mejoran tu experiencia IPTV.",
                icon: <PiChartLineUpBold className="text-blue-600 text-2xl sm:text-5xl" />,
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 p-16 w-full flex flex-col sm:flex-row items-center justify-center gap-10 pr-5 pl-5">
        <div>
          {container({
            icon: <TiWorld className="text-7xl sm:text-9xl text-white " />,
            number: 128,
            text: "Países Soportados",
          })}
        </div>
        <div>
          {container({
            icon: <MdSettingsSuggest className="text-7xl sm:text-9xl text-white " />,
            number: "35K",
            text: "Líneas Activas",
          })}
        </div>
        <div>
          {container({
            icon: <IoIosTv className="text-7xl sm:text-9xl text-white " />,
            number: "22K",
            text: "Canales de TV en Vivo",
          })}
        </div>
        <div>
          {container({
            icon: <MdMovie className="text-7xl sm:text-9xl text-white " />,
            number: "159K",
            text: "Contenido VOD",
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs

