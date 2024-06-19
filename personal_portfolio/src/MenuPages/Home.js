import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../Images/MyLogo.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <img className="logo" src={MyLogo} />
      <span>
        <h1>Roman Tafelski</h1>
        <h4>Software Engineer</h4>
      </span>
        <Link to="/about">
          <button className="menuItems, about">About Me</button>
        </Link>
        <Link to="/resume">
          <button className="menuItems, resume">
            Resume
          </button>
        </Link>
        <Link to="/projects">
          <button className="menuItems, projects">
            Projects
          </button>
        </Link>
      </div>
  );
}

export default Home;
