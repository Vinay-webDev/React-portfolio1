import React from 'react'
import './About.css';
import theme from '../../assets/new/textund.png';
import pfp from '../../assets/pfp/pfptemp2.png';


const About = () => {
  return (
    <div id="about" className="about">
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
            <p>I'm Vinay h c passionate web developer and I'm an undergraduate, my expertise lies in MERN stack. I enjoy building full-stack applications that deliver seamless user experiences.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"40%"}} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"45%"}} /></div>
            <div className="about-skill"><p>Node js</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Express js</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
        
      </div>
          <h1 id="h1skills" >Skills</h1>
          <div className="skills-wrapper">
            <div className="skills-section">
              <p>Languages and Frameworks</p>
              <div className="skills-grid">
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
                <img src="/public/logos/js.png" alt="js" />
              </div>
            </div>

            <div className="skills-section">
              <p>Database and Tools</p>
              <div className="skills-grid">
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
                <img src="/public/logos/mongodb.png" alt="db" />
              </div>
            </div>
          </div>
    </div>
  );
}

export default About

/*
<div className="about-achivement">
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
*/