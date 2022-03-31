import React from 'react';
import './Banner.scss';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from "react-icons/hi";

import me from '../../assets/me.jpeg';

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-photo">
        <img src={me} alt="Me" />
      </div>
      <div className="banner-intro">
        <p className='banner-pink'>Hi, my name is</p>
        <h1 className='banner-h1'>Colin Bertin</h1>
        <h2 className='banner-h2'>I'm a Full-Stack Developer </h2>
        <p className='banner-p-btn'>I am a Full-Stack web developer. I am looking to leverage my skills in Ruby on Rails and JavaScript.</p>
        <Link className='banner-btn' to='projects' smooth={true} duration={500}>
          View Work
          < HiArrowNarrowRight className='btn-arrow' />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
