import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Bus, MapPin, Users, Settings, ChevronRight, Clock, Star, CheckCircle, Menu, X, User, LogOut } from 'lucide-react'
import axios from 'axios'

const DriverBus = () => {
  const navigate = useNavigate()
  const [buses, setBuses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBus, setSelectedBus] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCity, setFilterCity] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetchBuses()
  }, [])

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/bus')
      setBuses(response.data)
    } catch (error) {
      console.error('Error fetching buses:', error)
   
    } finally {
      setLoading(false)
    }
  }

  const handleBusSelect = (bus) => {
    setSelectedBus(bus)
  }

  const handleStartTrip = () => {
    if (selectedBus) {
      // Navigate to driver dashboard with selected bus
      navigate('/driver-dashboard', { state: { selectedBus } })
    }
  }

  const filteredBuses = buses.filter(bus => {
    const matchesSearch = bus.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bus.busType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bus.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = filterCity === 'all' || bus.city === filterCity
    const matchesStatus = filterStatus === 'all' || bus.status === filterStatus
    return matchesSearch && matchesCity && matchesStatus
  })

  const BusCard = ({ bus }) => (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
        selectedBus?._id === bus._id 
          ? 'border-blue-500 shadow-blue-200' 
          : 'border-transparent hover:border-gray-200'
      }`}
      onClick={() => handleBusSelect(bus)}
    >
      <div className="relative">
        <img 
          src={bus.image} 
          alt={bus.busNumber}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          bus.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {bus.status === 'active' ? 'Available' : 'Inactive'}
        </div>
        {selectedBus?._id === bus._id && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{bus.busNumber}</h3>
            <p className="text-gray-600 font-medium">{bus.busType}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-gray-500 mb-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm capitalize">{bus.city}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{bus.totalSeats} seats</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Manufacturer</p>
            <p className="text-sm font-semibold text-gray-900 capitalize">{bus.manufacturer}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Color</p>
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2 border border-gray-300"
                style={{ backgroundColor: bus.busColor }}
              />
              <span className="text-sm font-semibold text-gray-900 capitalize">{bus.busColor}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>Ready for trip</span>
          </div>
          <ChevronRight className={`w-5 h-5 transition-colors ${
            selectedBus?._id === bus._id ? 'text-blue-500' : 'text-gray-400'
          }`} />
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading buses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Enhanced Driver Navbar - Same as UserNavbar */}
      <nav className={`bg-[#0F172A] sticky top-0 z-50 border-b border-slate-700/50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0F172A] backdrop-blur-md shadow-xl' : 'bg-[#0F172A] shadow-2xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 lg:h-18">
            
                      {/* Enhanced Logo - Same as Home.jsx */}
                      <Link to="/user-home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border border-slate-700/50">
                          <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-black text-lg lg:text-xl text-white group-hover:text-slate-200 transition-all duration-300">
                            BusTrac
                          </span>
                          <span className="text-xs text-slate-400 font-medium hidden sm:block">Smart Transportation</span>
                        </div>
                      </Link>


            {/* Center Navigation */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <span className="text-white font-semibold text-lg">Bus Selection</span>
            </div>

            {/* Right Side - Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 transition-all duration-200"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10  rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 lg:w-5 lg:h-5 text-slate-300" />
                  </div>
                
                  <ChevronRight className={`w-4 h-4 text-slate-300 transition-transform duration-200 ${
                    isProfileOpen ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="p-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Driver Account</p>
                          <p className="text-xs text-slate-500">driver@bustrac.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 transition-all duration-200 w-full text-left">
                        <Settings className="w-4 h-4" />
                        <span className="font-medium">Settings</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          navigate('/driver-auth');
                        }}
                        className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-all duration-200 w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isMenuOpen && (
            <aside className="lg:hidden">
              <div className="fixed inset-0 z-50 flex">
                <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
                <div className="relative flex w-64 max-w-full h-full bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8s4-4.5 4-8h8c0 3.5 3.58 4 8s4 4.5 4 8zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0C.83 0 1.5.67 1.5 1.5s-.67-1.5-1.5-1.5S15.33 14 14.5 14s-1.5.67-1.5-1.5S13.33 17 14.5 17zm1.5-6H8v1h8v-1z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">Smart</div>
                          <div className="text-sm text-slate-300">Transportation</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-200"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex-1 px-6 py-4 space-y-4">
                      <div className="text-white font-semibold text-lg mb-6">Bus Selection</div>
                      
                      <div className="pt-4 border-t border-slate-700">
                        <div className="space-y-2">
                          <button className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 transition-all duration-200 w-full text-left">
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                          </button>
                          <button
                            onClick={() => {
                              setIsMenuOpen(false);
                              navigate('/driver-auth');
                            }}
                            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-all duration-200 w-full text-left"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by bus number, type, or manufacturer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Cities</option>
                <option value="haldwani">Haldwani</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Available</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <BusCard key={bus._id} bus={bus} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Bus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No buses found matching your criteria</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        {selectedBus && (
          <div className="fixed bottom-8 right-8">
            <button
              onClick={handleStartTrip}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
            >
              <span className="font-semibold">Start Trip</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DriverBus