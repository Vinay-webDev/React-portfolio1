import React from 'react'
import pfp from '../../assets/pfp.jpg';
import './Hero.css';
const Hero = () => {
  return (
    <div className="hero">
        <img src={pfp} alt="profile-picture" />
        <h1><span>I'm Alex,</span>full-stack developer based in India</h1>
        <p>I'm a full-stack developer from India, bangalore with 10 years of work experience</p>
        <div className="hero-actions">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">Resume</div>
        </div>
    </div>
  );
}

export default Hero