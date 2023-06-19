import React from "react";
import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>© Colin Bertin JP, All rights reserved.</p>
      <IconContext.Provider value={{ className: "contactIcon" }}>
        <ul>
          <li>
            <a href="https://github.com/ColinBertin" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/colinbertin/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
