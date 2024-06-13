import React from "react";
import Background from "../Images/Background.jpg";
import MyLogo from "../Images/MyLogo.png";
import { Link } from "react-router-dom";
import Nav from "../Nav"
import "./Main.css";

function Projects() {
  return (
    <div>
      <Nav />
      <img className="background" src={Background} />
      <div className="circle"></div>
      <menu>
        <Link to="/">
          <button type="button" className="menuItem" id="home">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="menuItem" id="aboutMe">
            About Me
          </button>
        </Link>
        <Link to="/resume">
          <button className="menuItem" id="resume">
            Resume
          </button>
        </Link>
        <Link to="/projects">
          <button className="menuItem" id="projects">
            Projects
          </button>
        </Link>
      </menu>
      <img className="menuItem" id="myLogo" src={MyLogo} alt="Logo" />
    </div>
  );
}

export default Projects;
