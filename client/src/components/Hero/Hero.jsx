import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

function Hero() {
  const [displayName, setDisplayName] = useState("");
  const name = "Mohit Chaudhary";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayName(name.slice(0, index + 1));
      index += 1;
      if (index === name.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>

        <h1 className="hero-name">{displayName}</h1>

        <h2 className="hero-title">
          I'm a <span className="typewriter-text">
            <Typewriter
              words={[
                "MERN Stack Learner",
                "React Developer",
                "B.Tech IT Student",
                "Problem Solver"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="hero-description">
          I have a strong foundation in DSA, C/C++, DBMS, SQL, and COA.
          I'm currently building projects using the MERN stack and learning
          React to create modern, user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn secondary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

