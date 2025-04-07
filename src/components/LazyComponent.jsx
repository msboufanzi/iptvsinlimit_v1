"use client"

import { useState, useEffect } from "react"

// This component provides a standardized way to lazy load components
const LazyComponent = ({
  component,
  fallback = null,
  threshold = 0.1,
  rootMargin = "200px",
  onVisible = () => {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [Component, setComponent] = useState(null)

  // Set up intersection observer to detect when component is near viewport
  useEffect(() => {
    if (!window.IntersectionObserver) {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onVisible()
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    // Create a ref element to observe
    const element = document.createElement("div")
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, onVisible])

  // Load component when visible
  useEffect(() => {
    if (isVisible && component) {
      const loadComponent = async () => {
        try {
          const loadedComponent = await component()
          setComponent(() => loadedComponent.default || loadedComponent)
        } catch (error) {
          console.error("Failed to load component:", error)
        }
      }

      loadComponent()
    }
  }, [isVisible, component])

  if (!isVisible || !Component) {
    return fallback || <div className="min-h-[100px]" />
  }

  return <Component {...props} />
}

export default LazyComponent

