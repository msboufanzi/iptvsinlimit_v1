"use client"

import { useState } from "react"

// This component optimizes image loading and rendering
const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  sizes = "100vw",
  quality = 80,
  placeholder = true,
  onLoad = () => {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad()
  }

  // Handle image error
  const handleError = () => {
    setError(true)
    console.error(`Failed to load image: ${src}`)
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Placeholder while image is loading */}
      {placeholder && !isLoaded && !error && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-sm"
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ${className}`}
        sizes={sizes}
        {...props}
      />

      {/* Error fallback */}
      {error && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm"
          style={{ width: "100%", height: "100%" }}
        >
          Failed to load image
        </div>
      )}
    </div>
  )
}

export default ImageOptimizer

