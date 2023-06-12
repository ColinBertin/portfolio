import React from "react";
import { Link } from "react-scroll";
import "./About.scss";

const About = ({ theme }) => {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-p-container">
        <p className="about-intro">
          Hi! I'm Colin, nice to meet you. Please take a look around.
        </p>
        <p className="about-main-text">
          Passionate about building software and application. 36 years old from
          Belgium, based in Yokohama since 2018, I have been working on
          developing my Web developer skills. I always have been interested in
          the web industry. I am looking to collaborate and work on an exciting
          project! Do not hesitate to<span> </span>
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
