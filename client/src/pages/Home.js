// Home.js
import { useState, useEffect } from "react";
import { mockAffirmations, mockDogImages } from "../services/mockData";
import Affirmation from "../components/Affirmation";
import DogImage from "../components/DogImage";
import '../styles/Home.css'; // Import the new CSS file

function Home() {
  const [affirmations, setAffirmations] = useState([]);
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setAffirmations(mockAffirmations);
      setDogImages(mockDogImages);
    }, 1000);
  }, []);

  return (
    <div className="home-container">
      <header className="mission-statement">
        <h1>🐶 Pawsome Vibes 🚀</h1>
        <p className="mission-text">
          At <strong>Pawsome Vibes</strong>, we believe that the simple, unconditional love of a dog has the power to change the way we experience the world. Our mission is to bring warmth, joy, and inspiration into the lives of our users, one wagging tail at a time. In a world that often feels fast-paced and overwhelming, we aim to offer a moment of peace and positivity, reminding you that no matter what challenges you may face, there is always beauty to be found in the little things.
          <br /><br />
          Every day, we deliver a carefully crafted combination of uplifting affirmations and heartwarming photos of furry friends—because we understand the profound impact that small acts of kindness can have on our hearts. Whether you need a reminder to slow down, a boost of confidence to face the day, or just a little smile to brighten your morning, <strong>Pawsome Vibes</strong> is here to support you.
        </p>
      </header>

      <main>
        <section className="affirmations-section">
          <h2>Daily Affirmations</h2>
          {affirmations.length > 0 ? (
            affirmations.map((affirmation) => <Affirmation key={affirmation.id} text={affirmation.text} />)
          ) : (
            <p>Loading affirmations...</p>
          )}
        </section>

        <section className="dog-images-section">
          <h2>Random Dog Pictures</h2>
          {dogImages.length > 0 ? (
            dogImages.map((url, index) => <DogImage key={index} url={url} />)
          ) : (
            <p>Loading dog images...</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
