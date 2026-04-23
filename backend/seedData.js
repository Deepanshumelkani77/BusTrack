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
    status: "active",
image:
"https://i.pinimg.com/1200x/56/ef/93/56ef9366dd3bbf3b72214e577a6d7199.jpg"
  },
  {
    busNumber: "HW-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active",
    image:
"https://i.pinimg.com/1200x/90/a7/e4/90a7e4877354c8dd2171497c39d81eff.jpg"
  },
  {
    busNumber: "HW-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "red",
    manufacturer: "volvo",
    status: "active",
    image:"https://i.pinimg.com/736x/b0/b6/2b/b0b62b1e32d31bdb2c403b0bd06f66ee.jpg"
  },
  {
    busNumber: "HW-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "green",
    manufacturer: "tata",
    status: "active",
    image:"https://i.pinimg.com/736x/3e/a6/94/3ea69419587fdf513f9bc21a3bd77072.jpg"
  },
  {
    busNumber: "HW-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "inactive",
    image:"https://i.pinimg.com/736x/15/61/e9/1561e9ee9da9e2133b3b4560300aaadd.jpg"
  },
  {
    busNumber: "HW-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active",
    image:"https://i.pinimg.com/736x/73/10/0b/73100bc619c9d10d3e693b38291b075c.jpg"
  },
  {
    busNumber: "HW-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active",
    image:"https://i.pinimg.com/1200x/c2/38/35/c2383536d6b5e70f91baaec8a79a1307.jpg"
  },
  {
    busNumber: "HW-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "orange",
    manufacturer: "tata",
    status: "active",
    image:
"https://i.pinimg.com/1200x/c2/38/35/c2383536d6b5e70f91baaec8a79a1307.jpg"
  },
  {
    busNumber: "HW-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active",
    
image:
"https://i.pinimg.com/736x/3e/a6/94/3ea69419587fdf513f9bc21a3bd77072.jpg"
  },
  {
    busNumber: "HW-10-ST-8901",
    busType: "Non-AC Standard",
    totalSeats: 32,
    currentOccupancy: 0,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active",
    
image:
"https://i.pinimg.com/736x/cf/c5/41/cfc541f50a8c3df730d3d578c90e94f7.jpg"
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
    status: "active",
    
image:
"https://i.pinimg.com/736x/15/61/e9/1561e9ee9da9e2133b3b4560300aaadd.jpg"
  },
  {
    busNumber: "DL-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active",
    
image:
"https://i.pinimg.com/1200x/49/e6/01/49e60113d1c24142b1bddf867a902dfb.jpg"
  },
  {
    busNumber: "DL-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "red",
    manufacturer: "volvo",
    status: "inactive",
    
image:
"https://i.pinimg.com/1200x/56/ef/93/56ef9366dd3bbf3b72214e577a6d7199.jpg"
  },
  {
    busNumber: "DL-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "green",
    manufacturer: "tata",
    status: "active",
    
image:
"https://i.pinimg.com/736x/b0/b6/2b/b0b62b1e32d31bdb2c403b0bd06f66ee.jpg"
  },
  {
    busNumber: "DL-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "active",
    image:
"https://i.pinimg.com/736x/73/10/0b/73100bc619c9d10d3e693b38291b075c.jpg"
  },
  {
    busNumber: "DL-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active",
    image:
"https://i.pinimg.com/736x/cf/c5/41/cfc541f50a8c3df730d3d578c90e94f7.jpg"
  },
  {
    busNumber: "DL-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active",
    image:
"https://i.pinimg.com/1200x/fb/bb/e0/fbbbe04361e52b88c0865c54fa711ac7.jpg"
  },
  {
    busNumber: "DL-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "orange",
    manufacturer: "tata",
    status: "active",
    image:
"https://i.pinimg.com/1200x/49/e6/01/49e60113d1c24142b1bddf867a902dfb.jpg"
  },
  {
    busNumber: "DL-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    currentOccupancy: 0,
    city: "delhi",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active",
    image:
"https://i.pinimg.com/1200x/56/ef/93/56ef9366dd3bbf3b72214e577a6d7199.jpg"
  },
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

