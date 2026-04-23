const mongoose = require('mongoose');

const mongoURI="mongodb://deepumelkani123_db_user:Dev7777@ac-ghsi0ai-shard-00-00.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-01.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-02.t5m5dsp.mongodb.net:27017/?ssl=true&replicaSet=atlas-1usy7g-shard-0&authSource=admin&appName=Cluster0";

// Dummy Bus Data for Seeding
const busData = [
  {
    busNumber: "DL-01-AB-1234",
    busType: "AC Deluxe",
    totalSeats: 40,
    currentOccupancy: 25,
  city:"haldwani",
    busColor: "white",
     manufacturer:"tata",
    status: "active",
  
    
  
    },
    schedule: {
      startTime: "06:00",
      endTime: "22:00",
      frequency: "15 minutes",
      peakHours: ["08:00-10:00", "17:00-19:00"]
    },
    amenities: ["WiFi", "AC", "Charging Ports", "Emergency Exit"],
    lastUpdated: new Date()
  },
  {
    busNumber: "DL-02-CD-5678",
    busType: "Non-AC Standard",
    totalSeats: 35,
    currentOccupancy: 18,
    driverName: "Amit Sharma",
    driverPhone: "+91-9876543211",
    licenseNumber: "DL-02-2023-000456",
    status: "active",
    currentLocation: {
      latitude: 28.7041,
      longitude: 77.1025,
      address: "Karol Bagh, New Delhi"
    },
    route: {
      routeId: "route-002",
      routeName: "Karol Bagh - Nehru Place",
      startLocation: "Karol Bagh",
      endLocation: "Nehru Place",
      stops: [
        { name: "Karol Bagh", latitude: 28.7041, longitude: 77.1025, arrivalTime: "06:30" },
        { name: "Paharganj", latitude: 28.6440, longitude: 77.2120, arrivalTime: "06:45" },
        { name: "Jor Bagh", latitude: 28.6340, longitude: 77.2020, arrivalTime: "07:00" },
        { name: "AIIMS", latitude: 28.5660, longitude: 77.2170, arrivalTime: "07:15" },
        { name: "South Extension", latitude: 28.5760, longitude: 77.2070, arrivalTime: "07:30" },
        { name: "Nehru Place", latitude: 28.5860, longitude: 77.2020, arrivalTime: "07:45" }
      ],
      totalDistance: 18.7,
      estimatedTime: 60
    },
    schedule: {
      startTime: "06:30",
      endTime: "21:30",
      frequency: "20 minutes",
      peakHours: ["09:00-11:00", "18:00-20:00"]
    },
    amenities: ["WiFi", "Emergency Exit"],
    lastUpdated: new Date()
  },
  {
    busNumber: "DL-03-EF-9012",
    busType: "AC Luxury",
    totalSeats: 45,
    currentOccupancy: 32,
    driverName: "Vikram Singh",
    driverPhone: "+91-9876543212",
    licenseNumber: "DL-03-2023-000789",
    status: "maintenance",
    currentLocation: {
      latitude: 28.5355,
      longitude: 77.2550,
      address: "Noida Sector 18, Noida"
    },
    route: {
      routeId: "route-003",
      routeName: "Noida Sector 18 - Gurgaon",
      startLocation: "Noida Sector 18",
      endLocation: "Gurgaon Sector 14",
      stops: [
        { name: "Noida Sector 18", latitude: 28.5355, longitude: 77.2550, arrivalTime: "07:00" },
        { name: "Noida Sector 15", latitude: 28.5455, longitude: 77.2450, arrivalTime: "07:15" },
        { name: "Noida Sector 12", latitude: 28.5555, longitude: 77.2350, arrivalTime: "07:30" },
        { name: "DND Flyway", latitude: 28.5755, longitude: 77.2250, arrivalTime: "07:45" },
        { name: "Gurgaon Sector 18", latitude: 28.5855, longitude: 77.2150, arrivalTime: "08:00" },
        { name: "Gurgaon Sector 14", latitude: 28.5955, longitude: 77.2050, arrivalTime: "08:15" }
      ],
      totalDistance: 35.2,
      estimatedTime: 90
    },
    schedule: {
      startTime: "07:00",
      endTime: "21:00",
      frequency: "25 minutes",
      peakHours: ["08:00-10:00", "17:00-19:00"]
    },
    amenities: ["WiFi", "AC", "Charging Ports", "Entertainment System", "Emergency Exit"],
    lastUpdated: new Date()
  },
  {
    busNumber: "DL-04-GH-3456",
    busType: "Electric Bus",
    totalSeats: 50,
    currentOccupancy: 28,
    driverName: "Priya Patel",
    driverPhone: "+91-9876543213",
    licenseNumber: "DL-04-2023-000234",
    status: "active",
    currentLocation: {
      latitude: 28.6280,
      longitude: 77.3770,
      address: "East Delhi, New Delhi"
    },
    route: {
      routeId: "route-004",
      routeName: "East Delhi - Central Delhi",
      startLocation: "East Delhi",
      endLocation: "Central Delhi",
      stops: [
        { name: "East Delhi", latitude: 28.6280, longitude: 77.3770, arrivalTime: "06:00" },
        { name: "Laxmi Nagar", latitude: 28.6180, longitude: 77.3670, arrivalTime: "06:20" },
        { name: "Preet Vihar", latitude: 28.6080, longitude: 77.3570, arrivalTime: "06:40" },
        { name: "Yamuna Vihar", latitude: 28.5980, longitude: 77.3470, arrivalTime: "07:00" },
        { name: "Shahdara", latitude: 28.6880, longitude: 77.3870, arrivalTime: "07:20" },
        { name: "Central Delhi", latitude: 28.6780, longitude: 77.3970, arrivalTime: "07:40" }
      ],
      totalDistance: 25.8,
      estimatedTime: 80
    },
    schedule: {
      startTime: "06:00",
      endTime: "22:30",
      frequency: "12 minutes",
      peakHours: ["07:00-09:00", "17:00-19:00"]
    },
    amenities: ["WiFi", "AC", "Charging Ports", "Wheelchair Access", "Emergency Exit"],
    lastUpdated: new Date()
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


