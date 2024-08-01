import React from 'react'
import logo from '../../assets/chad.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar" >
        <img src={logo} alt="portfolio-logo"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect</div>
    </div>
  );
}

export default Navbar



