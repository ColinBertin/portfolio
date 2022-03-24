import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from '../projects/Projects';
import About from '../about/About';

import './Navbar.scss'

const Navbar = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Projects} />
      <div className="navbar">
        <ul className="navbar-menu">
          <Link to="/" className="item" />
          <Link to="/about" className="item" />
          <Link to="/contact" className="item" />
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
