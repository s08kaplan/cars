import "src/animations/definitions.css";

const TEXT = "Loading Cars";

const CarSpinner = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-[400px] w-full">
      {/* Ambient background glow */}
      <div className="absolute w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center space-x-1 z-10">
        {Array.from(TEXT).map((letter, i) => (
          <span
            key={i}
            className="inline-block letter-drop text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 text-3xl font-extrabold tracking-wider drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]"
            style={{
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${0.9 + (i % 3) * 0.06}s`,
            }}
          >
            {letter === " " ? <span className="mx-1.5">&nbsp;</span> : letter}
          </span>
        ))}
      </div>
      
      {/* Subtle loader bar under text */}
      <div className="w-32 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden relative">
        <div className="absolute inset-y-0 bg-gradient-to-r from-amber-500 to-amber-300 w-1/2 rounded-full animate-[shimmer_1.5s_infinite_linear]" 
             style={{ animation: 'shimmer 1.5s infinite linear' }} />
      </div>
    </section>
  );
};

export default CarSpinner;