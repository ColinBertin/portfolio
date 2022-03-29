import React from 'react';
import './Card.scss';
import { ExternalLink } from 'react-external-link';

const Card = (props) => {
  return (
    <div className='card'>
      <div className="card-preview">
        <img src={props.img} alt="traq" />
      </div>
      <div className="card-info">
        <ExternalLink href={props.url}>
          <h3>{props.name}</h3>
        </ExternalLink>
        <ul className='card-languages'>
          {
            props.language.map((lng, index) => {
              return <li key={index} className='card-language'>{lng}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Card;
