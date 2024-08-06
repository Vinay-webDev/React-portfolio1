import React from 'react'
import pfp from '../../assets/pfp.jpg';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Hero = () => {
  
  return (
    <div id="home" className="hero">
        <img src={pfp} alt="profile-picture" />
        <h1><span>I'm Chad,</span>full-stack developer based in India</h1>
        <p>I'm a full-stack developer from India, bangalore with 10 years of work experience</p>
        <div className="hero-actions">
            <div className="hero-connect"><AnchorLink className="anchor-link" href="#contact" offset={50}>Connect</AnchorLink></div>
            <div className="hero-resume">Resume</div>
        </div>
    </div>
  );
}

export default Hero