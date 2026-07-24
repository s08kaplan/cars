import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message?: string;
}

const Button: React.FC<ButtonProps> = ({ message = "Go", children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-slate-200 transition-all duration-300 ease-out border border-slate-700/80 rounded-2xl shadow-lg shadow-black/40 group bg-slate-900 hover:border-slate-400 active:scale-[0.98] cursor-pointer ${className || ""}`}
    >
      {/* Sliding Pure Silver Hover Surface with Dark Arrow */}
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-slate-950 transition-transform duration-300 -translate-x-full bg-gradient-to-r from-slate-200 via-white to-slate-300 group-hover:translate-x-0 ease-out font-bold">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>

      {/* Initial Resting State Text (Pure Silver / Slate) */}
      <span className="absolute flex items-center justify-center w-full h-full text-slate-200 font-medium transition-all duration-300 transform group-hover:translate-x-full ease-out">
        {message} 
      </span>

      {/* Invisible Spacer Container */}
      <span className="relative invisible">{children || message || "Go"}</span>
    </button>
  );
};

export default Button;