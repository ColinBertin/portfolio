import { BsSun, BsMoon } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/cb.webp";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar = ({ toggleTheme, theme }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
        document.body.style.overflow = '';
    };
  }, [nav]);

  return (
    <div className={`navbar navbar-${theme}`}>
      <img className="logo" src={Logo} width="50" height="50" alt="logo" />
      {/* Menu */}
      <ul className="desktop-list">
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className={`theme-button theme-btn-desktop ${theme}`}
          >
            {theme === "dark" ? (
              <BsSun style={{ strokeWidth: "0.5" }} />
            ) : (
              <BsMoon style={{ strokeWidth: "0.2" }} />
            )}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className={`mobile-hamburger ${theme}`}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "mobile-list"
            : `mobile-list-active mobile-list-active-${theme}`
        }
      >
        <li>
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className={`theme-button theme-btn-desktop ${theme}`}
          >
            {theme === "dark" ? (
              <BsSun style={{ strokeWidth: "0.5", fontSize: "36px" }} />
            ) : (
              <BsMoon style={{ strokeWidth: "0.2", fontSize: "36px" }} />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
