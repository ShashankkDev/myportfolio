import React from 'react'
import "./Headers.css";
import Banner from './TechStack/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs/ContactUs';

const Headers = () => {
  return (
    <div >
      <div className="gradients">
        <Banner/>
        <AboutMe/>
      </div>
        <Projects/>
        <ContactUs/>
    </div>
  )
}

export default Headers;
