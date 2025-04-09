const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Set up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Nodemailer transport (Gmail SMTP in this example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another SMTP provider
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password'   // Replace with your email password or an app password
  }
});

// Function to send email
async function sendDailyEmail() {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // Replace with recipient's email
    subject: 'Pawsome Vibes are headed your way',
    text: 'Here’s your inspirational quote for the day: ""',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Schedule the daily email to be sent at 8 AM every day
cron.schedule('0 8 * * *', () => {
  console.log('Sending daily email...');
  sendDailyEmail();
});

// Root route to verify server is working
app.get('/', (req, res) => {
  res.send('Pawsome Vibes!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
