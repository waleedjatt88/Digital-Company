import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  // Mobile Menu open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    // STEP 1: Sticky banane ke liye 'sticky top-0' add kiya.
    // 'backdrop-blur-md' aur 'bg-white/90' se wo scroll karte waqt halka transparent dikhega (Glass effect).
    <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center shadow-sm z-50 transition-all duration-300">
      
      {/* 1. Left Section: Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Qiksol Logo" className="h-10" /> 
      </div>

      {/* 2. Center Section: Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden md:flex gap-8 text-text-light font-medium text-[16px]">
        <li className="hover:text-primary cursor-pointer transition">Home</li>
        <li className="hover:text-primary cursor-pointer transition">About</li>
        
        {/* Services Dropdown */}
        <li className="flex items-center gap-1 hover:text-primary cursor-pointer transition group relative">
          Services
          <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </li>
        
        <li className="hover:text-primary cursor-pointer transition">Blog</li>
        <li className="hover:text-primary cursor-pointer transition">Contact</li>
      </ul>

      {/* 3. Right Section: Desktop Button */}
      <button className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-800 transition shadow-lg hover:scale-105 active:scale-95 transform duration-200">
        Contact Us
      </button>

      {/* 4. Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden text-primary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
            // Close Icon (X) jab menu khula ho
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            // Hamburger Icon jab menu band ho
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        )}
      </div>

      {/* 5. Mobile Menu Dropdown (Jo click karne par dikhega) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden transition-all duration-300 border-t border-gray-100">
            <a href="#" className="text-lg font-medium hover:text-primary">Home</a>
            <a href="#" className="text-lg font-medium hover:text-primary">About</a>
            <a href="#" className="text-lg font-medium hover:text-primary">Services</a>
            <a href="#" className="text-lg font-medium hover:text-primary">Blog</a>
            <a href="#" className="text-lg font-medium hover:text-primary">Contact</a>
            
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition shadow-md w-[80%]">
                Contact Us
            </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;