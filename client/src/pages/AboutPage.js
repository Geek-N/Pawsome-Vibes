
import React from 'react';
import { motion } from 'framer-motion';
import '../AboutPage.css';

const dogImages = [
  '/images/dogs/beagle.png',
  '/images/dogs/golden-retriever.png',
  '/images/dogs/french-bulldog.png',
  '/images/dogs/dalmatian.png',
  '/images/dogs/corgi.png',
  '/images/dogs/husky.png',
  '/images/dogs/shiba.png',
  '/images/dogs/chihuahua.png',
  '/images/dogs/pug.png',
  '/images/dogs/bernese.png'
];

const AboutPage = () => {
  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hey there! We created <strong>Pawsome Vibes</strong> because, honestly, life can be <em>ruff</em> sometimes—and I found that a cute dog and a kind word can go a long way.
        This app was born from my own journey with mental health, where I discovered that small moments of joy (like a goofy pup and a thoughtful affirmation) really can shift your whole day.
      </motion.p>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Every photo and message you see on Pawsome Vibes is picked with love—to lift you up, make you smile, and remind you that you’re not alone.
        Whether you need a little boost in the morning or something to get you through a tough moment, we’re here, one tail wag at a time.
      </motion.p>

      <motion.h2
        className="about-welcome"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        Welcome to the pack 💛🐶
      </motion.h2>

      <div className="dog-row">
        {dogImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Dog ${index + 1}`}
            className="dog-img"
            whileHover={{ scale: 1.1 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 + index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;