import React from 'react';
import './Projects.scss';
import Card from './card/Card';
import traq from '../../assets/images/traq.png';
import hpt from '../../assets/images/happy-tour.png';
import profile from '../../assets/images/profile.png';
import wlist from '../../assets/images/watch-list.png';
import drump from '../../assets/images/drump.png';
import country from '../../assets/images/countries.png';


// Add the projects to a JSON file and import it good style

const projects = [
  {
    name: "TraQ",
    description: "Emergency response service...",
    img: traq,
    language: [<i className="devicon-ruby-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>],
    url: "https://www.traq.info/",
    git: "https://github.com/ColinBertin/traq"
  },
  {
    name: "Happy Tour",
    description: "Find the best brewerie tour near to you",
    img: hpt,
    language: [<i className="devicon-ruby-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>],
    url: "https://happy-tour-795.herokuapp.com/",
    git: "https://github.com/ColinBertin/happy-tour"
  },
  {
    name: "Watch list",
    description: "Create your own watch list",
    img: wlist,
    language: [<i className="devicon-rails-plain-wordmark" style={{color: "#D4382E"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-heroku-original-wordmark" style={{color: "#6837AF"}}></i>,<i className="devicon-bootstrap-plain-wordmark" style={{color: "#794EF6"}}></i>],
    url: "https://colin-watch-list.herokuapp.com/",
    git: "https://github.com/ColinBertin/rails-watch-list"
  },
  {
    name: "Simple profile",
    description: "Find the best brewerie tour near to you",
    img: profile,
    language: [<i className="devicon-html5-plain-wordmark" style={{color: "#DD4C30"}}></i>,<i className="devicon-css3-plain-wordmark" style={{color: "#3995CF"}}></i>],
    url: "https://colinbertin.github.io/profile/",
    git: "https://github.com/ColinBertin/profile"
  },
  {
    name: "Drump JS",
    description: "Playing around with event listener and playing sound",
    img: drump,
    language: [<i className="devicon-html5-plain-wordmark" style={{color: "#DD4C30"}}></i>,<i className="devicon-css3-plain-wordmark" style={{color: "#3995CF"}}></i>,<i className="devicon-javascript-plain" style={{color: "#EFD82F"}}></i>],
    url: "https://colinbertin.github.io/JS-drum-kit/",
    git: "https://github.com/ColinBertin/JS-drum-kit"
  },
  {
    name: "Countries infos",
    description: "Get information about country",
    img: country,
    language: [<i className="devicon-react-plain" style={{color: "#EFD82F"}}></i>,<i className="devicon-css3-plain-wordmark" style={{color: "#3995CF"}}></i>],
    url: "https://countries-infos-flags.herokuapp.com/",
    git: "https://github.com/ColinBertin/countries-flags-infos"
  }
]

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Web projects</h2>
      <div className="card-container">
        {projects.map((project, index) => {
            return < Card key={index} name={project.name} img={project.img} language={project.language} link={project.url} git={project.git} />
          })}
      </div>
    </section>
  );
};

export default Projects;
