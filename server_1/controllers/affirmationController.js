const axios = require('axios');
const { Affirmation } = require('../models'); // Import the Affirmation model
// API URL for fetching random affirmations
const API_URL = 'https://www.affirmations.dev/';
// Function to get a random affirmation
async function getRandomAffirmation() {
  try {
    const response = await axios.get(API_URL);
    return response.data.affirmation;
  } catch (error) {
    console.error('Error fetching affirmation:', error);
    return null; // In case of an error, return null
  }
}
// Controller to get a random affirmation and save it in the database
const getAndSaveAffirmation = async (req, res) => {
  try {
    // Fetch a random affirmation
    const affirmationText = await getRandomAffirmation();
    if (!affirmationText) {
      return res.status(500).json({ error: 'Could not fetch a new affirmation.' });
    }
    // Save the affirmation to the database
    const affirmation = await Affirmation.create({ text: affirmationText });
    // Return the saved affirmation
    res.status(201).json({ affirmation: affirmation.text });
  } catch (error) {
    console.error('Error saving affirmation:', error);
    res.status(500).json({ error: 'Error saving affirmation to the database.' });
  }
};
// Controller to get all saved affirmations from the database
const getAllAffirmations = async (req, res) => {
  try {
    const affirmations = await Affirmation.findAll();
    res.status(200).json(affirmations);
  } catch (error) {
    console.error('Error fetching affirmations:', error);
    res.status(500).json({ error: 'Error retrieving affirmations from the database.' });
  }
};
// Controller to get a single random saved affirmation
const getRandomAffirmationFromDB = async (req, res) => {
  try {
    // Get a random affirmation from the database
    const affirmation = await Affirmation.findOne({
      order: Sequelize.literal('random()'), // This orders the result randomly
    });
    if (!affirmation) {
      return res.status(404).json({ error: 'No affirmations found in the database.' });
    }
    res.status(200).json({ affirmation: affirmation.text });
  } catch (error) {
    console.error('Error fetching random affirmation:', error);
    res.status(500).json({ error: 'Error retrieving random affirmation from the database.' });
  }
};
module.exports = {
  getAndSaveAffirmation,
  getAllAffirmations,
  getRandomAffirmationFromDB,
};