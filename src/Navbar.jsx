import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#portfolio" className="hover:text-orange-500">Portfolio</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:flex">
            <a
              href="#hire-me"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500">
              About
            </a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500">
              Services
            </a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500">
              Portfolio
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500">
              Contact
            </a>
            <a
              href="#hire-me"
              className="block bg-orange-500 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
