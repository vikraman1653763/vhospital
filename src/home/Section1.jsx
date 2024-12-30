
import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: .3 }, // Smooth ease-in for initial state
      opacity: { duration: .3 },
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: .3 }, // Linear for center state
      opacity: { duration: .3 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: .3 }, // Smooth ease-out for exiting state
      opacity: { duration: .3 },
    },
  }),
};

const wrap = (min, max, value) => {
  const range = max - min;
  return (((value - min) % range + range) % range + min);
};

const Section1 = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const cards = [
    {
      image: "/assets/banner1.webp",
    },
    {
      image: "/assets/banner2.webp",
    },
    {
      image: "/assets/banner3.webp",
    },
  ];

  const cardIndex = wrap(0, cards.length, page);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage(page + newDirection);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1); 
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);
  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={() => paginate(-1)}>
        &#9664;
      </button>
      <div className="carousel">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="carousel-card"
            style={{
              backgroundImage: `url(${cards[cardIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="next-btn" onClick={() => paginate(1)}>
        &#9654;
      </button>
    </div>
  );
};

export default Section1;