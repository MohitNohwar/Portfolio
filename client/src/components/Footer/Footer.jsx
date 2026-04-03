import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-name">Mohit Chaudhary</h3>
        <p className="footer-text">
          Built with <span className="typewriter-text"><Typewriter words={["React", "MERN", "passion"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span> for web development.
        </p>

        <div className="footer-links">
          <a href="https://github.com/MohitNohwar" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohit-chaudhary-328a47341/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Mohit Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;