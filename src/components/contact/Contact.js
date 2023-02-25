import React from "react";
import classes from "./Contact.module.css";
import gmail from "../../assests/images/gmail.png";
import github from "../../assests/images/github.png";
import linkedin from "../../assests/images/linkedin.png";
import phone from "../../assests/images/phone.png";

export default function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <h1>Get In Touch</h1>
      <div className={classes.contactInfo}>
        <div>
          <h3>
            <img src={gmail} alt="gmail" />
          </h3>
          <a
            href="mailto:laknarayanan0199@gmail.com"
            style={{ textDecoration: "none" }}
          >
            laknarayanan0199@gmail.com
          </a>
        </div>
        <div>
          <h3>
            <img src={phone} alt="phone" />
          </h3>
          <a href="tel:+91-8056606355">8056606355</a>
        </div>
        <div>
          <h3>
            <img src={github} alt="github" />
          </h3>
          <a href="https://github.com/laknarayanan0199">
            github.com/laknarayanan0199
          </a>
        </div>
        <div>
          <h3>
            <img src={linkedin} alt="linkedin" />
          </h3>
          <a href="https://www.linkedin.com/in/lakshminarayan0199/">
            linkedin.com/laknarayanan0199
          </a>
        </div>
      </div>
      {/* <section className={classes.contact}>
        <div className={classes.contactInfo}>
          <h3>
            EMAIL <br />
            <a
              href="mailto:laknarayanan0199@gmail.com"
              style={{ textDecoration: "none" }}
            >
              laknarayanan0199@gmail.com
            </a>
          </h3>
          <h3>
            PHONE <br />
            <a href="tel:+91-8056606355">8056606355</a>
          </h3>
        </div>
      </section> */}
    </div>
  );
}
