import React from 'react';
import pfp from '../../assets/pfp/avatar3.png';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SimpleTypewriterText from '../TextEffects/SimpleTypewriterText.jsx';

const Hero = () => {
  const resumeURL = '/resume';

  return (
    <div id="home" className="hero">
      <img src={pfp} alt="profile-picture" />
      <h1 id="name"> 
          Hi👋, I'm Vinay
      </h1>
      <h1 id="hero-text">
        <SimpleTypewriterText
          words={['Aspiring Full-Stack Developer', 'MERN Stack Enthusiast', 'Open to Opportunities']}
        />
      </h1>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            Connect
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeURL} style={{ textDecoration: 'none', color: 'inherit' }}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*
"https://doodleipsum.com/700/avatar-3?i=2ea54aaed1aee8357bc0c85670ea888b"
"https://doodleipsum.com/600/avatar-3?i=60e26c9e92fa5ebd256d816b35882434"
"https://doodleipsum.com/700/avatar-2?i=e3dee7468e53e0ca1dcee28d5678fceb"
"https://doodleipsum.com/600/avatar-3?i=258047980742b4938d78891d296875ef"
*/