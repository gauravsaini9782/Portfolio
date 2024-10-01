import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'
import PortfolioSection from './PortfolioSection'
import ContactUs from './ContactUs'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <PortfolioSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App