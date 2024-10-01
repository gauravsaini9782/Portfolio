import React from 'react';
import { FaLinkedin, FaBehance, FaGithub, FaInstagram, FaFileAlt } from 'react-icons/fa'; // Import icons

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side - Text and Buttons */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-xl sm:text-xl font-bold text-gray-500">
            Hi, I am <br /> Gaurav Saini
          </h1>
          <p className="text-4xl font-bold text-orange-400">UI/UX Designer</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaLinkedin size={30} />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaBehance size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaGithub size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaInstagram size={30} />
            </a>
           
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#hire-me"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Hire Me
            </a>
            <a
              href="#download-cv"
              className="border-2 border-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500"
            >
              Download CV
            </a>
          </div>

          {/* Experience/Stats */}
          <div className="flex space-x-8 mt-8 bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold">5+</h2>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="border-l border-gray-400"></div>

            <div className="text-center">
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="text-gray-400">Projects Done</p>
            </div>
            <div className="border-l border-gray-400"></div>

            <div className="text-center">
              <h2 className="text-3xl font-bold">15+</h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="bbbbbbbbbbbbbb/public/images/ghnjk-removebg-preview.png"
            alt="Gaurav Saini"
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
