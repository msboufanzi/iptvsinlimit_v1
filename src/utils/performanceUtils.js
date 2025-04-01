// Performance optimization utilities

// Lazy load images
export const lazyLoadImages = () => {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute("data-src")
  
            if (src) {
              img.src = src
              img.removeAttribute("data-src")
            }
  
            observer.unobserve(img)
          }
        })
      })
  
      // Target all images with data-src attribute
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img)
      })
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll("img[data-src]").forEach((img) => {
        img.src = img.getAttribute("data-src")
        img.removeAttribute("data-src")
      })
    }
  }
  
  // Optimize rendering
  export const optimizeRendering = () => {
    // Debounce scroll events
    let scrollTimeout
    const scrollHandler = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
  
      scrollTimeout = window.requestAnimationFrame(() => {
        // Any scroll-based operations can go here
      })
    }
  
    window.addEventListener("scroll", scrollHandler, { passive: true })
  
    // Optimize animations
    document.querySelectorAll(".animate-fadeIn").forEach((el) => {
      el.style.willChange = "opacity"
    })
  
    // Clean up function
    return () => {
      window.removeEventListener("scroll", scrollHandler)
      document.querySelectorAll(".animate-fadeIn").forEach((el) => {
        el.style.willChange = "auto"
      })
    }
  }
  
  // Preload critical resources
  export const preloadCriticalResources = () => {
    const resources = ["/visa.svg", "/mastercard.svg", "/amex.svg"]
  
    resources.forEach((resource) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = resource
      link.as = resource.endsWith(".svg") ? "image" : "script"
      document.head.appendChild(link)
    })
  }
  
  