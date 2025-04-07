// App.js
import React, { useState } from "react";
import './index.css'; // Import your styles

const Signup = () => {
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
        <h2>Signup</h2>
      </header>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Step 1</h2>
        <p>"Go to the start"</p>
      </div>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Step 2</h2>
        <p>"Do stuff here"</p>
      </div>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Step 3</h2>
        <p>"Now you're done"</p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Pawsome Vibes. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
