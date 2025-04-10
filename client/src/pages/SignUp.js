// src/pages/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`Thank you for signing up, ${email}! You'll receive daily affirmations.`);
      setEmail("");  // Reset email input after submission
    }
  };

  return (
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
  );
};

export default SignUp;