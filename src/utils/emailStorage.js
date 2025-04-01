// Email storage utility

// Save email to localStorage and optionally to server
export const saveEmail = async (email, source = "unknown", additionalData = {}) => {
    try {
      // Validate email format
      if (!email || !email.includes("@") || !email.includes(".")) {
        return {
          success: false,
          message: "Please enter a valid email address",
        }
      }
  
      // Get existing emails from localStorage
      const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]")
  
      // Check if email already exists
      if (existingEmails.some((item) => item.email === email)) {
        return {
          success: true,
          message: "You're already subscribed!",
        }
      }
  
      // Add new email with timestamp and source
      const newEmail = {
        email,
        timestamp: new Date().toISOString(),
        source,
        ...additionalData,
      }
  
      // Add to list
      existingEmails.push(newEmail)
      localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails))
  
      // In a real application, you would send this to your server
      console.log("Email saved:", newEmail)
  
      // Try to send to server if available
      try {
        // This is a placeholder - replace with your actual API endpoint
        // const response = await fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(newEmail)
        // })
        // const data = await response.json()
        // console.log('Server response:', data)
      } catch (serverError) {
        console.error("Error sending email to server:", serverError)
        // Still return success since we saved locally
      }
  
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
  
  // Get all saved emails
  export const getSavedEmails = () => {
    try {
      return JSON.parse(localStorage.getItem("subscribedEmails") || "[]")
    } catch (error) {
      console.error("Error retrieving emails:", error)
      return []
    }
  }
  
  // Export emails as CSV
  export const exportEmailsAsCSV = () => {
    const emails = getSavedEmails()
    if (emails.length === 0) return null
  
    // Create CSV header
    const headers = ["Email", "Timestamp", "Source"]
  
    // Create CSV content
    const csvContent = [
      headers.join(","),
      ...emails.map((item) => `${item.email},${item.timestamp},${item.source}`),
    ].join("\n")
  
    return csvContent
  }
  
  // Download emails as CSV file
  export const downloadEmailsAsCSV = () => {
    const csvContent = exportEmailsAsCSV()
    if (!csvContent) return false
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `subscribed-emails-${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  
    return true
  }
  
  