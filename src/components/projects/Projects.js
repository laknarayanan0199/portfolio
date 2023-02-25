import { CodeBracketIcon } from "@heroicons/react/20/solid";
import React from "react";
import classes from "./Projects.module.css";
import shopify from "../../assests/images/shopify.png";
import combat from "../../assests/images/combat.png";
import RPS from "../../assests/images/RPS.png";
import calculator from "../../assests/images/calc.png";

export default function Projects() {
  const projects = [
    {
      title: "Shopify",
      subtitle: "React, Redux-Toolkit",
      description: "A shopping app where you can get all your needs",
      image: shopify,
      link: "https://shopers-stop.netlify.app/",
    },
    {
      title: "Combat",
      subtitle: "HTML, CSS, Javascript",
      description: "Fight between player and monster",
      image: combat,
      link: "https://laknarayanan0199.github.io/Combat/",
    },
    {
      title: "Rock Paper, Scissor",
      subtitle: "HTML, CSS, Javascript",
      description:
        "A game where user can select the user choice as ROCK, PAPER, SCISSOR",
      image: RPS,
      link: "https://laknarayanan0199.github.io/Rock-Paper-Scissors/",
    },
    {
      title: "A Simple Calculator",
      subtitle: "HTML, CSS, Javascript",
      description: "A place where all of your calculations ends",
      image: calculator,
      link: "https://laknarayanan0199.github.io/calculator/",
    },
  ];

  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.classes}>
        <div className={classes.codeIcon}>
          <CodeBracketIcon />
        </div>
        <h1>Apps I've Built</h1>
        {/* <p>
        </p> */}
      </div>
      <div className={classes.projectList}>
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div>
              <img alt="gallery" src={project.image} />
              <div>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p></p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
