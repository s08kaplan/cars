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


  if (isImageFocused) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col">
       
        <div className="flex-1 relative flex items-center justify-center p-4">
          <img
            src={source[index]}
            alt={`Image ${index}`}
            className="max-w-full max-h-full object-contain cursor-pointer rounded-2xl shadow-2xl border border-slate-800/60"
            onClick={() => setIsImageFocused(false)}
          />
          
        
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-slate-900/80 border border-slate-700/80 text-cyan-400 p-4 rounded-full hover:border-cyan-500 hover:bg-slate-800 transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Previous"
          >
            <img src={leftArrow} alt="left arrow image" width={16} className="invert brightness-200" />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-slate-900/80 border border-slate-700/80 text-cyan-400 p-4 rounded-full hover:border-cyan-500 hover:bg-slate-800 transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Next"
          >
            <img src={rightArrow} alt="right arrow image" width={16} className="invert brightness-200" />
          </button>

          {/* Close button */}
          <button
            onClick={() => setIsImageFocused(false)}
            className="absolute top-6 right-6 bg-slate-900/90 border border-slate-700/80 text-slate-300 p-3 rounded-full hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-200 text-xl font-bold cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Thumbnail row at bottom */}
        <div className="bg-slate-900/90 border-t border-slate-800 p-4">
          <div className="flex gap-3 overflow-x-auto justify-center max-w-full">
            {source.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i}`}
                className={`flex-shrink-0 w-16 h-16 object-cover rounded-xl cursor-pointer transition-all duration-200 ${
                  i === index 
                    ? "ring-2 ring-cyan-400 scale-110 opacity-100 shadow-lg shadow-cyan-500/20" 
                    : "hover:scale-105 opacity-50 hover:opacity-90 border border-slate-800"
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
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl bg-slate-900/40 backdrop-blur-xl"
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
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-full hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-lg"
        aria-label="Previous"
      >
       <img src={leftArrow} alt="" width={12} className="invert brightness-200" />
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-full hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-lg"
        aria-label="Next"
      >
        <img src={rightArrow} alt="" width={12} className="invert brightness-200" />
      </button>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
        {source.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-cyan-400 scale-125 shadow-sm shadow-cyan-400/50" : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Swipe;