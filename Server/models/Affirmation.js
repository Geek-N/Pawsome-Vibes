const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;


// A function to get a random affirmation
async function getInspirationalQuote() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    // Extract the quote text from the response
    return response.data.data[0].quoteText;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Sorry, I could not fetch a quote at this time.';
  }
}

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Inspirational Quote Generator!');
});

// Quote route
app.get('/quote', async (req, res) => {
  const quote = await getInspirationalQuote();
  res.json({ quote });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
