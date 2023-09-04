const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils");
var parser = require("ua-parser-js");


// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all the required fields.");
    }
  
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters.");
    }

      // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already in use.");
  }

    // Get UserAgent
    const ua = parser(req.headers["user-agent"]);
    console.log(ua);
    const userAgent = [ua.ua];  

  //   Create new user
  const user = await User.create({
    name,
    email,
    password,
    userAgent,
  });

    // Generate Token
    const token = generateToken(user._id);

      // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, phone, bio, photo, role, isVerified } = user;

    res.status(201).json({
      _id,
      name,
      email,
      phone,
      bio,
      photo,
      role,
      isVerified,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});


module.exports = {
    registerUser,
};