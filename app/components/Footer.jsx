import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Traversy Media</h3>
              <p>Learn modern web development with our comprehensive courses and tutorials.</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about/team">Our Team</Link></li>
              <li><Link href="/code/repos">Code</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Traversy Media. Made with <FiHeart className="heart-icon" /> for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;