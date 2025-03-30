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
        <h1>How</h1>
        <h1 className="bg-blue-600 p-3 rounded-[15px]">It Works</h1>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="bg-blue-600 w-16 h-0.5"></div>
        <div className="text-blue-600 text-xl">HOW TO GET STARTED?</div>
        <div className="bg-blue-600 w-16 h-0.5"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mr-10 ml-10 mt-10 gap-5">
        {container({
          image: book,
          titel: "Choose Your Plan",
          text: "Start by selecting the subscription plan that best fits your viewing needs and budget.",
        })}
        {container({
          image: money,
          titel: "Make Payment",
          text: "Complete your purchase securely using PayPal, credit card, or contact us via WhatsApp.",
        })}
        {container({
          image: verify,
          titel: "Receive Access",
          text: "Get your login credentials instantly via email after your payment is confirmed.",
        })}
        {container({
          image: like,
          titel: "Enjoy Streaming",
          text: "Start watching your favorite channels and content on any compatible device.",
        })}
      </div>
    </div>
  )
}

export default HowItWork

