// Debug utility functions

// Log PayPal environment details
export const logPayPalEnvironment = () => {
    console.log("PayPal Environment Check:")
    console.log("- Window Location:", window.location.href)
    console.log("- Origin:", window.location.origin)
    console.log("- User Agent:", navigator.userAgent)
  
    // Check if PayPal SDK is loaded
    if (window.paypal) {
      console.log("- PayPal SDK: Loaded")
    } else {
      console.log("- PayPal SDK: Not loaded")
    }
  
    // Check for common browser restrictions
    try {
      localStorage.setItem("test", "test")
      localStorage.removeItem("test")
      console.log("- LocalStorage: Available")
    } catch (e) {
      console.log("- LocalStorage: Restricted")
    }
  
    try {
      const testCookie = "testcookie=1"
      document.cookie = testCookie
      console.log("- Cookies: " + (document.cookie.indexOf("testcookie=") !== -1 ? "Available" : "Restricted"))
    } catch (e) {
      console.log("- Cookies: Restricted")
    }
  }
  
  // Format currency for display
  export const formatCurrency = (amount, currency = "EUR") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount)
  }
  
  // Parse price from string
  export const parsePrice = (priceString) => {
    if (!priceString) return 0
  
    // Remove currency symbol and any non-numeric characters except decimal point
    const numericString = priceString.replace(/[^0-9.]/g, "")
    return Number.parseFloat(numericString) || 0
  }
  
  