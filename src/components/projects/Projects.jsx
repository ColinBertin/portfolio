import React from "react";
import "./Projects.scss";
import Card from "./card/Card";

import { GetProjects } from "./getProjects";

const projects = GetProjects();

const Projects = () => {
  return (
    <section className="projects">
      <h2>Web projects</h2>
      <div className="card-container">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              name={project.name}
              img={project.img}
              language={project.language}
              link={project.url}
              git={project.git}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
