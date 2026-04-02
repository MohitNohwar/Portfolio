// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar__brand">My Portfolio</div>
//       <ul className="navbar__links">
//         <li>Home</li>
//         <li>About</li>
//         <li>Skills</li>
//         <li>Projects</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Side - Brand */}
        <div className="navbar-logo">
          Mohit <span className="typewriter-text"><Typewriter words={["Chaudhary", "MERN Developer", "React Learner"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span>
        </div>

        {/* Right Side - Links */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
