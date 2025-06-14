"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { leftArrow, rightArrow } from "../../helpers/test-swipe/test";

interface SwipeProps {
  source: string[];
  autoPlayInterval?: number; 
}

const Swipe: React.FC<SwipeProps> = ({ source, autoPlayInterval = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovered = useRef(false);

  const nextImage = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((prev) => (prev + 1) % source.length);
  };

  const prevImage = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((prev) => (prev - 1 + source.length) % source.length);
  };

 
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  
  useEffect(() => {
  const play = () => {
    if (!isHovered.current) {
      setIndex((prev) => (prev + 1) % source.length);
    }
  };

  const interval = setInterval(play, autoPlayInterval);
  return () => clearInterval(interval);
}, [autoPlayInterval, source.length]);


  const pauseAutoplay = () => { isHovered.current = true; };
const resumeAutoplay = () => { isHovered.current = false; };


  
  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section
      {...swipeHandlers}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      className="relative w-full max-w-lg mx-auto overflow-hidden"
    >
    
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {source.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i}`}
            className="w-full flex-shrink-0 object-cover h-64 fancy-hover"
          />
        ))}
      </div>

    
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        aria-label="Previous"
      >
       <img src={leftArrow} alt="" width={10}/>
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        aria-label="Next"
      >
        <img src={rightArrow} alt="" width={10} />
      </button>

     
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {source.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Swipe;
