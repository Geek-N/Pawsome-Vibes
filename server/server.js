const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sendgrid = require('@sendgrid/mail');

const { sequelize, syncDB } = require('./models');
const affirmationRoutes = require('./routes/affirmationRoutes');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Parse incoming JSON requests
app.use(express.json());

// Set up SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// POST route to send email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    const msg = {
      to: email,  // The recipient's email
      from: process.env.SENDGRID_FROM_EMAIL,  // Your verified SendGrid email
      subject: 'Welcome to Pawsome Vibes!',
      text: 'Thank you for signing up! You will start receiving daily affirmations.',
      html: '<p>Thank you for signing up! You will start receiving daily affirmations.</p>',
    };

    // Send email using SendGrid
    await sendgrid.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Affirmation routes (example)
app.use('/api/affirmations', affirmationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await syncDB();
    console.log(`🚀 Server is running on port ${PORT}`);
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
});

