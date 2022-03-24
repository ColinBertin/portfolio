import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className='card'>
      <div className="preview">
        <img src="" alt="" />
      </div>
      <div className="info">
        <h3>TraQ</h3>
        <ul>
          <li className='language'><i class="devicon-rails-plain-wordmark"></i></li>
          <li className='language'><i class="devicon-javascript-plain"></i></li>
          <li className='language'><i class="devicon-heroku-original-wordmark"></i></li>
          <li className='language'><i class="devicon-adonisjs-original"></i></li>
          <li className='language'><i class="devicon-adonisjs-original"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
