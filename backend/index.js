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
"mongodb+srv://deepumelkani123_db_user:Dev7777@cluster0.t5m5dsp.mongodb.net/?appName=Cluster0"
);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();
//Vc3xdfgLbMKYt4ko