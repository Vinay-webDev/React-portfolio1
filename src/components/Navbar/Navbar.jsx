import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react';
import logo from '../../assets/chad.png';
import './Navbar.css';
import underline from '../../assets/underline1.png';



const Navbar = () => {

  const [menu, setMenu] = useState('');

  const handleClick = (props) => {
    setMenu(props);
  }
  return (
    <div className="navbar" >
        <img src={logo} alt="portfolio-logo"/>
        <ul className="nav-menu">
            <li><AnchorLink className="anchor-link" href="#home"  ><p onClick={() => handleClick("home")}>Home</p>{menu==="home"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#about" offset={50} ><p onClick={() => handleClick("about")}>About</p>{menu==="about"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#topics" offset={50} ><p onClick={() => handleClick("topics")}>Topics</p>{menu==="topics"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            {/*<li>Portfolio</li>*/}
            <li><AnchorLink className="anchor-link" href="#projects" offset={50} ><p onClick={() => handleClick("projects")}>Projects</p>{menu==="projects"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#contact" offset={50} ><p onClick={() => handleClick("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" href="#contact" offset={50}>Connect</AnchorLink></div>
    </div>
  );
}

export default Navbar;



