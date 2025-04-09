const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize, syncDB } = require('./models');

const affirmationRoutes = require('./routes/affirmationRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Change to frontend URL in production
  credentials: true
}));

app.use(express.json());


app.use('/api/affirmations', affirmationRoutes);

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

