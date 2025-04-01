"use client"
import { useState, useEffect } from "react"
import { FaPaypal } from "react-icons/fa"

const PaypalButton = ({ product, onSuccess, onError, onCancel }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isButtonRendered, setIsButtonRendered] = useState(false)
  const [loadError, setLoadError] = useState(null)

  // Extract price from product
  const getPrice = () => {
    if (!product || !product.price) return "0.00"
    return product.price.replace(/[^0-9.]/g, "")
  }

  // Handle direct PayPal redirect as fallback
  const handleDirectPayPalRedirect = () => {
    try {
      const price = getPrice()
      const description = encodeURIComponent(product?.title || "IPTV Subscription")

      // Create a basic PayPal checkout URL - using sandbox
      const paypalCheckoutUrl = `https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sb-43rqz28379099@business.example.com&item_name=${description}&amount=${price}&currency_code=EUR&return=${encodeURIComponent(window.location.origin + "/payment/success")}&cancel_return=${encodeURIComponent(window.location.origin + "/payment/failed")}`

      // Redirect to PayPal
      window.location.href = paypalCheckoutUrl
    } catch (err) {
      console.error("Error redirecting to PayPal:", err)
      onError("Failed to redirect to PayPal. Please try another payment method.")
    }
  }

  useEffect(() => {
    // PayPal Client ID - make sure to include the "A" prefix
    const PAYPAL_CLIENT_ID = "AefV0YJVL2_lBIMa6hEX38R7HrUk2VVp-Y0UsNmgvVXu3H1InFw4D6utqrqHTGsX2V743wFpDbqoEMbM"

    // Load the PayPal SDK - using sandbox
    const loadPayPalScript = () => {
      // Clear any existing PayPal scripts
      const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }

      // Create new script - note the sandbox environment
      const script = document.createElement("script")
      script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR&intent=capture`
      script.async = true

      // Handle script load success
      script.onload = () => {
        console.log("PayPal SDK loaded successfully")
        setIsLoaded(true)

        // Render PayPal buttons
        if (window.paypal) {
          try {
            const buttonContainer = document.getElementById("paypal-button-container")
            if (buttonContainer) {
              // Clear container
              buttonContainer.innerHTML = ""

              // Render buttons
              window.paypal
                .Buttons({
                  // Set up the transaction
                  createOrder: (data, actions) => {
                    const price = getPrice()

                    return actions.order.create({
                      purchase_units: [
                        {
                          description: product?.title || "IPTV Subscription",
                          amount: {
                            currency_code: "EUR",
                            value: price,
                          },
                        },
                      ],
                    })
                  },
                  // Finalize the transaction
                  onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                      console.log("Payment completed", details)
                      onSuccess(details)
                    })
                  },
                  onCancel: () => {
                    onCancel()
                  },
                  onError: (err) => {
                    console.error("PayPal button error:", err)
                    onError("There was an error processing your payment. Please try again.")
                  },
                  style: {
                    layout: "vertical",
                    color: "blue",
                    shape: "rect",
                    label: "pay",
                  },
                })
                .render("#paypal-button-container")
                .then(() => {
                  console.log("PayPal buttons rendered successfully")
                  setIsButtonRendered(true)
                })
                .catch((err) => {
                  console.error("Error rendering PayPal buttons:", err)
                  setLoadError("Failed to initialize PayPal buttons. Please try the direct PayPal option.")
                })
            } else {
              console.error("PayPal container not found")
              setLoadError("PayPal container not found. Please try the direct PayPal option.")
            }
          } catch (err) {
            console.error("Error setting up PayPal buttons:", err)
            setLoadError("Failed to set up PayPal. Please try the direct PayPal option.")
          }
        } else {
          console.error("PayPal SDK not available after loading")
          setLoadError("PayPal SDK not available. Please try the direct PayPal option.")
        }
      }

      // Handle script load error
      script.onerror = (err) => {
        console.error("Failed to load PayPal SDK:", err)
        setLoadError("Failed to load PayPal. Please try the direct PayPal option.")
      }

      // Add script to document
      document.body.appendChild(script)
    }

    // Load PayPal script
    loadPayPalScript()

    // Cleanup
    return () => {
      const script = document.querySelector('script[src*="paypal.com/sdk/js"]')
      if (script && document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [product, onSuccess, onCancel, onError])

  return (
    <div className="w-full">
      {/* PayPal button container */}
      <div id="paypal-button-container" className="min-h-[150px] mb-4"></div>

      {/* Loading indicator */}
      {!isLoaded && !loadError && (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-white">Loading PayPal...</span>
        </div>
      )}

      {/* Error message */}
      {loadError && <div className="text-red-500 text-center py-2 mb-4">{loadError}</div>}

      {/* Direct PayPal fallback button */}
      {(loadError || (isLoaded && !isButtonRendered)) && (
        <button
          onClick={handleDirectPayPalRedirect}
          className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
        >
          <FaPaypal className="text-2xl" />
          Checkout with PayPal Directly
        </button>
      )}
    </div>
  )
}

export default PaypalButton

