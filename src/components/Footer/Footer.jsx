import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Vinay h c. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect</p>
            </div>
        </div>
        
    </div>
  );
}

export default Footer;



/*
import logo from '../../assets/new/chad.png';
import user from '../../assets/new/personwhite.png';
*/
/*
<hr />
<div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="logo"/>
                <p>I'm a full-stack developer from Bangalore, India</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-mail-input">
                    <img src={user} alt="user-icon"/>
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
</div>
*/