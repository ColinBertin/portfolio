import React from 'react';
import './Card.scss';

import traq from './traq.png';

const Card = () => {
  return (
    <div className='card'>
      <div className="card-preview">
        <img src={traq} alt="traq" />
      </div>
      <div className="card-info">
        <h3>TraQ</h3>
        <ul>
          <li className='card-language'><i class="devicon-rails-plain-wordmark"></i></li>
          <li className='card-language'><i class="devicon-javascript-plain"></i></li>
          <li className='card-language'><i class="devicon-heroku-original-wordmark"></i></li>
          <li className='card-language'><i class="devicon-adonisjs-original"></i></li>
          <li className='card-language'><i class="devicon-adonisjs-original"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
