import React from 'react'
import './About.css';
import theme from '../../assets/theme2.png';
import pfp from '../../assets/pfp.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About</h1>
        <img src={theme} alt="theme"/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pfp} alt="pfp"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm Chad from India bangalore, I've been working for the past 10 years as a full-stack web developer. Throughout my career, I have had the privilage of collaberating with prestigious organizations, contributing to their success and growth😀👍</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Nest js</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Node js</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Express js</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED!</p>
        </div>
        <div className="about-achivement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About