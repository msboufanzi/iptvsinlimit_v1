import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./views/home/HomePage"
import PaymentSuccess from "./components/payment/PaymentSuccess"
import PaymentFailed from "./components/payment/PaymentFailed"
import EmailsPage from "./views/admin/EmailsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
        <Route path="/admin/emails" element={<EmailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App

