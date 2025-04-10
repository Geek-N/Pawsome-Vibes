import { useState, useEffect } from "react";
import { mockAffirmations, mockDogImages } from "../services/mockData";
import Affirmation from "../components/Affirmation";
import DogImage from "../components/DogImage";

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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🐶 Pawsome Vibes 🚀</h1>

      <h2>Daily Affirmations</h2>
      {affirmations.length > 0 ? (
        affirmations.map((affirmation) => <Affirmation key={affirmation.id} text={affirmation.text} />)
      ) : (
        <p>Loading affirmations...</p>
      )}

      <h2>Random Dog Pictures</h2>
      {dogImages.length > 0 ? (
        dogImages.map((url, index) => <DogImage key={index} url={url} />)
      ) : (
        <p>Loading dog images...</p>
      )}
    </div>
  );
}

export default Home;