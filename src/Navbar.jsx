import React, { useState } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0   w-full z-50 shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo trans.png" // Replace with your logo URL
              alt="Logo"
              className="h-12 mr-2" // Adjust height, width, and margin as needed
            />
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-orange-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-orange-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="hover:text-orange-500 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="hover:text-orange-500 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-orange-500 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:flex">
            <a
              href="mailto:gauravjetpuriya888@gmail.com?subject=Hire%20Me&body=Hi,%20I'm%20interested%20in%20hiring%20you!"
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
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
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 cursor-pointer"
            >
              Contact
            </Link>
            <a
              href="mailto:gauravjetpuriya888@gmail.com?subject=Hire%20Me&body=Hi,%20I'm%20interested%20in%20hiring%20you!"
              className="block bg-orange-500 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
