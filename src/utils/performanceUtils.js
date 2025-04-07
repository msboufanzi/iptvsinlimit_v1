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
  const criticalResources = [
    { url: "/logo.png", type: "image" },
    { url: "/visa.svg", type: "image" },
    { url: "/mastercard.svg", type: "image" },
    { url: "/amex.svg", type: "image" },
  ]

  criticalResources.forEach(({ url, type }) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = url
    link.as = type

    if (type === "image" && url.endsWith(".svg")) {
      link.type = "image/svg+xml"
    } else if (type === "image") {
      link.type = "image/png"
    }

    document.head.appendChild(link)
  })
}

// Dynamically load non-critical scripts
export const loadNonCriticalScripts = () => {
  // List of non-critical scripts to load after page is interactive
  const nonCriticalScripts = [
    // Add your non-critical scripts here
    // Example: { src: '/analytics.js', async: true, defer: true }
  ]

  // Wait until page is idle to load non-critical scripts
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      loadScripts(nonCriticalScripts)
    })
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      loadScripts(nonCriticalScripts)
    }, 2000)
  }
}

// Helper function to load scripts
const loadScripts = (scripts) => {
  scripts.forEach(({ src, async = true, defer = true }) => {
    const script = document.createElement("script")
    script.src = src
    script.async = async
    script.defer = defer
    document.body.appendChild(script)
  })
}

// Image optimization helper
export const getOptimizedImageUrl = (originalUrl, width = null, quality = 80) => {
  // If using an image optimization service like Cloudinary, Imgix, etc.
  // return `https://your-image-service.com/${originalUrl}?w=${width}&q=${quality}`

  // For now, just return the original URL
  return originalUrl
}

// Convert images to WebP format if supported
export const convertToWebPIfSupported = () => {
  const supportsWebP = localStorage.getItem('supportsWebP')
  
  if (supportsWebP === null) {
    // Check if browser supports WebP
    const canvas = document.createElement('canvas')
    if (canvas.getContext && canvas.getContext('2d')) {
      const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
      localStorage.setItem('supportsWebP', supportsWebP ? 'true' : 'false')
      
      if (supportsWebP) {
        // Replace jpg/png images with WebP versions if supported
        document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]').forEach(img => {
          const src = img.getAttribute('src')
          if (src && !src.includes('data:') && !src.includes('blob:')) {
            // Only convert if not already a data URL or blob
            img.setAttribute('src', src.replace(/\.(jpg|png)$/i, '.webp'))
          }
        })
      }
    }
  }
}

// Defer non-critical CSS
export const deferNonCriticalCSS = () => {
  const nonCriticalStyles = [
    // Add paths to non-critical CSS files
    // '/styles/animations.css',
    // '/styles/print.css'
  ]
  
  nonCriticalStyles.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.media = 'print'
    link.onload = () => {
      link.media = 'all'
    }
    document.head.appendChild(link)
  })
}
