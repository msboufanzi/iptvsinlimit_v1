const Service = ({ number, title, description }) => {
  return (
    <div className="flex flex-col text-white pl-9 pr-9 max-w-2xl text-lg sm:text-base gap-5 text-center sm:text-start">
      <div className="flex items-center justify-center sm:justify-start sm:items-start gap-4">
        <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">{number}</div>
        <div className="mt-3 font-bold text-2xl">{title}</div>
      </div>
      <div className="text-lg leading-relaxed sm:text-sm">{description}</div>
    </div>
  )
}

export default Service

