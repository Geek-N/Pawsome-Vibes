//const express = require('express');
//const axios = require('axios');

//const router = express.Router();
//const API_URL = 'https://www.affirmations.dev/';

// A function to get a random affirmation
//async function getAffirmation() {
 // try {
 //   const response = await axios.get(API_URL);
  //  return response.data.affirmation;
  //} catch (error) {
   // console.error('Error fetching affirmation:', error);
  //  return 'Sorry, I could not fetch a new affirmation at this time.';
 //}
//}


// Affirmation route
//router.get('/quote', async (req, res) => {
  //const affirmation = await getAffirmation();
  //res.json({ quote: affirmation });
//});

//module.exports = router;



module.exports = (sequelize, DataTypes) => {
  const Affirmation = sequelize.define('Affirmation', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Affirmation;
};
