"use client"

import { useState } from "react"
import back2 from "../../assets/back2.jpg"
import feedback1 from "../../assets/feedbacks/feedback1.webp"
import feedback2 from "../../assets/feedbacks/feedback2.webp"
import feedback3 from "../../assets/feedbacks/feedback3.webp"
import feedback4 from "../../assets/feedbacks/feedback4.webp"
import feedback5 from "../../assets/feedbacks/feedback5.webp"
import feedback6 from "../../assets/feedbacks/feedback6.webp"

const FeedBack = ({ with_back }) => {
  const images = [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to handle moving to the next slide
  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleGetDiscount = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="mt-20 ms:mt-10 pr-4 pb-10">
      <div
        className="relative bg-cover bg-center h-screen*2"
        style={{
          backgroundImage: with_back ? `url(${back2})` : undefined,
          backgroundColor: with_back ? undefined : "black",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center text-white text-5xl font-bold gap-3 pt-32">
            <h1>What they say</h1>
            <h1 className="bg-blue-600 p-3 rounded-[15px]">about us</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="bg-white w-16 h-0.5"></div>
            <div className="text-xl text-white">Customer Feedback</div>
            <div className="bg-white w-16 h-0.5"></div>
          </div>

          <div className="sm:pr-20 sm:pl-20">
            <div className="relative overflow-hidden mt-10">
              {/* Navigation arrows */}
              <div
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-70 transition-all ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={prevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              <div
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-70 transition-all ${currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={nextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div
                className="flex transition-transform duration-500 gap-3"
                style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-[50%] sm:w-[20%] flex-shrink-0 flex justify-center items-center ${currentIndex === index ? "scale-105 transition-transform duration-300" : ""}`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Customer Feedback ${index + 1}`}
                      className="w-100 h-150 rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-white bg-opacity-50"}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 text-xl pb-10">
            <div className="relative group mt-6">
              <button
                onClick={handleGetDiscount}
                className="bg-blue-600 rounded-[40px] p-3 text-white flex items-center justify-between hover:bg-blue-700 transition-colors"
              >
                Last Chance: Get 70% OFF
              </button>
            </div>
            <div>
              <h1 className="text-white font italic text-[17px]">ONE TIME PAYMENT - Endless Entertainment!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBack

