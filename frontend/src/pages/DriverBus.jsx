import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bus, MapPin, Users, Settings, ChevronRight, Clock, Star, CheckCircle } from 'lucide-react'
import axios from 'axios'

const DriverBus = () => {
  const navigate = useNavigate()
  const [buses, setBuses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBus, setSelectedBus] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCity, setFilterCity] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    fetchBuses()
  }, [])

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/buses')
      setBuses(response.data)
    } catch (error) {
      console.error('Error fetching buses:', error)
      // Fallback to dummy data if API fails
      setBuses([
        {
          _id: '1',
          busNumber: 'HW-01-AB-1234',
          busType: 'AC Deluxe',
          totalSeats: 40,
          currentOccupancy: 0,
          city: 'haldwani',
          busColor: 'white',
          manufacturer: 'tata',
          status: 'active',
          image: 'https://i.pinimg.com/1200x/90/a7/e4/90a7e4877354c8dd2171497c39d81eff.jpg'
        },
        {
          _id: '2',
          busNumber: 'DL-02-CD-5678',
          busType: 'Non-AC Standard',
          totalSeats: 35,
          currentOccupancy: 0,
          city: 'delhi',
          busColor: 'blue',
          manufacturer: 'ashok leyland',
          status: 'active',
          image: 'https://i.pinimg.com/1200x/49/e6/01/49e60113d1c24142b1bddf867a902dfb.jpg'
        }
      ])
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Bus className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Select Your Bus</h1>
            </div>
            <button
              onClick={() => navigate('/driver-auth')}
              className="text-gray-500 hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

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