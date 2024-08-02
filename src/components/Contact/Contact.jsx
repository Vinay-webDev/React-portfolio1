import React from 'react'
import './Contact.css';
import theme from '../../assets/theme2.png';
import phone from '../../assets/phone2.png';
import location from '../../assets/location.png';
import mail from '../../assets/mail2.png';





const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Contact me</h1>
            <img src={theme} alt="theme"/>
        </div>
    </div>
  );
}

export default Contact