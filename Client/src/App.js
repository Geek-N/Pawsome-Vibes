// App.js
import React, { useState } from "react";
import './index.css'; // Import your styles

const App = () => {
  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // State for the email
  const [email, setEmail] = useState("");

  // Handle Dark Mode Toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Handle Email Signup
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`Thank you for signing up, ${email}! You'll receive daily affirmations.`);
      setEmail(""); // Reset input field
    }
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
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
        <p>"You are doing great! Keep it up!"</p>
        <button>Get New Affirmation</button>
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
