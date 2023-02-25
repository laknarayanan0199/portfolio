import React from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <a href="#about">Lakshmi Narayanan R</a>
      <nav>
        {/* <a href="#home">Home</a> */}
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
