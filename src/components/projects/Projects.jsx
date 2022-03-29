import React from 'react';
import './Projects.scss';
import Card from './card/Card';
import traq from '../../assets/images/traq.png';
import hpt from '../../assets/images/happy-tour.png';
import profile from '../../assets/images/profile.png';
import wlist from '../../assets/images/watch-list.png';




const projects = [
  {
    name: "TraQ",
    description: "Emergency response service...",
    img: traq,
    language: [<i className="devicon-ruby-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>],
    url: "https://www.traq.info/"
  },
  {
    name: "Happy Tour",
    description: "Find the best brewerie tour near to you",
    img: hpt,
    language: [<i className="devicon-ruby-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>],
    url: "https://happy-tour-795.herokuapp.com/"
  },
  {
    name: "Watch list",
    description: "Create your own watch list",
    img: wlist,
    language: [<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>,<i className="devicon-bootstrap-plain-wordmark" style={{color: "#794EF6"}}></i>],
    url: "https://colin-watch-list.herokuapp.com/"
  },
  {
    name: "Simple profile",
    description: "Find the best brewerie tour near to you",
    img: profile,
    language: [<i className="devicon-html5-plain-wordmark" style={{color: "#DD4C30"}}></i>,<i className="devicon-css3-plain-wordmark" style={{color: "#3995CF"}}></i>],
    url: "https://colinbertin.github.io/profile/"
  }
]

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Web projects</h2>
      <div className="card-container">
        {projects.map((project, index) => {
            return < Card key={index} name={project.name} img={project.img} language={project.language} link={project.url} />
          })}
      </div>
    </section>
  );
};

export default Projects;
