import ranking from "../../assets/ranking.png"

const BrandInfo = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="bg-white flex flex-col sm:flex-row text-black py-10 sm:py-16 px-6 sm:px-10 rounded-[20px] justify-center items-start space-y-10 sm:space-y-0 sm:space-x-10">
        {/* Section 1 */}
        <div className="flex flex-col ">
          <h1 className="text-2xl sm:text-3xl ">Canales Mundiales</h1>
          <p className="text-base sm:text-lg mt-2">Mira canales de EE.UU., Reino Unido, Canadá e internacionales.</p>
        </div>
        {/* Divider */}
        <div className="hidden sm:block w-1 h-20 bg-black"></div>
        {/* Section 2 */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl ">VOD Bajo Demanda</h1>
          <p className="text-base sm:text-lg mt-2">
            Disfruta de una selección ilimitada de películas y series actualizadas.
          </p>
        </div>
        {/* Divider */}
        <div className="hidden sm:block w-1 h-20 bg-black"></div>
        {/* Section 3 */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl ">Video de Alta Calidad</h1>
          <p className="text-base sm:text-lg mt-2">
            Transmite en HD, Full HD y 4K en todos tus dispositivos sin congelamiento.
          </p>
        </div>
      </div>
      {/* Ranking Image */}
      <div className="flex justify-center mt-8">
        <img alt="ranking" src={ranking || "/placeholder.svg"} className="w-78 sm:w66" />
      </div>
    </div>
  )
}

export default BrandInfo

