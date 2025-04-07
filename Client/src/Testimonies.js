// App.js
import React, { useState } from "react";
import './index.css'; // Import your styles

const Testimonies = () => {
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
        <h2>Testimonies</h2>
      </header>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Testimony 1</h2>
        <p>"It's aight"</p>
      </div>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Testimony 2</h2>
        <p>"I like it"</p>
      </div>

      {/* Affirmation Card */}
      <div className="card">
        <h2>Testimony 3</h2>
        <p>"I love it"</p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Pawsome Vibes. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Testimonies;
