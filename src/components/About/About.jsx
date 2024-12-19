import React from 'react'
import './About.css';
import pfp from '../../assets/pfp/aboutpic.png';


const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About</h1>
        {/*<img src={theme} alt="theme"/>*/}
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={pfp} alt="pfp"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hey🙋‍♂️, I'm Vinay H C, a web developer passionate about working with the MERN stack. I enjoy building full-stack applications and exploring new ideas in web development.</p>
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
        <h1 id="skillset-title">Skillset</h1>
          <div className="skills-wrapper">
            <div className="skills-section">
              <p>Languages and Frameworks</p>
              <div className="skills-grid">
                <img src="/icons/HTML5.png" alt="html-5" />
                <img src="/icons/CSS3.png" alt="css-3" />
                <img src="/icons/js.png" alt="js" />
                <img src="/icons/python.png" alt="python" />
                <img src="/icons/reactjs.png" alt="reactjs" />
                <img src="/icons/nodejs.png" alt="nodejs" />
                <img src="/icons/expressjswhite.png" alt="expressjs" />
                <img src="/icons/tailwindcss.png" alt="tailwindcss" />
                <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="zustand" />
                <img src="/icons/vite.js.png" alt="tailwindcss" />
              </div>
            </div>

            <div className="skills-section">
              <p>Database and Tools</p>
              <div className="skills-grid">
                <img src="/icons/mongodbnew.png" alt="db" />
                <img src="/icons/redis.png" alt="db" />
                <img src="/icons/firebase.png" alt="db" />
                <img src="/icons/git.png" alt="db" />
                <img src="/icons/githubwhite.png" alt="db" />
                <img src="/icons/vercel-white.svg" alt="db" />
                <img src="/icons/Postman.png" alt="db" />
                <img src="/icons/vscode.png" alt="db" />
                <img src="/icons/rendernew.jpg" alt="db" />
                <img src="/icons/stripe.png" alt="db" />
              </div>
            </div>
          </div>
    </div>
  );
}

export default About