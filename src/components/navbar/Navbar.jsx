import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* Menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

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
