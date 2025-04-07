const express = require('express');
const axios = require('axios');

const Affirmation = require('../models/Affirmation');

const router = express.Router();
const API_URL = 'https://www.affirmations.dev/';

// A function to get a random affirmation
async function getAffirmation() {
  try {
    const response = await axios.get(API_URL);
    return response.data.affirmation;
  } catch (error) {
    console.error('Error fetching affirmation:', error);
    return 'Sorry, I could not fetch a new affirmation at this time.';
  }
}


// Affirmation route to get a new affirmation and save to the database
router.get('/quote', async (req, res) => {
    const affirmationText = await getAffirmation();
  
    // Save the affirmation in the database
    try {
      const affirmation = await Affirmation.create({ text: affirmationText });
      res.json({ quote: affirmation.text }); // Returning the affirmation text after saving
    } catch (error) {
      console.error('Error saving affirmation:', error);
      res.status(500).json({ error: 'Unable to save affirmation.' });
    }
  });
  
  module.exports = router;