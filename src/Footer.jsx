import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top section: Genuine services */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-400">
            We provide tailored services that prioritize creativity,
            functionality, and user experience. Whether you need a website, app
            design, or branding, we are committed to delivering top-notch
            quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="hidden lg:block text-center p-4 bg-white/10 backdrop-blur-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full h-30">
              <h3 className="text-xl font-bold">24/7 Support</h3>
              <p className="text-gray-400">
                Available anytime you need assistance.
              </p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full h-30">
              <h3 className="text-xl font-bold">Creative Solutions</h3>
              <p className="text-gray-400">
                Bringing unique ideas to life for your brand.
              </p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full h-30">
              <h3 className="text-xl font-bold">Quality Delivery</h3>
              <p className="text-gray-400">On-time and top-quality.</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/gaurav-saini-72645022b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/gauravsaini9782"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/gaurav._jetpuriya?igsh=M2hsd2M1M2llYzNp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.behance.net/gauravjetpuriya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaBehance size={30} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center text-center text-gray-500 space-y-4">
          <p>
            &copy; {new Date().getFullYear()} Gaurav Saini. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Designed & Developed by Gaurav Saini
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

