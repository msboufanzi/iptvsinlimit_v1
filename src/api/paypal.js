// PayPal API integration

// PayPal credentials from environment variables
const PAYPAL_CLIENT_ID =
  import.meta.env.VITE_PAYPAL_CLIENT_ID ||
  "AefV0YJVL2_lBIMa6hEX38R7HrUk2VVp-Y0UsNmgvVXu3H1InFw4D6utqrqHTGsX2V743wFpDbqoEMbM"
const PAYPAL_CLIENT_SECRET =
  import.meta.env.VITE_PAYPAL_CLIENT_SECRET ||
  "EGL1Ax740-Qox6x3y20lXcn1vRhIcd8YjUGHNR3nr9-Nk9IordcbdAVdeO49gdMbMb8jkGt9CBxefg8X"

// PayPal environment - set to 'sandbox' for testing, 'production' for live
const PAYPAL_ENVIRONMENT = import.meta.env.VITE_PAYPAL_ENVIRONMENT || "sandbox"

// PayPal API URLs
const PAYPAL_API_BASE =
  PAYPAL_ENVIRONMENT === "sandbox" ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com"

// Get PayPal access token
export const getPayPalAccessToken = async () => {
  try {
    console.log("Getting PayPal access token...")
    const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`)}`,
      },
      body: "grant_type=client_credentials",
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("PayPal token error:", data)
      throw new Error(data.error_description || "Failed to get PayPal access token")
    }

    console.log("PayPal token obtained successfully")
    return data.access_token
  } catch (error) {
    console.error("Error getting PayPal access token:", error)
    throw error
  }
}

// Create a PayPal order
export const createPayPalOrder = async (product) => {
  try {
    // Get access token
    const accessToken = await getPayPalAccessToken()

    // Extract price from product
    const price = product?.price?.replace(/[^0-9.]/g, "") || "0.00"

    console.log(`Creating PayPal order for ${product?.title} at €${price}`)

    // Create order
    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: product?.title || "IPTV Subscription",
            amount: {
              currency_code: "EUR",
              value: price,
            },
          },
        ],
        application_context: {
          return_url: `${window.location.origin}/payment/success?success=true`,
          cancel_url: `${window.location.origin}/payment/failed?canceled=true`,
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("PayPal order creation error:", data)
      throw new Error(data.message || "Failed to create PayPal order")
    }

    console.log("PayPal order created successfully:", data)
    return data
  } catch (error) {
    console.error("Error creating PayPal order:", error)
    throw error
  }
}

// Capture a PayPal order
export const capturePayPalOrder = async (orderId) => {
  try {
    // Get access token
    const accessToken = await getPayPalAccessToken()

    console.log(`Capturing PayPal order: ${orderId}`)

    // Capture order
    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("PayPal capture error:", data)
      throw new Error(data.message || "Failed to capture PayPal order")
    }

    console.log("PayPal order captured successfully:", data)
    return data
  } catch (error) {
    console.error("Error capturing PayPal order:", error)
    throw error
  }
}

// Get PayPal client ID for frontend
export const getPayPalClientId = () => {
  return PAYPAL_CLIENT_ID
}

// Get PayPal environment for frontend
export const getPayPalEnvironment = () => {
  return PAYPAL_ENVIRONMENT
}

