import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPenFancy, FaVideo, FaPaintBrush, FaDraftingCompass } from 'react-icons/fa'; // Importing appropriate icons

const ServiceSection = () => {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Web Design",
      description: "Creating responsive and dynamic websites.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "App Design",
      description: "Designing sleek mobile applications.",
    },
    {
      icon: <FaPenFancy size={40} />,
      title: "Logo Design",
      description: "Crafting unique and professional logos.",
    },
    {
      icon: <FaVideo size={40} />,
      title: "Animated Videos",
      description: "Making engaging and creative animations.",
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "Graphic Design",
      description: "Designing stunning visuals and illustrations.",
    },
    {
      icon: <FaDraftingCompass size={40} />,
      title: "UI/UX Services",
      description: "Delivering seamless user experiences and interfaces.",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-6 text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-300">{service.description}</p>

              {/* Glossy Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-t from-white/40 via-transparent to-transparent rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
