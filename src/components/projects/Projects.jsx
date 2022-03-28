import React from 'react';
import './Projects.scss';
import Card from './card/Card';

const Projects = (props) => {
  return (
    <section className='projects'>
      <h2>Web projects</h2>
      <div className="card-container">
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
      </div>
    </section>
  );
};

export default Projects;
