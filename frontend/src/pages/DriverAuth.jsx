import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bus, Mail, Lock, Eye, EyeOff, ArrowLeft, Camera, Users, MapPin, Shield, Star, Navigation, TrendingUp } from 'lucide-react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const DriverAuth = () => {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
 
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: ''
  })
 const [isSignup, setIsSignup] = useState(false);
  const { driverSignup } = useContext(AppContext);
  const { driverLogin } = useContext(AppContext);



  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


const handleSubmit = async (e) => {
    e.preventDefault();

  // ✅ Password match check (ONLY for signup)
  if (!isLogin && formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }


    try {
      if (isSignup) {
        await driverSignup(formData.name, formData.email, formData.password,formData.licenseNumber);
       
        navigate("/");
      } else {
        await driverLogin(formData.email, formData.password);
       
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };



  const toggleForm = () => {
    setIsLogin(!isLogin)
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      licenseNumber: ''
    })
   
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-green-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        
        {/* Additional Blobs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-green-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-5000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Role Selection</span>
          </button>
        </div>

        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className={`text-center mb-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110">
                  <Bus className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {isLogin ? 'Driver Portal' : 'Register Your Bus'}
            </h1>
            <p className="text-gray-600 text-lg">
              {isLogin ? 'Sign in to manage your fleet' : 'Join our network of professional drivers'}
            </p>
          </div>

          {/* Form */}
          <div className={`bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              {!isLogin && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 text-sm font-semibold">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-gray-700 text-sm font-semibold">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-gray-700 text-sm font-semibold">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-gray-700 text-sm font-semibold">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* License Number Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-gray-700 text-sm font-semibold">License Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Shield className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                      placeholder="Enter your license number"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                {isLogin ? 'Sign In' : 'Register Bus'}
              </button>
            </form>

            {/* Toggle Form */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  onClick={() => {
  toggleForm();
  setIsSignup(!isSignup);
}}
   
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className={`mt-8 grid grid-cols-3 gap-4 transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Shield className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="text-gray-700 text-xs font-semibold">Fleet Management</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Navigation className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                <div className="text-gray-700 text-xs font-semibold">Smart Routing</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="h-6 w-6 text-teal-500 mx-auto mb-2" />
                <div className="text-gray-700 text-xs font-semibold">Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animation-delay-2000 {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 0.4; }
        }
        @keyframes animation-delay-4000 {
          0%, 60%, 100% { opacity: 0; }
          30% { opacity: 0.4; }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
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

export default DriverAuth
