const mongoose = require('mongoose');
const Bus=require('./models/Bus');
const mongoURI="mongodb://deepumelkani123_db_user:Dev7777@ac-ghsi0ai-shard-00-00.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-01.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-02.t5m5dsp.mongodb.net:27017/?ssl=true&replicaSet=atlas-1usy7g-shard-0&authSource=admin&appName=Cluster0";

// Dummy Bus Data for Seeding
const busData = [
  // Haldwani Buses (10)
  {
    busNumber: "HW-01-AB-1234",
    busType: "AC Deluxe",
    totalSeats: 40,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "HW-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "red",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "HW-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "green",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "inactive"
  },
  {
    busNumber: "HW-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "HW-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "orange",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "HW-10-ST-8901",
    busType: "Non-AC Standard",
    totalSeats: 32,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  
  // Delhi Buses (10)
  {
    busNumber: "DL-01-AB-1234",
    busType: "AC Deluxe",
    totalSeats: 40,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "red",
    manufacturer: "volvo",
    status: "inactive"
  },
  {
    busNumber: "DL-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "green",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "DL-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "orange",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-10-ST-8901",
    busType: "Non-AC Standard",
    totalSeats: 32,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  }
];

// Function to seed data
const seedData = async () => {
  try {
    console.log('Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing bus data
    await Bus.deleteMany({});
    console.log('Cleared buses collection');

    // Insert bus data
    await Bus.insertMany(busData);
    console.log(`Inserted ${busData.length} buses`);

    console.log('Database seeding completed!');
    await mongoose.disconnect();
    
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedData();
}

module.exports = { seedData, busData };

