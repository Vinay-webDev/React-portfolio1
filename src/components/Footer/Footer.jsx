import React from 'react'
import './Footer.css';
import logo from '../../assets/chad.png';
import user from '../../assets/user.png';



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="logo"/>
                <p>I'm a full-stack developer from Bangalore, India</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-mail-input">
                    <img src={user} alt="user-icon"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;