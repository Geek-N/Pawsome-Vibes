import React from "react";
import '../styles/AffirmationPage.css';

const AffirmationPage = () => {
  const affirmations = [
    "You're pawsitively amazing!",
    "You’ve got the bark AND the bite – go get ‘em!",
    "Every doggone day, you're getting more awesome.",
    "Who’s a good human? You are!",
    "You shine brighter than a freshly cleaned food bowl.",
    "Your vibe is wag-worthy!"
  ];

  return (
    <div className="text">
      <h1>Affirmations of the Day</h1>
      <ul className="affirmation-list">
        {affirmations.map((quote, index) => (
          <li key={index} className="affirmation-item">
            {quote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffirmationPage;
