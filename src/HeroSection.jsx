import React from "react";
import {
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa"; // Import icons
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="home">
      <section className="relative bg-black text-white pt-40 flex items-center justify-center">
        {/* Glass Effect Background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Side - Text and Buttons */}
          <div className="w space-y-6">
            <h1 className="text-xl sm:text-xl font-bold text-gray-500">
              Hi, I am <br /> Gaurav Saini
            </h1>
            <p className="text-4xl font-bold text-orange-400">
              UI/UX Designer || Web Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/gaurav-saini-72645022b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.behance.net/gauravjetpuriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaBehance size={30} />
              </a>
              <a
                href="https://github.com/gauravsaini9782"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/gaurav._jetpuriya?igsh=M2hsd2M1M2llYzNp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaInstagram size={30} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="mailto:gauravjetpuriya888@gmail.com?subject=Hiring%20Request:%20[Project%20Name]&body=Hello%20Gaurav,%0D%0A%0D%0AI%E2%80%99d%20like%20to%20discuss%20a%20project%20with%20you.%20Here%20are%20some%20initial%20details...%0D%0A%0D%0AProject%20Name:%20%0D%0ABudget:%20%0D%0ADeadline:%20%0D%0ADescription:%20"
                target="_blank"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/1WFq0aMPwZwm2r3_Dynyi42xvOASPtmY8/view?usp=drivesdk"
                className="border-2 border-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500"
              >
                Download CV
              </a>
            </div>

            {/* Experience/Stats */}
            <div className="flex space-x-8 mt-8 bg-white/10 backdrop-blur-md p-6 rounded-lg w-full border border-gray-500">
              <div className="text-center ">
                <h2 className="text-3xl font-bold">5+</h2>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="border border-gray-500"></div>

              <div className="  text-center">
                <h2 className="text-3xl font-bold">20+</h2>
                <p className="text-gray-400">Projects Done</p>
              </div>
              <div className="border border-gray-500"></div>

              <div className="text-center ">
                <h2 className="text-3xl font-bold">15+</h2>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/images/chara 2"
              alt="Gaurav Saini"
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
