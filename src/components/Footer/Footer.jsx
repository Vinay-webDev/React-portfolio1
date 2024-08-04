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
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Chad. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect</p>
        </div>
    </div>
  );
}

export default Footer;