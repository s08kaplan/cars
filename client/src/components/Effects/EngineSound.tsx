import React, { useEffect, useRef } from "react";

interface EngineSoundProps {
  isPlaying: boolean;
}

const EngineSound: React.FC<EngineSoundProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.currentTime = 0;
      audio.muted = false;
      audio.play().catch((err) => console.warn("Audio playback error:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/sounds/mustang.mp3"
      preload="auto"
    />
  );
};

export default EngineSound;
