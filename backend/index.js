const express = require('express');
const cors= require('cors');
const app=express();

app.listen(5000,()=>{
console.log("Server is running on port 5000");
});

app.use(cors());
app.use(express.json());



//mongoose
const mongoose = require('mongoose');
const connectDB= async()=>{
    try{
      await mongoose.connect(
"mongodb://deepumelkani123_db_user:Dev7777@ac-ghsi0ai-shard-00-00.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-01.t5m5dsp.mongodb.net:27017,ac-ghsi0ai-shard-00-02.t5m5dsp.mongodb.net:27017/?ssl=true&replicaSet=atlas-1usy7g-shard-0&authSource=admin&appName=Cluster0"
);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();
//Vc3xdfgLbMKYt4ko




//routes
const userRoutes=require('./routes/User');
app.use('/user',userRoutes);
const driverRoutes=require('./routes/Driver');
app.use('/driver',driverRoutes);
const busRoutes=require('./routes/Bus');
app.use('/bus',busRoutes);