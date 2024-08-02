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
        <div className="contact-container">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="mail"/><p>chad.dev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="mail"/><p>+91 7777777777</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="mail"/><p>Bangalore, India</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name"/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter email"/>
                <label htmlFor="">Write message</label>
                <textarea name="message" rows="8"  placeholder="message"/>
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Contact