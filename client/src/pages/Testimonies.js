import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Testimonies.css';
const testimonies = [
  {
    name: "Luna's Mom",
    quote: "Pawsome Vibes gave Luna and me the daily boost we didn’t know we needed!",
    dog: "🐶",
    img: "https://placedog.net/400?id=1",
  },
  {
    name: "Max's Human",
    quote: "I love seeing Max wag his tail when our affirmation email comes in!",
    dog: "🐕",
    img: "https://placedog.net/400?id=2",
  },
  {
    name: "Bella's Buddy",
    quote: "This site is adorable and uplifting. 10/10 tail wags!",
    dog: "🐾",
    img: "https://placedog.net/400?id=3",
  },
  {
    name: "Cooper's Companion",
    quote: "Cooper barks with joy every morning after reading our affirmation!",
    dog: "🐕‍🦺",
    img: "https://placedog.net/400?id=4",
  },
];

const Testimonies = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonies.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // auto-play every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimony-new">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">What Our Pawsome Users Say</h1>

      <div className="relative w-full max-w-xl h-96">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center"
          >
            <img
              src={testimonies[index].img}
              alt={testimonies[index].name}
              className="w-24 h-24 rounded-full border-4 border-pink-300 object-cover mb-4"
            />
            <p className="text-xl text-gray-700 italic mb-4">"{testimonies[index].quote}"</p>
            <p className="text-pink-500 font-semibold text-lg">
              {testimonies[index].dog} {testimonies[index].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-pink-300 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-400 transition"
        >
          ◀️ Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-pink-300 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-400 transition"
        >
          Next ▶️
        </button>
      </div>
    </div>
  );
};

export default Testimonies;