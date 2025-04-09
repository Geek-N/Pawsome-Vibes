const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Import the User model
//  User Signup
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  // Validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide username, email, and password' });
  }
  try {
    // User exists?
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the new user in DB
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET, // JWT Secret stored in the environment variable
      { expiresIn: '1h' } // Token expiration time
    );
    // Return user and token in the response
    res.status(201).json({
      message: 'User created successfully!',
      token, // Send the JWT token
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Server error during signup' });
  }
};
//  User Login
const login = async (req, res) => {
  const { email, password } = req.body;
  //  Input validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide both email and password' });
  }
  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // Create a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, // JWT Secret stored in the environment variable
      { expiresIn: '1h' } // Token expiration time
    );
    // Return the user and token in the response
    res.json({
      message: 'Login successful!',
      token, // Send the JWT token
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
};
module.exports = {
  signup,
  login,
};