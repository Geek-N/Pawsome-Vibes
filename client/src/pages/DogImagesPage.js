import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DogImagesPage.css';

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
import dog11 from '../assets/dog11.jpg';
import dog12 from '../assets/dog12.jpg';
import dog13 from '../assets/dog13.jpg';
import dog14 from '../assets/dog14.jpg';

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
  { src: dog11, name: 'Daisy' },
  { src: dog12, name: 'Sachin' },
  { src: dog13, name: 'Michael' },
  { src: dog14, name: 'Kratos' },
];

const DogImagesPage = () => {
  return (
    <div className="dog-images-container">
      <motion.h1
        className="dog-images-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Pawsome Dogs 🐶💛
      </motion.h1>

      <div className="dog-images-grid">
        {dogImages.map((dog, index) => (
          <motion.div
            key={index}
            className="dog-image-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
          >
            <img src={dog.src} alt={`Dog ${index + 1}`} className="dog-img" />
            <motion.div
              className="dog-hover-overlay"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{dog.name}</p> {/* Display dog name */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DogImagesPage;
