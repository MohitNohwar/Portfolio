import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Skills.css";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Expertise in <span className="typewriter-text"><Typewriter words={["React", "Node.js", "MongoDB", "JavaScript"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span></p>
        <br />
        <div className="skills-grid">
          {(skillsData || []).map((item, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-category">{item.category}</h3>

              <div className="skill-badges">
                {(item.skills || []).map((skill, skillIndex) => (
                  <span className="skill-badge" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;