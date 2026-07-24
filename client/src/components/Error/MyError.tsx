import React from "react";

type CustomError = {
  message?: string;
  customMessage?: string;
  status?: number;
};

const MyError: React.FC<CustomError> = ({ message, customMessage }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-6 py-12 px-4 max-w-xl mx-auto my-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl backdrop-blur-xl shadow-2xl">
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-red-400 tracking-tight">
          {message || customMessage || "Oops! Something went wrong."}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          We encountered an error processing your request. Please try again.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 shadow-lg">
        <img
          src="/car-crash.avif"
          alt="car crash"
          className="w-full max-w-md mx-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};

export default MyError;