const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


exports.signupUser=async(req,res)=>{

 try {
    const { name, email, password } = req.body;
console.log(req.body);
    // check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }


}

exports.loginUser=async(req,res)=>{


    try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your-jwt-secret-key",
      { expiresIn: "24h" }
    );

    // ✅ Save token & user in cookies so both apps can use them
    res.cookie("token", token, { httpOnly: false, sameSite: "lax" });
    res.cookie("user", JSON.stringify({ id: user._id, name: user.name, email: user.email }), {
      httpOnly: false,
      sameSite: "lax"
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }


}