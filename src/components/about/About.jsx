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
          I'm a web developer based in Yokohama, Japan, with a passion for
          crafting user-centric web experiences. Since 2018, I've honed my
          skills in building dynamic and responsive websites and applications.
          I'm a strong believer in the power of collaboration and bring a
          positive and results-oriented attitude to every project.<br />
          <Link
            className="about-contact-link"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          {" "}me for more info!
        </p>
      </div>
    </section>
  );
};

export default About;
