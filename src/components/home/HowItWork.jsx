import book from "../../assets/chaier.png"
import money from "../../assets/money.png"
import verify from "../../assets/verify.png"
import like from "../../assets/like.png"

const container = ({ image, titel, text }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-xl gap-4 w-full mr-5 ml-5">
      <img alt="img" src={image || "/placeholder.svg"} className="w-40 sm:w-56" />
      <h1 className="text-blue-600 text-3xl">{titel}</h1>
      <p className="text-center text-xl">{text}</p>
    </div>
  )
}

const HowItWork = () => {
  return (
    <div className="mt-10 sm:mt-36 gap-10">
      <div className="flex items-center justify-center text-white text-5xl font-bold gap-3">
        <h1>Cómo</h1>
        <h1 className="bg-blue-600 p-3 rounded-[15px]">Funciona</h1>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="bg-blue-600 w-16 h-0.5"></div>
        <div className="text-blue-600 text-xl">¿CÓMO EMPEZAR?</div>
        <div className="bg-blue-600 w-16 h-0.5"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mr-10 ml-10 mt-10 gap-5">
        {container({
          image: book,
          titel: "Elige Tu Plan",
          text: "Comienza seleccionando el plan de suscripción que mejor se adapte a tus necesidades y presupuesto.",
        })}
        {container({
          image: money,
          titel: "Realiza el Pago",
          text: "Completa tu compra de forma segura usando PayPal, tarjeta de crédito o contáctanos por WhatsApp.",
        })}
        {container({
          image: verify,
          titel: "Recibe Acceso",
          text: "Obtén tus credenciales de acceso al instante por correo electrónico después de confirmar tu pago.",
        })}
        {container({
          image: like,
          titel: "Disfruta Streaming",
          text: "Comienza a ver tus canales y contenido favorito en cualquier dispositivo compatible.",
        })}
      </div>
    </div>
  )
}

export default HowItWork

