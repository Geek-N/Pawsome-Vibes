// src/services/mockData.js

// Export the mockAffirmations array
export const mockAffirmations = [
  { id: 1, text: "You are stronger than you think! 💪" },
  { id: 2, text: "Keep pushing forward! 🚀" },
  { id: 3, text: "You are enough, just as you are. 🌟" },
];

// Make the fetchAffirmation function return a promise
export const fetchAffirmation = () => {
  return new Promise((resolve, reject) => {
    const randomAffirmation = mockAffirmations[Math.floor(Math.random() * mockAffirmations.length)].text;
    resolve(randomAffirmation);
  });
};

// Export mock dog images
export const mockDogImages = [
  "https://placedog.net/400/300",
  "https://placedog.net/500/400",
  "https://placedog.net/600/500",
];
