import React from 'react';
import './Banner.scss';

import me from '../../../public/me.jpeg';

const Banner = (props) => {
  return (
    <div className='banner'>
      <div className="photo">
        <img src={me} alt="Me" />
      </div>
      <div className="intro">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi dignissimos hic laborum voluptates vero? Quo aspernatur id dolores expedita.</p>
      </div>
    </div>
  );
};

export default Banner;
