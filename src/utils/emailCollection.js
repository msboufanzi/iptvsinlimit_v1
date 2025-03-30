// Function to save email to "folder" (localStorage in this demo)
export const saveEmail = (email, source = "unknown") => {
    try {
      // Get existing emails from localStorage
      const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]")
  
      // Add new email with timestamp and source
      const newEmail = {
        email,
        timestamp: new Date().toISOString(),
        source,
      }
  
      // Add to list if not already present
      if (!existingEmails.some((item) => item.email === email)) {
        existingEmails.push(newEmail)
        localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails))
      }
  
      // In a real application, you would send this to your server
      console.log("Email saved:", newEmail)
  
      return {
        success: true,
        message: "Thank you for subscribing!",
      }
    } catch (error) {
      console.error("Error saving email:", error)
      return {
        success: false,
        message: "There was an error processing your request. Please try again.",
      }
    }
  }
  
  // Function to validate email format
  export const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  
  