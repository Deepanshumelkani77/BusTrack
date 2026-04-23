const mongoose=require('mongoose');
const Driver=require('./Driver');

const busSchema=mongoose.Schema({


 driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver"
  },

  busNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
    busType: {
    type: String,
    default: "Normal"
  },


  totalSeats: {
    type: Number,
    required: true
  },
   currentOccupancy:{
    type: Number,
    default: 0
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

  image: {
    type: String   // Cloudinary URL
  },
 status:{
type:String,  
enum:["active","inactive"],
 }
 ,
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Bus=mongoose.model('Bus',busSchema);
module.exports=Bus;