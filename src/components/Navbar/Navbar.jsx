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
            <li><p>Home</p></li>
            <li><p>About</p></li>
            <li><p>Topics</p></li>
            {/*<li>Portfolio</li>*/}
            <li><p>Projects</p></li>
            <li><p>Contact</p></li>
        </ul>
        <div className="nav-connect">Connect</div>
    </div>
  );
}

export default Navbar



