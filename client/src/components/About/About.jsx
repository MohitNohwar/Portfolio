import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">I am <span className="typewriter-text"><Typewriter words={["a B.Tech IT student", "a MERN stack learner", "a problem solver"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span></p>

        <div className="about-content">
          <p>
            I’m Mohit Chaudhary, a B.Tech IT student with a strong academic
            foundation in DSA, C/C++, DBMS, SQL, and COA. These subjects helped
            me build problem-solving skills and a solid understanding of
            programming and computer fundamentals.
          </p>

          <p>
            Along with my academics, I’ve been exploring web development using
            HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. I’m
            currently learning React to strengthen my MERN stack development
            skills and build modern web applications.
          </p>

          <p>
            I enjoy creating practical projects, improving my technical
            knowledge, and learning how real-world applications are designed and
            developed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;