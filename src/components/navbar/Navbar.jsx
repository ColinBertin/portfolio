import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { Link } from 'react-scroll';

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* Menu */}
      <ul className=''>
        <li>
          <Link to='banner' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div>
        <FaBars className='mobile-hamburger' />
      </div>
      {/* Mobile menu */}
      <ul className='mobile-list'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
