// src/pages/AffirmationPage.js
import React, { useState, useEffect } from "react";
import { fetchAffirmation } from '../services/mockData';  // Import the fetchAffirmation function

const AffirmationPage = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Use async/await to fetch the affirmation
    const getAffirmation = async () => {
      const randomAffirmation = await fetchAffirmation();  // Wait for the promise to resolve
      setQuote(randomAffirmation);
    };
    
    getAffirmation();  // Call the async function to get the affirmation
  }, []);

  return (
    <div>
      <h1>Affirmation of the Day</h1>
      <p>{quote}</p>
    </div>
  );
};

export default AffirmationPage;
