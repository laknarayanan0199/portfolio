import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/20/solid";
import React from "react";
import classes from "./Skills.module.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "Styled Components",
    "Github",
    "Firebase",
  ];
  return (
    <section id="skills" className={classes.skills}>
      <div className={classes.skillll}>
        <p>
          <CpuChipIcon style={{ width: "3rem", color: "white" }} />
        </p>
        <h1>Skills &amp; Technologies</h1>
      </div>
      <div className={classes.skillcard}>
        {skills.map((skill) => (
          <div key={skill} className={classes.skillset}>
            <p>
              <CheckBadgeIcon style={{ width: "2rem", color: "#34D399" }} />
            </p>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
