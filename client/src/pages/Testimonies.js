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

// Testimonials array
const testimonials = [
  {
    quote: "Every morning, I wake up to a wagging tail and a warm affirmation in my inbox. Pawsome Vibes truly brightens my day before it even starts.",
    name: "Jessie R.",
    role: "Dog mom & coffee lover"
  },
  {
    quote: "I didn’t realize how much I needed this until I started receiving my daily email. It's like a little hug from the universe with a puppy attached.",
    name: "Liam G.",
    role: "Teacher"
  },
  {
    quote: "Pawsome Vibes helped me through a tough patch. These adorable photos and kind words gave me something to look forward to every single day.",
    name: "Ava S.",
    role: "Mental health advocate"
  },
  {
    quote: "I’m not a morning person. But Pawsome Vibes? It gets me to open my email at 6 a.m. That says everything.",
    name: "Tyler M.",
    role: "Night owl turned early riser"
  },
  {
    quote: "You know what the world needs? More dogs and more kindness. This app delivers both, daily.",
    name: "Maya P.",
    role: "College student"
  },
  {
    quote: "I signed up on a whim—and I’m so glad I did. These daily affirmations and fuzzy faces are the perfect pick-me-up.",
    name: "Carlos D.",
    role: "Graphic designer"
  },
  {
    quote: "My kids love opening our ‘Pawsome Email’ every morning before school. It’s become part of our routine, and it always starts the day with smiles.",
    name: "Erin B.",
    role: "Busy mom of 3"
  },
  {
    quote: "Some days are hard, but Pawsome Vibes makes them a little softer. A daily reminder that there’s still joy out there.",
    name: "James W.",
    role: "Retired veteran"
  },
  {
    quote: "This app is self-care in its cutest form. It’s like therapy... but with dogs.",
    name: "Nicole L.",
    role: "Yoga instructor"
  },
  {
    quote: "Pawsome Vibes is paws-itively perfect. I’ve even started forwarding the emails to friends and coworkers—it’s contagious happiness.",
    name: "Ravi S.",
    role: "Office manager"
  },
  {
    quote: "It’s amazing how something so simple can have such a huge impact on your mood. This app changed my mornings.",
    name: "Hailey T.",
    role: "Freelancer"
  },
  {
    quote: "I’ve struggled with anxiety, and these emails genuinely help. They remind me to slow down, breathe, and appreciate the little things—like puppy noses.",
    name: "Devon K.",
    role: "Student"
  },
  {
    quote: "Each email feels like a little surprise gift—tail wags and positive vibes included.",
    name: "Marcus J.",
    role: "Barista"
  },
  {
    quote: "I’ve got coworkers asking what I’m smiling at every morning. The answer? Pawsome Vibes. Every. Time.",
    name: "Trina F.",
    role: "Accountant"
  },
  {
    quote: "I love that this app mixes uplifting words with pet pictures. It’s like someone knew exactly what I needed and made it into an app.",
    name: "Gwen H.",
    role: "Cat & dog lover"
  }
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
      <h1 className="title"> What Our Pawsome Users Say </h1>

      <div className="user-item">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center"
          >
            <img
              src={testimonies[index].img}
              alt={testimonies[index].name}
              className="testimony.img"
            />
            <p className="text-xl text-gray-700 italic mb-4">"{testimonies[index].quote}"</p>
            <p className="text-pink-500 font-semibold text-lg">
              {testimonies[index].dog} {testimonies[index].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="button-group">
        <button onClick={handlePrev} className="prev"> ◀️ Prev </button>
        <button onClick={handleNext} className="next"> Next ▶️ </button>
      </div>
      
      <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <p className="quote">"{testimonial.quote}"</p>
          <p className="name">— {testimonial.name}, {testimonial.role}</p>
        </div>
      ))}
    </div>
    </div>
  );
};




export default Testimonies;
