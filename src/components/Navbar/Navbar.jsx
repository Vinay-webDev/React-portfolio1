import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState, useRef } from 'react';
import pfp from '../../assets/pfp/pfp.png';
import './Navbar.css';
import underline from '../../assets/new/underlinenew3.png';
import menubar from '../../assets/menu/bar1.png';
import close from '../../assets/menu/close.png';
import github from '../../assets/logo/githubwhite.png';
import linkedIn from '../../assets/logo/linkedin.png';
import gmail from '../../assets/logo/gmail.png';


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
        <img className="navbar-img" src={pfp} alt="portfolio-logo"/>
        <img onClick={openMenu} src={menubar} alt="menu-bar" className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
            <img onClick={closeMenu} src={close} alt="close" className="nav-mob-close"/>
            <li><AnchorLink className="anchor-link" href="#about" offset={50} ><p onClick={() => handleClick("about")}>About</p>{menu==="about"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            {/*<li>Portfolio</li>*/}
            <li><AnchorLink className="anchor-link" href="#projects" offset={50} ><p onClick={() => handleClick("projects")}>Projects</p>{menu==="projects"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
            {/*/////////////////////// */}
            <li><AnchorLink className="anchor-link" href="#contact" offset={50} ><p onClick={() => handleClick("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt="underline"/>:<></>}</AnchorLink></li>
        </ul>
        <div className='nav-socials'>
            <img src={github} onClick={() => window.open('https://github.com/Vinay-webDev', '_blank')} alt="github" />
            <img src={linkedIn} onClick={() => window.open('https://www.linkedin.com/in/vinay-h-c-0b3106335', '_blank')} alt="linkedIn" />
            <img src={gmail} onClick={() => window.open('mailto:vinayhc.webdev@gmail.com', '_blank')} alt="gmail" />
        </div>
        <div className="nav-connect"><AnchorLink className="anchor-link" href="#contact" offset={50}>Connect</AnchorLink></div>
    </div>
  );
}

export default Navbar;