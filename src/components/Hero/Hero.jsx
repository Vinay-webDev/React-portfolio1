import React from 'react';
import pfp from '../../assets/pfp/pfptemp.png';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SimpleTypewriterText from '../TextEffects/SimpleTypewriterText.jsx';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={pfp} alt="profile-picture" />
      <h1 id="name" >I'm VINAY H C</h1>
      <h1 id="hero-text">
        <SimpleTypewriterText
          words={['a full-stack developer.', 'based in Bangalore.', 'ready to build amazing apps!']}
        />
      </h1>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            Connect
          </AnchorLink>
        </div>
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  );
};

export default Hero;