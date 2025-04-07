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
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3 // Show 2 images at a time, so 3 pages total
  const imagesPerPage = 2

  // Function to handle moving to the next page
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Function to handle moving to the previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleGetDiscount = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Placeholder for images that haven't loaded yet
  const ImagePlaceholder = () => (
    <div className="w-full h-full bg-gray-800 animate-pulse rounded-lg" style={{ minHeight: "300px" }}></div>
  )

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
            <h1>Lo que dicen</h1>
            <h1 className="bg-blue-600 p-3 rounded-[15px]">sobre nosotros</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="bg-white w-16 h-0.5"></div>
            <div className="text-xl text-white">Opiniones de Clientes</div>
            <div className="bg-white w-16 h-0.5"></div>
          </div>

          <div className="sm:pr-20 sm:pl-20">
            <div className="relative overflow-hidden mt-10">
              {/* Navigation arrows */}
              <div
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-70 transition-all ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prevPage}
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
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-70 transition-all ${
                  currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={nextPage}
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

              {/* Fixed width container with overflow control */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                  {/* Page 1: Images 0-1 */}
                  <div className="w-full flex-shrink-0 flex justify-center gap-4">
                    <div className="w-[45%]">
                      <img
                        src={images[0] || "/placeholder.svg"}
                        alt="Opinión de Cliente 1"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[0] || "/placeholder.svg"}
                      />
                    </div>
                    <div className="w-[45%]">
                      <img
                        src={images[1] || "/placeholder.svg"}
                        alt="Opinión de Cliente 2"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[1] || "/placeholder.svg"}
                      />
                    </div>
                  </div>

                  {/* Page 2: Images 2-3 */}
                  <div className="w-full flex-shrink-0 flex justify-center gap-4">
                    <div className="w-[45%]">
                      <img
                        src={images[2] || "/placeholder.svg"}
                        alt="Opinión de Cliente 3"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[2] || "/placeholder.svg"}
                      />
                    </div>
                    <div className="w-[45%]">
                      <img
                        src={images[3] || "/placeholder.svg"}
                        alt="Opinión de Cliente 4"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[3] || "/placeholder.svg"}
                      />
                    </div>
                  </div>

                  {/* Page 3: Images 4-5 */}
                  <div className="w-full flex-shrink-0 flex justify-center gap-4">
                    <div className="w-[45%]">
                      <img
                        src={images[4] || "/placeholder.svg"}
                        alt="Opinión de Cliente 5"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[4] || "/placeholder.svg"}
                      />
                    </div>
                    <div className="w-[45%]">
                      <img
                        src={images[5] || "/placeholder.svg"}
                        alt="Opinión de Cliente 6"
                        className="w-full rounded-lg shadow-lg"
                        loading="lazy"
                        data-src={images[5] || "/placeholder.svg"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {[0, 1, 2].map((pageIndex) => (
                  <button
                    key={pageIndex}
                    className={`h-2 w-2 rounded-full ${
                      currentPage === pageIndex ? "bg-blue-600" : "bg-white bg-opacity-50"
                    }`}
                    onClick={() => setCurrentPage(pageIndex)}
                    aria-label={`Go to page ${pageIndex + 1}`}
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
                Última Oportunidad: Obtén 70% de DESCUENTO
              </button>
            </div>
            <div>
              <h1 className="text-white font italic text-[17px]">PAGO ÚNICO - ¡Entretenimiento Sin Fin!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBack

