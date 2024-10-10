import React, { useState } from "react";
import { Element } from "react-scroll";

// Sample data for portfolio items with thumbnails
const portfolioData = {
  "Web Design": [
    {
      title: "Design 1",
      link: "https://www.behance.net/gallery/209527637/wwwapplecom",
      thumbnail: "/images/iphone.png",
    },
    {
      title: "Design 2",
      link: "https://www.behance.net/gallery/207653613/Travling",
      thumbnail: "/images/food  courtttt.png",
    },

    {
      title: "Design 3",
      link: "https://www.behance.net/gallery/209634163/Food-Court",
      thumbnail: "/images/traveling thumbnail.png",
    },
  ],
  "Web Development": [
    {
      title: "Project 1",
      link: "https://madebyshape.co.uk/work/",
      thumbnail: "/images/web 1.png",
    },
    {
      title: "Project 2",
      link: "https://outschool.com/",
      thumbnail: "/images/web 2.png",
    },
    {
      title: "Project 3",
      link: "https://www.sarovarhotels.com/v-sarovar-portico-mi-road-jaipur/",
      thumbnail: "/images/web 3.png",
    },
  ],
  "App Design": [
    {
      title: "App 1",
      link: "https://www.behance.net/gallery/209641101/Crypto-App/modules/1191120555",
      thumbnail: "/images/Group 48095471.png",
    },
    {
      title: "App 2",
      link: "https://www.behance.net/gallery/209640725/Foodee-Mobile-App/modules/1191118881",
      thumbnail: "/images/Frame 38.png",
    },
    {
      title: "App 3",
      link: "https://www.behance.net/gallery/209637985/Shoping-App/modules/1191117287",
      thumbnail: "/images/file cover - 2.png",
    },
  ],
  "Logo Design": [
    {
      title: "Logo 1",
      link: "https://www.behance.net/gallery/209642643/Swastik-restro-Logo/modules/1191128879",
      thumbnail: "/images/Saatvik logo.png",
    },
    {
      title: "Logo 2",
      link: "https://www.behance.net/gallery/209651895/Daniel-Galego-logo/modules/1191180517",
      thumbnail: "/images/daniel.png",
    },
    {
      title: "Logo 3",
      link: "https://www.behance.net/gallery/209652551/Urban-edge/modules/1191183655",
      thumbnail: "/images/Modern Minimalist Graffiti Urban Brand Logo.png",
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
        className="bg-white/10 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "
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
    <Element name="portfolio">
      <section className="py-16 bg-gradient-to-b from-black to-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>

          {/* Tabs for categories */}
          <div className="flex justify-center gap-4 mb-8  flex-wrap w-full">
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
    </Element>
  );
};

export default PortfolioSection;
