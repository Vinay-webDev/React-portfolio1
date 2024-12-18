import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState, useRef } from 'react';
import logo from '../../assets/logo/logo.png';
import './Navbar.css';
import underline from '../../assets/new/underlinenew3.png';
import menubar from '../../assets/menu/bar1.png';
import close from '../../assets/menu/close.png';


const Navbar = () => {

  const [menu, setMenu] = useState('');

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }


  const handleClick = (props) => {
    setMenu(props);
  }
  return (
    <div className="navbar" >
        <img className="navbar-img" src={logo} alt="portfolio-logo"/>
        <img onClick={openMenu} src={menubar} alt="menu-bar" className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
            <img onClick={closeMenu} src={close} alt="close" className="nav-mob-close"/>
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



