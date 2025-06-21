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
  const [isImageFocused, setIsImageFocused] = useState(false);
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

  const handleImageClick = () => {
    setIsImageFocused(true);
  };

  const handleThumbnailClick = (clickedIndex: number) => {
    if (clickedIndex === index) {
      setIsImageFocused(false);
    } else {
      setIndex(clickedIndex);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (isImageFocused) {
      isHovered.current = true; // Pause autoplay when image is focused
      return;
    }

    const play = () => {
      if (!isHovered.current) {
        setIndex((prev) => (prev + 1) % source.length);
      }
    };

    const interval = setInterval(play, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, source.length, isImageFocused]);

  const pauseAutoplay = () => { isHovered.current = true; };
  const resumeAutoplay = () => { 
    if (!isImageFocused) {
      isHovered.current = false; 
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [index]);

  // If image is focused, show full-screen overlay
  if (isImageFocused) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
        {/* Full-screen image container */}
        <div className="flex-1 relative flex items-center justify-center p-4">
          <img
            src={source[index]}
            alt={`Image ${index}`}
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={() => setIsImageFocused(false)}
          />
          
          {/* Navigation arrows for focused view */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-black/80 transition-colors"
            aria-label="Previous"
          >
            <img src={leftArrow} alt="" width={16}/>
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-black/80 transition-colors"
            aria-label="Next"
          >
            <img src={rightArrow} alt="" width={16} />
          </button>

          {/* Close button */}
          <button
            onClick={() => setIsImageFocused(false)}
            className="absolute top-6 right-6 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors text-xl font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Thumbnail row at bottom */}
        <div className="bg-black/80 p-4">
          <div className="flex gap-3 overflow-x-auto justify-center max-w-full">
            {source.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i}`}
                className={`flex-shrink-0 w-16 h-16 object-cover rounded cursor-pointer transition-all duration-200 ${
                  i === index 
                    ? "ring-3 ring-white scale-110 opacity-100" 
                    : "hover:scale-105 opacity-60 hover:opacity-90"
                }`}
                onClick={() => handleThumbnailClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default carousel view
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
            className="w-full flex-shrink-0 object-cover h-64 fancy-hover cursor-pointer"
            onClick={handleImageClick}
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