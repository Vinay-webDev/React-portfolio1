import React, { useState } from 'react';
import logo from '../../assets/chad.png';
import './Navbar.css';
import underline from '../../assets/underline1.png';



const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar" >
        <img src={logo} alt="portfolio-logo"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Topics</li>
            {/*<li>Portfolio</li>*/}
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect</div>
    </div>
  );
}

export default Navbar



