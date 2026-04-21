import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RoleSelection from './pages/RoleSelection'
import UserAuth from './pages/UserAuth'
import DriverAuth from './pages/DriverAuth'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/user-auth" element={<UserAuth />} />
      <Route path="/driver-auth" element={<DriverAuth />} />
      {/* Add more routes here as we build them */}
    </Routes>
  )
}

export default App
