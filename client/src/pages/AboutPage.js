import React from 'react';
import { motion } from 'framer-motion';

import '../styles/AboutPage.css';

import dog01 from '../assets/dog01.jpg';
import dog02 from '../assets/dog02.jpg';
import dog03 from '../assets/dog03.jpg';
import dog04 from '../assets/dog04.jpg';
import dog05 from '../assets/dog05.jpg';
import dog06 from '../assets/dog06.jpg';
import dog07 from '../assets/dog07.jpg';
import dog08 from '../assets/dog08.jpg';
import dog09 from '../assets/dog09.jpg';
import dog10 from '../assets/dog10.jpg';

const dogImages = [
  { src: dog01, name: 'Ted' },
  { src: dog02, name: 'Rocket' },
  { src: dog03, name: "Rocket's Twin" },
  { src: dog04, name: 'Leslie' },
  { src: dog05, name: 'Baby Girl' },
  { src: dog06, name: 'Max' },
  { src: dog07, name: 'Beefcake' },
  { src: dog08, name: 'Cowboy Jones' },
  { src: dog09, name: 'Voldemort' },
  { src: dog10, name: 'Shy Guy' },
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
        Welcome to the pack 
      </motion.h2>

      <div className="dog-row">
        {dogImages.map((dog, index) => (
          <motion.div
            key={index}
            className="dog-image-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
          >
            <img src={dog.src} alt={'Dog ${index + 1}'} className="about-dog-img" />
            <motion.div
              className="dog-hover-overlay"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{dog.name}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Section for dog images moving from left to right at the bottom */}
      <motion.div
        className="dog-images-moving"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,  // Loop the animation
          repeatType: 'loop',
          duration: 10,  // Speed of movement
          ease: 'linear',  // Smooth linear movement
        }}
      >
        {dogImages.map((dog, index) => (
          <motion.div key={index} className="dog-moving-img-container">
            <motion.img
              src={dog.src}
              alt={'Moving Dog ${index + 1}'}
              className="dog-moving-img"
            />
            <p className="dog-name">{dog.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutPage;