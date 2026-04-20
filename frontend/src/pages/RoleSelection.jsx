import React from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Bus, MapPin, Clock, Shield, Star } from 'lucide-react'

const RoleSelection = () => {
  const navigate = useNavigate()

  const handleUserSelect = () => {
    navigate('/user-auth')
  }

  const handleDriverSelect = () => {
    navigate('/driver-auth')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <Bus className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">BusTrack</h1>
        <p className="text-gray-600 text-lg">Real-time Bus Tracking System</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12">
            Choose Your Role
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* User Card */}
            <div 
              onClick={handleUserSelect}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-400"
            >
              <div className="flex flex-col items-center text-center">
                {/* User Icon */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-full mb-6">
                  <User className="h-12 w-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">User</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Track buses in real-time, view ETA, and plan your journey efficiently
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 text-left w-full">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Live bus tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Accurate ETA predictions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Route information</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                  Continue as User
                </button>
              </div>
            </div>

            {/* Driver Card */}
            <div 
              onClick={handleDriverSelect}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-green-400"
            >
              <div className="flex flex-col items-center text-center">
                {/* Driver Icon */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-full mb-6">
                  <Bus className="h-12 w-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Driver</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Register your bus, manage routes, and share real-time location with passengers
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 text-left w-full">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Bus registration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Route management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Trip tracking</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg">
                  Continue as Driver
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-sm font-medium">
                Join thousands of users tracking buses in real-time
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 mt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          © 2024 BusTrack. Making public transport smarter.
        </p>
      </div>
    </div>
  )
}

export default RoleSelection
