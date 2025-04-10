import React, { useState, useEffect } from "react";
import './index.css'; // Import your styles
import Navbar from './components/Navbar';  // This should remain as is
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Correct import paths for Pages
import AboutPage from './pages/AboutPage';
import AffirmationPage from './pages/AffirmationPage';
import DogImagesPage from './pages/DogImagesPage';
import Home from './pages/Home';  // Assuming Home.js is in the /pages folder

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [quote, setQuote] = useState("You are doing great! Keep it up!");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`Thank you for signing up, ${email}! You'll receive daily affirmations.`);
      setEmail("");
    }
  };

  const fetchNewAffirmation = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/affirmations/quote');
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
    <Router>
      <div>
        {/* Navbar Section */}
        <Navbar onToggle={handleDarkModeToggle} isDarkMode={darkMode} />

         {/* Sign-up Card Section */}
         <div className="email-signup">
          <h2>Sign up for daily affirmations!</h2>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>


        {/* Card with Button for Affirmations */}
        <div className="card">
          <h2>Today's Affirmation</h2>
          <p>{quote}</p>
          <button onClick={fetchNewAffirmation}>Click for New Affirmation</button>
        </div>

        {/* Routing Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/affirmations" element={<AffirmationPage />} />
          <Route path="/dog-images" element={<DogImagesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Pawsome Vibes. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
