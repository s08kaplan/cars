"use client"
import React from 'react'

const NavbarModal = () => {
  return (
    <div className="md:hidden lg:hidden xl:hidden flex flex-col gap-8  items-center space-y-4">
   
    <input type="checkbox" id="menuToggle" className="peer hidden" />
    
    
    <label
      htmlFor="menuToggle"
      className="cursor-pointer flex flex-col items-center justify-center space-y-1 relative"
    >
     
      <div className="w-6 h-0.5 bg-gray-800 transition-transform peer-checked:rotate-45 origin-left ease-in-out duration-500"></div>
      <div className="w-6 h-0.5 bg-gray-800  peer-checked:opacity-0 ease-in-out duration-500"></div>
      <div className="w-6 h-0.5 bg-gray-800 transition-transform peer-checked:-rotate-45 origin-left ease-in-out duration-500"></div>
    </label>
    
   
    <div className="hidden peer-checked:block mt-4">
      <p className="text-gray-800">Menu Content</p>
    </div>
  </div>
  )
}

export default NavbarModal