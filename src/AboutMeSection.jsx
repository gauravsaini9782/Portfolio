import React from 'react';
import { Element } from 'react-scroll';

const AboutMeSection = () => {
  return (
    <Element name="about">
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          {/* About Me Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
            {/* Left Side - Interactive Image */}
            <div className="relative w-full lg:w-1/2">
              <img
                src="/images/chara 2" // Replace with your image
                alt="Gaurav Saini"
                className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              {/* Glossy effect overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 bg-gradient-to-t from-white/40 via-transparent to-transparent rounded-lg"></div>
            </div>

            {/* Right Side - Description & Download CV */}
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-300 mb-6">
                Hi, I'm{" "}
                <span className="font-bold text-orange-500">Gaurav Saini</span>,
                a passionate UI/UX Designer and front-end developer. With a
                strong background in design and development, I love crafting
                clean and modern user interfaces that are both functional and
                aesthetically pleasing. I have extensive experience in web
                development and am always eager to learn and explore new trends
                in the tech world.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My mission is to create engaging and intuitive digital
                experiences. Over the past years, I have worked on numerous
                projects, from web applications to mobile apps, and constantly
                strive to improve my skills to provide top-notch solutions.
              </p>
              {/* Download CV Button */}
              <div>
                <a
                  href="https://drive.google.com/file/d/1WFq0aMPwZwm2r3_Dynyi42xvOASPtmY8/view?usp=drivesdk"
                  className="inline-block px-6 py-3 font-bold text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutMeSection;
