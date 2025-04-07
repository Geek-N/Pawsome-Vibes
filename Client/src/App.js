import React, { useState, useEffect } from "react";
import './index.css'; // Import your styles

const App = () => {
  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // State for the email
  const [email, setEmail] = useState("");

  // State for the affirmation quote
  const [quote, setQuote] = useState("You are doing great! Keep it up!");

  // Handle Dark Mode Toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  
  // Handle Email Signup
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`Thank you for signing up, ${email}! You'll receive daily affirmations.`);
      setEmail(""); 
    }
  };

  // Fetch new affirmation
  const fetchNewAffirmation = async () => {
    try {
      const response = await fetch("http://localhost:5000/quote");  // Update the port if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching affirmation:", error);
      setQuote("Oops! Couldn't fetch a new affirmation.");
    }
  };
  

  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Pawsome Vibes 🐶</h1>
        <button id="toggleDarkMode" onClick={handleDarkModeToggle}>
          Toggle Dark Mode
        </button>
      </header>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Affirmation of the Day</h2>
        <p>"{quote}"</p>
        <button onClick={fetchNewAffirmation}>Get New Affirmation</button>
      </div>

      {/* Email Signup Section */}
      <div className="email-signup">
        <h3>Sign up for daily affirmations!</h3>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="emailInput"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Dog Image Animation */}
      <div className="dog-running">
        <img src="/DOG_RUN.png" alt="Running Dog" style={{ width: '200px', height: 'auto' }} />
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Pawsome Vibes. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
