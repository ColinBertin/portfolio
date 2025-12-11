// import traq from "../../assets/images/traq.png";
import obj from "../../assets/images/objectif-crea.png";
import ent from "../../assets/images/entertainment.png";
import kan from "../../assets/images/kanban.png";
// import drump from "../../assets/images/drum.webp";
import country from "../../assets/images/countries.webp";
import weather from "../../assets/images/weather-min.png";

export function GetProjects() {
  const express = () => {
    return (
      <a href="https://expressjs.com" target="blank">
        <i
          className="devicon-express-original"
          style={{ color: "#F5F5F5" }}
        ></i>
      </a>
    );
  };

  const django = () => {
    return (
      <a href="https://www.djangoproject.com" target="blank">
        <i className="devicon-django-plain" style={{ color: "#092E20" }}></i>
      </a>
    );
  };

  // const rails = () => {
  //   return (
  //     <a href="https://rubyonrails.org" target="blank">
  //       <i
  //         className="devicon-rails-plain-wordmark"
  //         style={{ color: "#D4382E" }}
  //       ></i>
  //     </a>
  //   );
  // };

  const typescript = () => {
    return (
      <a href="https://www.typescriptlang.org" target="blank">
        <i
          className="devicon-typescript-plain"
          style={{ color: "#2f73bf" }}
        ></i>
      </a>
    );
  };

  // const javascript = () => {
  //   return (
  //     <a
  //       href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  //       target="blank"
  //     >
  //       <i
  //         className="devicon-javascript-plain"
  //         style={{ color: "#EFD82F" }}
  //       ></i>
  //     </a>
  //   );
  // };

  const vercel = () => {
    return (
        <a href="https://devcenter.heroku.com" target="blank">
          <i className="devicon-vercel-original" style={{ color: "#000" }}></i>
        </a>
    );
  };

  // const heroku = () => {
  //   return (
  //     <a href="https://devcenter.heroku.com" target="blank">
  //       <i
  //         className="devicon-heroku-original-wordmark"
  //         style={{ color: "#6837AF" }}
  //       ></i>
  //     </a>
  //   );
  // };

  // const html = () => {
  //   return (
  //     <a
  //       href="https://developer.mozilla.org/en-US/docs/Web/HTML"
  //       target="blank"
  //     >
  //       <i
  //         className="devicon-html5-plain-wordmark"
  //         style={{ color: "#DD4C30" }}
  //       ></i>
  //     </a>
  //   );
  // };

  const css = () => {
    return (
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank">
        <i
          className="devicon-css3-plain-wordmark"
          style={{ color: "#3995CF" }}
        ></i>
      </a>
    );
  };

  // const bootstrap = () => {
  //   return (
  //     <a href="https://getbootstrap.com" target="blank">
  //       <i
  //         className="devicon-bootstrap-plain-wordmark"
  //         style={{ color: "#794EF6" }}
  //       ></i>
  //     </a>
  //   );
  // };

  const react = () => {
    return (
      <a href="https://react.dev" target="blank">
        <i className="devicon-react-plain" style={{ color: "#63DBFB" }}></i>
      </a>
    );
  };

  const next = () => {
    return (
      <a className="next-logo" href="https://nextjs.org" target="blank">
        <i
          className="devicon-nextjs-plain-wordmark"
          style={{ color: "#FFF" }}
        ></i>
      </a>
    );
  };

  const tailwind = () => {
    return (
      <a href="https://tailwindcss.com" target="blank">
        <i
          className="devicon-tailwindcss-plain"
          style={{ color: "#63DBFB" }}
        ></i>
      </a>
    );
  };

  const projects = [
    {
      name: "Kanban",
      description: "Manage you tasks like a pro",
      img: kan,
      language: [django(), next(), typescript(), tailwind()],
      url: "https://kanban-ten-bay.vercel.app/",
    },
    {
      name: "Entertainment",
      description: "Create your own watch list",
      img: ent,
      language: [express(), react(), typescript(), tailwind()],
      url: "https://entertainment-lemon.vercel.app/",
      git: "https://github.com/ColinBertin/entertainment_v2",
    },
    {
      name: "My Blog Photographer",
      description: "Photographer portfolio",
      img: obj,
      language: [next(), typescript(), tailwind(), vercel()],
      url: "https://objectif-crea.vercel.app/",
      git: "https://github.com/ColinBertin/objectif-crea",
    },
    {
      name: "Countries infos",
      description: "Get information about country",
      img: country,
      language: [react(), css()],
      url: "https://colinbertin.github.io/countries-flags-infos/",
      git: "https://github.com/ColinBertin/countries-flags-infos",
    },
    // {
    //   name: "TraQ",
    //   description: "Emergency response service...",
    //   img: traq,
    //   language: [rails(), javascript(), heroku()],
    //   url: "https://traq-795.herokuapp.com",
    //   git: "https://github.com/ColinBertin/traq",
    // },
    {
      name: "Weather Forecast",
      description: "Simple Weather app",
      img: weather,
      language: [next(), tailwind(), vercel()],
      url: "https://weather-app-kappa-livid.vercel.app",
      git: "https://github.com/ColinBertin/weather-app",
    },
    // {
    //   name: "Drum JS",
    //   description: "Playing around with event listener and playing sound",
    //   img: drump,
    //   language: [html(), css(), javascript()],
    //   url: "https://colinbertin.github.io/JS-drum-kit",
    //   git: "https://github.com/ColinBertin/JS-drum-kit",
    // },
  ];
  return projects;
}
