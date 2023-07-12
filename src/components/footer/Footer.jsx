import React from "react";
import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© Colin Bertin JP 2022, All rights reserved.</p>
        <IconContext.Provider value={{ className: "contactIcon" }}>
          <ul>
            <li>
              <a
                href="https://github.com/ColinBertin"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/colinbertin/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={28} />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
