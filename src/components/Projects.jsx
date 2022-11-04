/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/clock.jpg",
      gLink: "https://github.com/Geetu94/Weather_app_using-React-",
      lLink: "https://63652e9746a0db11bb43b735--shimmering-fairy-c6ccd1.netlify.app/",
    },
    {
      title: "Project 2",
      img: "/cal.jpeg",
      gLink: "https://github.com/Geetu94/first-cal-with-react",
      lLink: "https://63652c392926271229af5fb9--remarkable-bunny-b353e6.netlify.app/",
    },
    {
      title: "Project 3",
      img: "/tic.jpg",
      gLink: "https://github.com/Geetu94/Tic_Tac_Game",
      lLink: "https://63652393c0841a0a6c3902e1--legendary-treacle-dc7bfc.netlify.app/",
    },
    {
      title: "Project 4",
      img: "/960x0.jpg",
      gLink: "https://github.com/Geetu94/Todo_list_in-react",
      lLink: "https://63652dedb355031374c514ae--radiant-bunny-082506.netlify.app/",
    },
    {
      title: "Project 5",
      img: "/photographyPhoto.jpg",
      gLink: "https://github.com/Geetu94/dino-game",
      lLink: "https://6365319446a0db149b43bc25--funny-naiad-0b2072.netlify.app/",
    },
    {
      title: "Project 6",
      img: "/snake.jpg",
      gLink: "https://github.com/Geetu94/snake_game",
      lLink: "https://63652680c401f80b3c924436--endearing-daifuku-3340da.netlify.app/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Geetu94"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
