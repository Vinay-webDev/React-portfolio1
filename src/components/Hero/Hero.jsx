import pfp from '../../assets/pfp/avatar3.png';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SimpleTypewriterText from '../TextEffects/SimpleTypewriterText.jsx';

const Hero = () => {
  const resumeURL = '/vinayhc.pdf';

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