// Environment variables for the application
// In a production environment, these would be stored in a .env file
// and accessed via process.env

export const ENV = {
  // PayPal credentials
  PAYPAL_CLIENT_ID: "YOUR_PAYPAL_CLIENT_ID",
  PAYPAL_SECRET: "YOUR_PAYPAL_SECRET",

  // Stripe credentials for credit card processing
  STRIPE_PUBLIC_KEY: "YOUR_STRIPE_PUBLIC_KEY",
  STRIPE_SECRET_KEY: "YOUR_STRIPE_SECRET_KEY",

  // WhatsApp contact number
  WHATSAPP_NUMBER: "+34649324985",

  // Email for contact form submissions
  CONTACT_EMAIL: "support@streamtvuniverse.com",

  // API endpoints
  API_URL: "https://api.yourservice.com",

  // Email subscription service
  EMAIL_SERVICE_URL: "https://email-service.yourservice.com/subscribe",
}

