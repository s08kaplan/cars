import React, { useEffect, useRef } from 'react'

const EngineSound = () => {
      const audioRef = useRef<HTMLAudioElement | null>(null);

        useEffect(() => {
    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 800); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <audio ref={audioRef} src="/sounds/mustang.mp3" preload="auto" />
  )
}

export default EngineSound