// PayPal credentials - using sandbox environment
export const PAYPAL_CONFIG = {
  CLIENT_ID: "AefV0YJVL2_lBIMa6hEX38R7HrUk2VVp-Y0UsNmgvVXu3H1InFw4D6utqrqHTGsX2V743wFpDbqoEMbM",
  SECRET: "EGL1Ax740-Qox6x3y20lXcn1vRhIcd8YjUGHNR3nr9-Nk9IordcbdAVdeO49gdMbMb8jkGt9CBxefg8X",
  ENVIRONMENT: "sandbox", // Change to "production" when going live
}

// Stripe payment links
export const STRIPE_LINKS = {
  1: "https://buy.stripe.com/6oE4j6cUxd7tf9m7sw", // 1 Month - €12.99 EUR
  3: "https://buy.stripe.com/14k9Dq3jXd7t7GU7sx", // 3 Months - €39.99 EUR
  6: "https://buy.stripe.com/aEUeXK07L0kHgdq7sy", // 6 Months - €49.99 EUR
  12: "https://buy.stripe.com/6oEcPC5s54AX2mAdQX", // 12 Months - €69.99 EUR
}

// Format price for payment processing
export const formatPrice = (priceString) => {
  // Remove currency symbol and any non-numeric characters except decimal point
  return priceString.replace(/[^0-9.]/g, "")
}

// Get payment method icon
export const getPaymentMethodIcon = (method) => {
  switch (method) {
    case "stripe":
      return "/stripe-icon.svg"
    case "paypal":
      return "/paypal-icon.svg"
    case "credit-card":
      return "/credit-card-icon.svg"
    default:
      return null
  }
}

// Generate a unique order reference
export const generateOrderReference = () => {
  const timestamp = new Date().getTime()
  const random = Math.floor(Math.random() * 1000)
  return `IPTV-${timestamp}-${random}`
}

