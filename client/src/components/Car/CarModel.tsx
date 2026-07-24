import { useRef, useState } from "react";
import "../../animations/definitions.css";
import EngineSound from "../Effects/EngineSound";
import { Volume2, VolumeX } from "lucide-react";

const CarModel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fade-in-up flex flex-col items-center">
      <div 
        onClick={toggleSound}
        className="relative group cursor-pointer"
        title="Click to start engine"
      >
        <img src="/car.webp" alt="car" className="w-full h-auto drop-shadow-2xl" />
        
        {/* Quick visual badge */}
        <div className="absolute top-2 right-2 bg-slate-900/80 border border-slate-700 p-2 rounded-full text-cyan-400 group-hover:border-cyan-500 transition-all duration-200">
          {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
        </div>
      </div>

      <EngineSound isPlaying={isPlaying} />
    </div>
  );
};

export default CarModel;