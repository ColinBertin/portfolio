import React from "react";
import { Link } from "react-scroll";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-p-container">
        <p className="about-intro">
          Hi! I'm Colin, nice to meet you. Please take a look around.
        </p>
        <p className="about-main-text">
          Passionate about building software and applications, I am a
          36-year-old Belgian. Based in Yokohama since 2018, I have been honing
          my web development skills. With a keen interest in the web industry, I
          am eager to collaborate on exciting projects. Feel free to contact me
          for more information!<span> </span>
          <Link
            className="about-contact-link"
            to="contact"
            smooth={true}
            duration={500}
          >
            contact me
          </Link>
          <span> </span>for more info!
        </p>
      </div>
    </section>
  );
};

export default About;
