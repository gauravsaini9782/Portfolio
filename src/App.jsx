import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'
import PortfolioSection from './PortfolioSection'
import ContactUs from './ContactUs'
import Footer from './Footer'
import { Link, Element, animateScroll as scroll } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <ServiceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App