const mongoose=require('mongoose');
const Driver=require('./Driver');

const busSchema=mongoose.Schema({


 driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true
  },

  busNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  totalSeats: {
    type: Number,
    required: true
  },

  busType: {
    type: String,
    default: "Normal"
  },

  city: {
    type: String,
    required: true,
    trim: true
  },

  busColor: {
    type: String,
    trim: true
  },

  manufacturer: {
    type: String,
    trim: true
  },

  year: {
    type: Number
  },

  busImage: {
    type: String   // Cloudinary URL
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Bus=mongoose.model('Bus',busSchema);
module.exports=Bus;