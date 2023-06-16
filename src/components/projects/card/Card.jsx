import React from 'react';
import './Card.scss';
import { ExternalLink } from 'react-external-link';
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";


const Card = (props) => {
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
          <h3>{props.name}</h3>
          <div className="card-link">
            <ExternalLink href={props.link}>
              <TbWorldWww size={35} />
            </ExternalLink>
            <ExternalLink href={props.git}>
              < BsGithub size={30} />
            </ExternalLink>
          </div>
      </div>
    </div>
  );
};

export default Card;
