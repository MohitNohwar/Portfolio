import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's connect: <span className="typewriter-text"><Typewriter words={["Collaborate", "Build something", "Talk tech"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1500} /></span></p>
        <p className="contact-text">
          Feel free to reach out for collaboration, project discussions, or just
          to connect.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;