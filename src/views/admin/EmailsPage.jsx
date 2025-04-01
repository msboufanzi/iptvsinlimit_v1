"use client"

import { useState } from "react"
import { getSavedEmails, downloadEmailsAsCSV } from "../../utils/emailStorage"

const EmailsPage = () => {
  const [emails, setEmails] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Simple authentication - in a real app, this would be server-side
  const authenticate = (e) => {
    e.preventDefault()
    // Simple password for demo purposes - in a real app, use proper authentication
    if (password === "admin123") {
      setIsAuthenticated(true)
      setError("")
      loadEmails()
    } else {
      setError("Invalid password")
    }
  }

  const loadEmails = () => {
    const savedEmails = getSavedEmails()
    setEmails(savedEmails)
  }

  const handleExport = () => {
    const success = downloadEmailsAsCSV()
    if (!success) {
      setError("No emails to export")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-xl max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
          <form onSubmit={authenticate} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Subscribed Emails</h1>
          <div className="flex gap-4">
            <button
              onClick={handleExport}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Export as CSV
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {emails.length === 0 ? (
          <div className="bg-gray-900 p-8 rounded-xl text-center">
            <p>No emails have been collected yet.</p>
          </div>
        ) : (
          <div className="bg-gray-900 p-6 rounded-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Source</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((item, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 px-4">{item.email}</td>
                    <td className="py-3 px-4">{new Date(item.timestamp).toLocaleString()}</td>
                    <td className="py-3 px-4">{item.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-400">Total emails: {emails.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailsPage

