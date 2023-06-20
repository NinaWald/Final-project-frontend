import React from 'react';
import '../footer.css';
import twitterIcon from '../assets/twitter-sign.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import linkedIn from '../assets/linkedin-icon.png'
import logo from '../assets/flower.png'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#669999' }}>
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p className="logo-text">FRESH FLOWER DELIVERY EVERY DAY</p>
        </div>
        <div className="footer-container">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Flower shops</a></li>
            <li><a href="#">Club</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className="social-icons-container">
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
        </div>
        <h2>© 2023 Farm Fresh Flowers</h2>
        <div className="contact-me">
          <h3>by NinaW</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/nina-waldr%C3%A9us-b46abb104/"><img
                src={linkedIn}
                alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;