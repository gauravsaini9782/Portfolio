import React, { useState } from 'react';

// Sample data for portfolio items with thumbnails
const portfolioData = {
  "Web Development": [
    {
      title: "Project 1",
      link: "https://example.com/project1",
      thumbnail: "https://via.placeholder.com/300?text=Project+1",
    },
    {
      title: "Project 2",
      link: "https://example.com/project2",
      thumbnail: "https://via.placeholder.com/300?text=Project+2",
    },
    {
        title: "Project 2",
        link: "https://example.com/project2",
        thumbnail: "https://via.placeholder.com/300?text=Project+2",
      },
  ],
  "Web Design": [
    {
      title: "Design 1",
      link: "https://example.com/design1",
      thumbnail: "https://via.placeholder.com/300?text=Design+1",
    },
    {
      title: "Design 2",
      link: "https://via.placeholder.com/300?text=Design+2",
      thumbnail: "https://via.placeholder.com/300?text=Design+2",
    },
  ],
  "App Design": [
    {
      title: "App 1",
      link: "https://example.com/app1",
      thumbnail: "https://via.placeholder.com/300?text=App+1",
    },
    {
      title: "App 2",
      link: "https://via.placeholder.com/300?text=App+2",
      thumbnail: "https://via.placeholder.com/300?text=App+2",
    },
  ],
  "Logo Design": [
    {
      title: "Logo 1",
      link: "https://via.placeholder.com/300?text=Logo+1",
      thumbnail: "https://via.placeholder.com/300?text=Logo+1",
    },
    {
      title: "Logo 2",
      link: "https://via.placeholder.com/300?text=Logo+2",
      thumbnail: "https://via.placeholder.com/300?text=Logo+2",
    },
  ],
  "Graphic Design": [
    {
      title: "Graphic 1",
      link: "https://example.com/graphic1",
      thumbnail: "https://via.placeholder.com/300?text=Graphic+1",
    },
    {
      title: "Graphic 2",
      link: "https://via.placeholder.com/300?text=Graphic+2",
      thumbnail: "https://via.placeholder.com/300?text=Graphic+2",
    },
  ],
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Web Development"); // Default active tab

  // Function to render portfolio cards based on the active tab
  const renderPortfolioCards = () => {
    return portfolioData[activeTab].map((item, index) => (
      <div
        key={index}
        className="bg-white/10 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {/* Thumbnail Image */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="rounded-t-lg object-cover w-full h-48"
          />
          {/* Title */}
          <div className="p-4">
            <h3 className="text-xl font-bold text-orange-500">{item.title}</h3>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>

        {/* Tabs for categories */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(portfolioData).map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-bold transition-colors duration-300 ${
                activeTab === category
                  ? "bg-orange-500 text-white"
                  : "bg-blac-700 text-gray-300"
              } hover:bg-orange-400`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderPortfolioCards()}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
