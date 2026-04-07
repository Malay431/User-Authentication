const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "User Already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.json({ message: "User Created Successfully" });
  } catch (err) {
    return res.json({ error : err });
  }
};


const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "All Fields are required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  console.log(user)
  try {
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: "Password Incorrect" });
    }
    const token = await jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res.status(200).json({ token, user: user, message: "LoginIn Successful" });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

module.exports = {
  signupController,
  loginController,
};
