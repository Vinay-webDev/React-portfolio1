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
        <div className="about-right">
          <div className="about-para">
            <p>I'm Vinay h c passionate web developer and I'm an undergraduate, my expertise lies in MERN stack. I enjoy building full-stack applications that deliver seamless user experiences.</p>
          </div>
        </div>
        
      </div>
          <div className="skills-wrapper">
            <div className="skills-section">
              <p>Languages and Frameworks</p>
              <div className="skills-grid">
                <img src="/logos/html-5.png" alt="html-5" />
                <img src="/logos/css-3.png" alt="css-3" />
                <img src="/logos/js.png" alt="js" />
                <img src="/logos/python.png" alt="python" />
                <img src="/logos/reactjs.png" alt="reactjs" />
                <img src="/logos/nodejs.png" alt="nodejs" />
                <img src="/logos/expressjswhite.png" alt="expressjs" />
                <img src="/logos/tailwindcss.png" alt="tailwindcss" />
                <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="zustand" />
                <img src="/logos/jwt.png" alt="tailwindcss" />
              </div>
            </div>

            <div className="skills-section">
              <p>Database and Tools</p>
              <div className="skills-grid">
                <img src="/logos/mongodbnew.png" alt="db" />
                <img src="/logos/redis.png" alt="db" />
                <img src="/logos/firebase.png" alt="db" />
                <img src="/logos/git.png" alt="db" />
                <img src="/logos/github-logo.png" alt="db" />
                <img src="/logos/mongodbnew.png" alt="db" />
              </div>
            </div>
          </div>
    </div>
  );
}

export default About

/*
<div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"40%"}} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"45%"}} /></div>
            <div className="about-skill"><p>Node js</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Express js</p><hr style={{width:"50%"}} /></div>
          </div>
*/


/*
<div className="about-left">
          <img src={pfp} alt="pfp"/>
        </div>
*/

/*
<div className="about-achivement">
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
*/