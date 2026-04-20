import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Bus, MapPin, Clock, Shield, Star, ArrowRight, Users, Navigation, TrendingUp } from 'lucide-react'

const RoleSelection = () => {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleUserSelect = () => {
    navigate('/user-auth')
  }

  const handleDriverSelect = () => {
    navigate('/driver-auth')
  }

  return (
    <div className="min-h-screen bg-[#0F172A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-sky-600 to-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-4000"></div>
        
        {/* Additional Blobs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-5000"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/2 w-60 h-60 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2500"></div>
        <div className="absolute top-2/3 left-1/3 w-52 h-52 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-600 rounded-full blur-lg animate-pulse"></div>
              <div className="relative bg-slate-900 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 border border-slate-700/50">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white  tracking-tight">
            Bus<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Track</span>
          </h1>
         
        </div>

     

        {/* Role Cards */}
        <div className="max-w-5xl mx-auto">
      

          <div className="grid md:grid-cols-2 gap-8">
            {/* User Card */}
            <div 
              onClick={handleUserSelect}
              onMouseEnter={() => setHoveredCard('user')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl rounded-3xl p-8 cursor-pointer transform transition-all duration-500 border border-blue-500/30 ${hoveredCard === 'user' ? 'scale-105 shadow-2xl border-blue-400/50' : 'shadow-xl'} transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              {/* Glow Effect */}
              {hoveredCard === 'user' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              )}
              
              <div className="relative z-10">
                {/* User Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`relative transform transition-all duration-500 ${hoveredCard === 'user' ? 'scale-110 rotate-12' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-full shadow-2xl">
                      <User className="h-14 w-14 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 text-center">Passenger</h3>
                <p className="text-gray-300 mb-8 text-center leading-relaxed">
                  Experience seamless travel with real-time bus tracking, accurate ETAs, and smart route planning
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 ${hoveredCard === 'user' ? 'translate-x-2' : ''}`}>
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Live Tracking</div>
                      <div className="text-gray-400 text-sm">Real-time bus locations</div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 delay-100 ${hoveredCard === 'user' ? 'translate-x-2' : ''}`}>
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Smart ETA</div>
                      <div className="text-gray-400 text-sm">AI-powered predictions</div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 delay-200 ${hoveredCard === 'user' ? 'translate-x-2' : ''}`}>
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Route Analytics</div>
                      <div className="text-gray-400 text-sm">Optimal journey planning</div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group">
                  <span>Continue as Passenger</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Driver Card */}
            <div 
              onClick={handleDriverSelect}
              onMouseEnter={() => setHoveredCard('driver')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-gradient-to-br from-green-600/20 to-emerald-800/20 backdrop-blur-xl rounded-3xl p-8 cursor-pointer transform transition-all duration-500 border border-green-500/30 ${hoveredCard === 'driver' ? 'scale-105 shadow-2xl border-green-400/50' : 'shadow-xl'} transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              {/* Glow Effect */}
              {hoveredCard === 'driver' && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl"></div>
              )}
              
              <div className="relative z-10">
                {/* Driver Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`relative transform transition-all duration-500 ${hoveredCard === 'driver' ? 'scale-110 -rotate-12' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-full shadow-2xl">
                      <Bus className="h-14 w-14 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 text-center">Driver</h3>
                <p className="text-gray-300 mb-8 text-center leading-relaxed">
                  Manage your fleet efficiently with advanced tracking, route optimization, and passenger analytics
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 ${hoveredCard === 'driver' ? 'translate-x-2' : ''}`}>
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Fleet Management</div>
                      <div className="text-gray-400 text-sm">Complete vehicle control</div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 delay-100 ${hoveredCard === 'driver' ? 'translate-x-2' : ''}`}>
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <Navigation className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Smart Routing</div>
                      <div className="text-gray-400 text-sm">AI-optimized paths</div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 transform transition-all duration-300 delay-200 ${hoveredCard === 'driver' ? 'translate-x-2' : ''}`}>
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Passenger Insights</div>
                      <div className="text-gray-400 text-sm">Real-time analytics</div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group">
                  <span>Continue as Driver</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Live System</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">4.9 Rating</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          © 2024 BusTrack. Revolutionizing public transport with cutting-edge technology.
        </p>
      </div>

      <style jsx>{`
        @keyframes animation-delay-2000 {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 0.2; }
        }
        @keyframes animation-delay-4000 {
          0%, 60%, 100% { opacity: 0; }
          30% { opacity: 0.2; }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-3500 {
          animation-delay: 3.5s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </div>
  )
}

export default RoleSelection
