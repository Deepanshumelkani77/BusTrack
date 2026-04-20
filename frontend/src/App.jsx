import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RoleSelection from './pages/RoleSelection'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      {/* Add more routes here as we build them */}
    </Routes>
  )
}

export default App
