const Driver=require('../models/Driver');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


exports.signupDriver=async(req,res)=>{

 try {
    const { name, email, password, licenseNumber } = req.body;
console.log(req.body);
    // check if user already exists
    let existingDriver = await Driver.findOne({ email });
    if (existingDriver) {
      return res.status(400).json({ message: "Driver already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newDriver = new Driver({ name, email, password: hashedPassword, licenseNumber });
    await newDriver.save();

    res.status(201).json({ message: "Driver registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }


}

exports.loginDriver=async(req,res)=>{


    try {
    const { email, password } = req.body;

    const driver = await Driver.findOne({ email });
    if (!driver) return res.status(400).json({ message: "Driver not found" });

    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create JWT token
    const driverToken = jwt.sign(
      { id: driver._id, email: driver.email },
      "your-jwt-secret-key",
      { expiresIn: "24h" }
    );

    // ✅ Save token & user in cookies so both apps can use them
    res.cookie("driverToken", driverToken, { httpOnly: false, sameSite: "lax" });
    res.cookie("driver", JSON.stringify({ id: driver._id, name: driver.name, email: driver.email }), {
      httpOnly: false,
      sameSite: "lax"
    });

    res.json({
      driverToken,
      driver: { id: driver._id, name: driver.name, email: driver.email }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }


}