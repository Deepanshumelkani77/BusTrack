const mongoose = require('mongoose');

const mongoURI="mongodb://deepumelkani123_db_user:Dev7777@ac-ghsi0ai-shard-00-00.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-01.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-02.t5m5dsp.mongodb.net:27017/?ssl=true&replicaSet=atlas-1usy7g-shard-0&authSource=admin&appName=Cluster0";

// Dummy Bus Data for Seeding
const busData = [
  // Haldwani Buses (10)
  {
    busNumber: "HW-01-AB-1234",
    busType: "AC Deluxe",
    totalSeats: 40,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    city: "haldwani",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "HW-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    city: "haldwani",
    busColor: "red",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "HW-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    city: "haldwani",
    busColor: "green",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    city: "haldwani",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "maintenance"
  },
  {
    busNumber: "HW-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    city: "haldwani",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    city: "haldwani",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "HW-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    city: "haldwani",
    busColor: "orange",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "HW-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    city: "haldwani",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "HW-10-ST-8901",
    busType: "Non-AC Standard",
    totalSeats: 32,
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
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    city: "delhi",
    busColor: "blue",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    city: "delhi",
    busColor: "red",
    manufacturer: "volvo",
    status: "maintenance"
  },
  {
    busNumber: "DL-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    city: "delhi",
    busColor: "green",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-05-IJ-7890",
    busType: "AC Deluxe",
    totalSeats: 38,
    city: "delhi",
    busColor: "yellow",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-06-KL-2345",
    busType: "Non-AC Standard",
    totalSeats: 42,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-07-MN-6789",
    busType: "AC Luxury",
    totalSeats: 48,
    city: "delhi",
    busColor: "silver",
    manufacturer: "volvo",
    status: "active"
  },
  {
    busNumber: "DL-08-OP-0123",
    busType: "Electric Bus",
    totalSeats: 36,
    city: "delhi",
    busColor: "orange",
    manufacturer: "tata",
    status: "active"
  },
  {
    busNumber: "DL-09-QR-4567",
    busType: "AC Deluxe",
    totalSeats: 44,
    city: "delhi",
    busColor: "black",
    manufacturer: "ashok leyland",
    status: "active"
  },
  {
    busNumber: "DL-10-ST-8901",
    busType: "Non-AC Standard",
    totalSeats: 32,
    city: "delhi",
    busColor: "white",
    manufacturer: "tata",
    status: "active"
  }
];

// Route Data for Seeding
const routeData = [
  {
    routeId: "route-001",
    routeName: "Delhi Airport - Connaught Place",
    startLocation: "Indira Gandhi International Airport",
    endLocation: "Connaught Place",
    totalDistance: 22.5,
    estimatedTime: 75,
    frequency: "15 minutes",
    activeBuses: ["DL-01-AB-1234", "DL-02-CD-5678"],
    peakHours: ["08:00-10:00", "17:00-19:00"],
    fare: {
      baseFare: 25,
      perKmFare: 2.5,
      totalFare: 81.25
    },
    stops: [
      { stopId: "stop-001", name: "Airport Terminal 3", latitude: 28.5665, longitude: 77.1211, facilities: ["Waiting Area", "Restrooms", "Food Court"] },
      { stopId: "stop-002", name: "Aerocity", latitude: 28.5560, longitude: 77.1170, facilities: ["Waiting Area", "Shelter"] },
      { stopId: "stop-003", name: "Mahipalpur", latitude: 28.5960, longitude: 77.1670, facilities: ["Waiting Area"] },
      { stopId: "stop-004", name: "Rajouri Garden", latitude: 28.6260, longitude: 77.1870, facilities: ["Waiting Area", "Restrooms"] },
      { stopId: "stop-005", name: "Patel Nagar", latitude: 28.6560, longitude: 77.2070, facilities: ["Waiting Area", "Parking"] },
      { stopId: "stop-006", name: "Connaught Place", latitude: 28.6139, longitude: 77.2090, facilities: ["Waiting Area", "Restrooms", "Food Court", "Shopping"] }
    ]
  },
  {
    routeId: "route-002",
    routeName: "Karol Bagh - Nehru Place",
    startLocation: "Karol Bagh",
    endLocation: "Nehru Place",
    totalDistance: 18.7,
    estimatedTime: 60,
    frequency: "20 minutes",
    activeBuses: ["DL-02-CD-5678"],
    peakHours: ["09:00-11:00", "18:00-20:00"],
    fare: {
      baseFare: 20,
      perKmFare: 2,
      totalFare: 57.4
    },
    stops: [
      { stopId: "stop-007", name: "Karol Bagh", latitude: 28.7041, longitude: 77.1025, facilities: ["Waiting Area", "Restrooms"] },
      { stopId: "stop-008", name: "Paharganj", latitude: 28.6440, longitude: 77.2120, facilities: ["Waiting Area"] },
      { stopId: "stop-009", name: "Jor Bagh", latitude: 28.6340, longitude: 77.2020, facilities: ["Waiting Area", "Parking"] },
      { stopId: "stop-010", name: "AIIMS", latitude: 28.5660, longitude: 77.2170, facilities: ["Waiting Area", "Restrooms", "Medical"] },
      { stopId: "stop-011", name: "South Extension", latitude: 28.5760, longitude: 77.2070, facilities: ["Waiting Area", "Shopping"] },
      { stopId: "stop-012", name: "Nehru Place", latitude: 28.5860, longitude: 77.2020, facilities: ["Waiting Area", "Restrooms", "Food Court"] }
    ]
  }
];

// Driver Data for Seeding
const driverData = [
  {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@bustrac.com",
    phone: "+91-9876543210",
    licenseNumber: "DL-01-2023-000123",
    password: "password123",
    assignedBus: "DL-01-AB-1234",
    experience: 5,
    rating: 4.5,
    totalTrips: 1250,
    status: "active",
    lastLogin: new Date()
  },
  {
    name: "Amit Sharma",
    email: "amit.sharma@bustrac.com",
    phone: "+91-9876543211",
    licenseNumber: "DL-02-2023-000456",
    password: "password123",
    assignedBus: "DL-02-CD-5678",
    experience: 3,
    rating: 4.2,
    totalTrips: 890,
    status: "active",
    lastLogin: new Date()
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@bustrac.com",
    phone: "+91-9876543212",
    licenseNumber: "DL-03-2023-000789",
    password: "password123",
    assignedBus: "DL-03-EF-9012",
    experience: 7,
    rating: 4.8,
    totalTrips: 2100,
    status: "active",
    lastLogin: new Date()
  },
  {
    name: "Priya Patel",
    email: "priya.patel@bustrac.com",
    phone: "+91-9876543213",
    licenseNumber: "DL-04-2023-000234",
    password: "password123",
    assignedBus: "DL-04-GH-3456",
    experience: 4,
    rating: 4.6,
    totalTrips: 1560,
    status: "active",
    lastLogin: new Date()
  }
];

// User Data for Seeding
const userData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91-9876543210",
    password: "password123",
    preferences: {
      favoriteRoutes: ["route-001", "route-002"],
      seatPreference: "window",
      paymentMethod: "credit_card"
    },
    bookingHistory: [
      {
        bookingId: "booking-001",
        busNumber: "DL-01-AB-1234",
        route: "route-001",
        date: "2024-01-15",
        seats: ["A1", "A2"],
        totalFare: 162.50,
        status: "completed"
      }
    ],
    status: "active",
    lastLogin: new Date()
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+91-9876543211",
    password: "password123",
    preferences: {
      favoriteRoutes: ["route-002"],
      seatPreference: "aisle",
      paymentMethod: "upi"
    },
    bookingHistory: [
      {
        bookingId: "booking-002",
        busNumber: "DL-02-CD-5678",
        route: "route-002",
        date: "2024-01-16",
        seats: ["B3", "B4"],
        totalFare: 114.80,
        status: "completed"
      }
    ],
    status: "active",
    lastLogin: new Date()
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+91-9876543212",
    password: "password123",
    preferences: {
      favoriteRoutes: ["route-001"],
      seatPreference: "window",
      paymentMethod: "cash"
    },
    bookingHistory: [],
    status: "active",
    lastLogin: new Date()
  }
];

// Function to seed data
const seedData = async () => {
  try {
    console.log('Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing data
    const collections = ['buses', 'routes', 'drivers', 'users'];
    for (const collection of collections) {
      try {
        await mongoose.connection.db.collection(collection).deleteMany({});
        console.log(`Cleared ${collection} collection`);
      } catch (error) {
        console.log(`Error clearing ${collection}:`, error.message);
      }
    }

    // Insert bus data
    try {
      await mongoose.connection.db.collection('buses').insertMany(busData);
      console.log(`Inserted ${busData.length} buses`);
    } catch (error) {
      console.log('Error inserting buses:', error.message);
    }

    // Insert route data
    try {
      await mongoose.connection.db.collection('routes').insertMany(routeData);
      console.log(`Inserted ${routeData.length} routes`);
    } catch (error) {
      console.log('Error inserting routes:', error.message);
    }

    // Insert driver data
    try {
      await mongoose.connection.db.collection('drivers').insertMany(driverData);
      console.log(`Inserted ${driverData.length} drivers`);
    } catch (error) {
      console.log('Error inserting drivers:', error.message);
    }

    // Insert user data
    try {
      await mongoose.connection.db.collection('users').insertMany(userData);
      console.log(`Inserted ${userData.length} users`);
    } catch (error) {
      console.log('Error inserting users:', error.message);
    }

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

module.exports = { seedData, busData, routeData, driverData, userData };


