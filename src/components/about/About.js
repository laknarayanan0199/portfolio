import React from "react";
import coding from "../../assests/images/coding.svg";
import classes from "./About.module.css";
import resume from "../../assests/Lakshmi_Narayanan_R.pdf";

export default function About() {
  return (
    <div className={classes.about}>
      <section className={classes.heading}>
        <h1>Hi, I'm Lakshmi Narayanan.</h1>
        <h3>I am Frontend Developer.</h3>
        <p>
          As a Software Engineer with expertise in versatile technologies
          involving in Front-end developer and I created successful applications
          that are Fast, Easy to use, Responsive and built with best practices.
        </p>
        <div className={classes.details}>
          <a href="#contact">Get In Touch</a>
          <a href={resume}>Resume</a>
        </div>
      </section>
      <section className={classes.coding}>
        <img className={classes.img} alt="hero" src={coding} />
      </section>
    </div>
  );
}
