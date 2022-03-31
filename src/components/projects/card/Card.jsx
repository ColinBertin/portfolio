import React from 'react';
import './Card.scss';
import { ExternalLink } from 'react-external-link';

const Card = (props) => {
  console.log(props.url)
  return (
    <div className='card'>
      <div className="card-preview">
        <img src={props.img} alt="traq" />
        <ul className='card-languages'>
          {
            props.language.map((lng, index) => {
              return <li key={index} className='card-language'>{lng}</li>
            })
          }
        </ul>
      </div>
      <div className="card-info">
        <ExternalLink href={props.link}>
          <h3>{props.name}</h3>
        </ExternalLink>
      </div>
    </div>
  );
};

export default Card;
