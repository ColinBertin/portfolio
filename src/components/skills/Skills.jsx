import React from "react";
import "./Skills.scss";

const Skills = ({ theme }) => {
  const skillsList = [
    {
      name: "express",
      url: "https://expressjs.com",
      class: "devicon-express-original",
      color: theme === "dark" ? "#f5f5f5" : "#101829",
    },
    {
      name: "react",
      url: "https://react.dev",
      class: "devicon-react-plain",
      color: "#63DBFB",
    },
    {
      name: "next",
      url: "https://nextjs.org",
      class: "devicon-nextjs-plain-wordmark",
      color: theme === "dark" ? "#fff" : "#101829",
    },
    {
      name: "javascript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      class: "devicon-javascript-plain",
      color: "#EFD82F",
    },
    {
      name: "typescript",
      url: "https://www.typescriptlang.org",
      class: "devicon-typescript-plain",
      color: "#2f73bf",
    },
    {
      name: "tailwind",
      url: "https://tailwindcss.com",
      class: "devicon-tailwindcss-plain",
      color: "#63DBFB",
    },
    {
      name: "vercel",
      url: "https://vercel.com/",
      class: "devicon-vercel-original-wordmark",
      color: theme === "dark" ? "#fff" : "#101829",
    },
    {
      name: "heroku",
      url: "https://devcenter.heroku.com",
      class: "devicon-heroku-original-wordmark",
      color: "#6837AF",
    },
    {
      name: "git",
      url: "https://git-scm.com",
      class: "devicon-git-plain",
      color: "#f54d27",
    },
    {
      name: "github",
      url: "https://github.com/",
      class: "devicon-github-original-wordmark",
      color: theme === "dark" ? "#fff" : "#101829"
    },
    {
      name: "ruby",
      url: "https://www.ruby-lang.org/en/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    },
    {
      name: "rails",
      url: "https://rubyonrails.org",
      class: "devicon-rails-plain-wordmark",
      color: "#D4382E",
    },
    {
      name: "python",
      url: "https://docs.python.org/3/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "django",
      url: "https://docs.djangoproject.com/en/5.1/",
      class: "devicon-django-plain-wordmark",
      color: "#0b4b33",
    },
    {
      name: "postgresql",
      url: "https://www.postgresql.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "figma",
      url: "https://www.figma.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-language">
      {skillsList.map((skill) => (
        <a
          key={skill.name}
          href={skill.url}
          target="_blanck"
        >
          {skill.class ? 
          <i
            className={skill.class}
            style={{ color: skill.color }}
          />
          : 
            <img alt={skill.name} src={skill.src} />
          }
        </a>
      ))}
      </div>
    </section>
  );
};

export default Skills;
