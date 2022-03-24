import React from 'react';
import './Banner.scss';

import me from '../../assets/me.jpeg';

const Banner = (props) => {
  return (
    <div className='banner'>
      <div className="photo">
        <img src={me} alt="Me" />
      </div>
      <div className="intro">
        <h1>Hi, I am Colin!</h1>
        <p>I am a Full-Stack web developer. I am looking to leverage my skills in Ruby on Rails and JavaScript.</p>
      </div>
    </div>
  );
};

export default Banner;
