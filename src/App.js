import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman login */}
        <Route path="/admin-login" element={<Login />} />
        {/* Route untuk halaman Admin */}
        <Route path="/admin" element={<AdminPage />} />
        {/* Route untuk halaman User */}
        <Route path="/" element={<UserPage />} />
      </Routes>
    </Router>
  )
}

export default App
