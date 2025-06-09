/* import React, { useEffect, useRef } from 'react'

const EngineSound = () => {
      const audioRef = useRef<HTMLAudioElement | null>(null);

        useEffect(() => {
    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 800); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <audio muted autoPlay ref={audioRef} src="/sounds/mustang.mp3" preload="auto" />
  )
}

export default EngineSound */

import React, { useEffect, useRef, useState } from 'react';

const EngineSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstUserGesture = () => {
      setHasInteracted(true);
      document.removeEventListener('click', handleFirstUserGesture);
    };

    document.addEventListener('click', handleFirstUserGesture);
    return () => {
      document.removeEventListener('click', handleFirstUserGesture);
    };
  }, []);

  useEffect(() => {
    if (hasInteracted) {
      const timeout = setTimeout(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.muted = false; 
          audio.play().catch(console.error);
        }
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [hasInteracted]);

  return (
    <audio
      ref={audioRef}
      src="/sounds/mustang.mp3"
      preload="auto"
      autoPlay
      muted 
    />
  );
};

export default EngineSound;
