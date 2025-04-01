import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import "./utils/paypalCheck.js" // Add PayPal integration check
import { lazyLoadImages, optimizeRendering, preloadCriticalResources } from "./utils/performanceUtils"

// Apply performance optimizations
document.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages()
  optimizeRendering()
  preloadCriticalResources()
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

