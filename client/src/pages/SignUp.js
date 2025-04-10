import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      try {
        // Sending email to the backend
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          alert(`Thank you for signing up, ${email}! You'll receive daily affirmations.`);
        } else {
          alert('Failed to send email.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error signing up, please try again later.');
      }

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
