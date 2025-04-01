import { logPayPalEnvironment } from "./debugUtils"
import { getPayPalClientId, getPayPalEnvironment } from "../api/paypal"

// Function to check PayPal integration
export const checkPayPalIntegration = () => {
  console.log("Checking PayPal integration...")

  // Log environment details
  logPayPalEnvironment()

  // Log PayPal configuration
  console.log("PayPal Configuration:")
  console.log("- Environment:", getPayPalEnvironment())
  console.log("- Client ID:", getPayPalClientId())

  // Check if we're in a sandbox or production environment
  const isSandbox = getPayPalEnvironment() === "sandbox"
  console.log(`- Using ${isSandbox ? "SANDBOX" : "PRODUCTION"} environment`)

  // Warn if using sandbox in production or vice versa
  if (isSandbox && window.location.hostname !== "localhost" && !window.location.hostname.includes("127.0.0.1")) {
    console.warn("WARNING: Using PayPal sandbox on a production domain!")
  }

  if (!isSandbox && (window.location.hostname === "localhost" || window.location.hostname.includes("127.0.0.1"))) {
    console.warn("WARNING: Using PayPal production on a development domain!")
  }

  return {
    environment: getPayPalEnvironment(),
    clientId: getPayPalClientId(),
    isSandbox,
  }
}

// Run check on import
checkPayPalIntegration()

