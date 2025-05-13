import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../css/14-footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <h4>Sonitly</h4>
          <p>Your one-stop shop for music and books. Discover the latest in entertainment.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/home">Home</a>
            <a href="/about">About Us</a>
            <a href="/shop">Shop</a>
            <a href="/explore">Explore</a>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Sonitly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
