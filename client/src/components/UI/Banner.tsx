import "../../animations/definitions.css";

const Banner = () => {
  return (
    <header className="relative w-full overflow-hidden rounded-b-3xl shadow-2xl border-b border-slate-800/80">
      {/* Image Container with Ambient Overlay */}
      <div className="h-72 md:h-96 lg:h-[32rem] relative w-full overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/29/07/16/ai-generated-8538997_1280.jpg"
          alt="car image"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        {/* Dark Vignette Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/80 via-transparent to-[#0B1120]/80" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Premium Automotive Marketplace
        </span>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight fade-in-up leading-tight drop-shadow-lg">
          Drive home <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">happy</span>
        </h1>

        <h3 className="text-base md:text-xl lg:text-2xl text-slate-300 font-medium mt-3 slide-in-right max-w-lg leading-relaxed drop-shadow">
          Satisfaction guaranteed with curated inspection standards
        </h3>
      </div>
    </header>
  );
};

export default Banner;