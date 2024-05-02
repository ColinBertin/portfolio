import React from "react";
import "./Banner.scss";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

import me from "../../assets/me.webp";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-photo">
        <img src={me} width="150" height="150" alt="Me" />
      </div>
      <div className="banner-intro">
        <p className="banner-pink">Hi, my name is</p>
        <h1 className="banner-h1">
          Colin Bertin <br/><span className="banner-h2">I am a Full Stack Developer.</span>
        </h1>
        <p className="banner-p-btn">
          I am a full-stack developer specializing in crafting exceptional
          digital experiences. Currently, I am focused on developing responsive
          full-stack applications.
        </p>
        <Link className="banner-btn" to="projects" smooth={true} duration={500}>
          View Work
          <HiArrowNarrowRight className="btn-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
