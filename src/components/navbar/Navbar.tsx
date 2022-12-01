import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/cb.webp';
import './Navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar">
      <img className='logo' src={Logo} width="50" height="50" alt="logo" />
      {/* Menu */}
      <ul className='desktop-list'>
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
        {/* <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li> */}
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
      <div onClick={handleClick} className='mobile-hamburger'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'mobile-list'
            : 'mobile-list-active'
        }
      >
        <li>
          <Link onClick={handleClick} to='banner' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        {/* <li>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li> */}
        <li>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
