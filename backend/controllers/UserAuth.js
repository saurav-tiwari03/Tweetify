const User = require('./../models/user');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }
    if (!validator.isLength(password, { min: 6 })) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Check if user exists
    const exists = await User.findOne({ $or: [{ name }, { email }] });
    if (exists) {
      throw new Error(`User ${name} or ${email} already exists`);
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ name, email, password: hashPassword });

    const payLoad = {
      name:user.name,
      email:user.email,
      id:user._id,
    }

    const token = jwt.sign({payLoad},process.env.SECRET_KEY,{expiresIn:'3d'});

    res.status(200).json({
      success: true,
      data: { name, email ,token},
      message: `User ${name} created successfully`
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Please enter a valid email and password');
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const payLoad = {
      name:user.name,
      email:user.email,
      id:user._id,
    }

    const userFound = await bcrypt.compare(password, user.password);
    if (!userFound) {
      throw new Error('Invalid credentials');
    }
    let token = jwt.sign({payLoad},process.env.SECRET_KEY,{expiresIn: '3d'});

    res.status(200).json({
      success: true,
      data: {email ,token},
      message: `Hello ${user.name}`
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};
