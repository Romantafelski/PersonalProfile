import { Link } from "react-router-dom";
import MyLogo from "./Images/MyLogo.png";
import React from "react";
import "./Nav.css"


function Navbar () {
    return (
      <div>
        <Navbar />
        <menu>
          <a href="/">
            <img button="onclick" className="myLogo" src={MyLogo} alt="Logo" />
          </a>
          <Link to="/">
            <button type="button" className="menuItems">
              Home
            </button>
          </Link>
          <Link to="/about" className="menuItems">
            <button className="menuItems">About Me</button>
          </Link>
          <Link to="/resume">
            <button className="menuItems">Resume</button>
          </Link>
          <Link to="/projects">
            <button className="menuItems">Projects</button>
          </Link>
        </menu>
      </div>
    );
}

export default Navbar