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
        <div className="text-xl">QUESTIONS / ANSWERS</div>
        <div className="bg-blue-600 w-20 h-0.5 mt-4"></div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center text-white text-5xl font-bold gap-3 pt-16">
        <h1>Frequently Asked</h1>
        <h1 className="bg-blue-600 p-3 rounded-[15px]">Questions</h1>
      </div>
      <div className="sm:mr-48 sm:ml-48 mt-16">
        {Container({
          question: "Are there any additional fees?",
          reponse: "All prices are included in your subscription, with no hidden fees.",
        })}
        {Container({
          question: "What internet speed do I need for IPTV?",
          reponse:
            "A minimum internet speed of 10Mbps is recommended for the standard streaming but if you want to stream 4K content then you will need 25 Mbps internet speed.",
        })}
        {Container({
          question: "How many devices can I use at once with my subscription?",
          reponse:
            "The standard subscription at StreamTVUniverse allows you to watch on up to 1 device simultaneously. For more IPTV Connections, please check our Multiple Connections Service on the Pricing page or contact us via WhatsApp for premium plans available.",
        })}
        {Container({
          question: "What devices can I use for IPTV?",
          reponse:
            "Our IPTV service is compatible with Smart TVs, streaming devices (Amazon Firestick, Roku, Apple TV), computers, tablets, Android, smartphones and more...",
        })}
        {Container({
          question: "Can I use a VPN with your IPTV service?",
          reponse: "Yes, you can utilize a VPN with the IPTV service we provide here for added privacy and security. ",
        })}
        {Container({
          question: "Where can I watch IPTV Service?",
          reponse:
            "You can Enjoy our IPTV Subscription Service in the USA, UK, Australia, Canada, France, Belgium, Switzerland, Spain, Portugal, Italy, Germany, the Netherlands, Arabic regions, Latin America, Turkey, and more.",
        })}
        {Container({
          question: "Can I cancel my subscription at any time?",
          reponse:
            "Yes, you can easily cancel the subscription plan at any time without any further cancellation fees. Simply follow the cancellation directions on the website or contact the support team for help.",
        })}
      </div>
    </div>
  )
}

export default Question

