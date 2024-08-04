import React, { useState } from 'react';
import logo from '../../assets/chad.png';
import './Navbar.css';
import underline from '../../assets/underline1.png';



const Navbar = () => {

  const [menu, setMenu] = useState('');

  function handleClick (props) {
    setMenu(props);
  }
  return (
    <div className="navbar" >
        <img src={logo} alt="portfolio-logo"/>
        <ul className="nav-menu">
            <li><p onClick={() => handleClick("home")}>Home</p>{menu==="home"?<img src={underline} alt="underline"/>:<></>}</li>
            <li><p onClick={() => handleClick("about")}>About</p>{menu==="about"?<img src={underline} alt="underline"/>:<></>}</li>
            <li><p onClick={() => handleClick("topics")}>Topics</p>{menu==="topics"?<img src={underline} alt="underline"/>:<></>}</li>
            {/*<li>Portfolio</li>*/}
            <li><p onClick={() => handleClick("projects")}>Projects</p>{menu==="projects"?<img src={underline} alt="underline"/>:<></>}</li>
            <li><p onClick={() => handleClick("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt="underline"/>:<></>}</li>
        </ul>
        <div className="nav-connect">Connect</div>
    </div>
  );
}

export default Navbar



