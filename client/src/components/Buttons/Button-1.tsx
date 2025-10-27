import React from 'react'

export interface Button1Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message?: string;
}


const Button1: React.FC<Button1Props> = ({ message = "Go", children, className, ...rest}) => {
  return (
    <button
  {...rest}
  className={`relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group ${className || ""}`}
>
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
   {message} 
  </span>
  <span className="relative invisible">{children || "Go"}</span>
</button>

  )
}

export default Button1