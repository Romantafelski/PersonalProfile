import React from "react";
import Nav from "../Nav";
import Background from "../Images/Background.jpg";
import "./Main.css";

function Projects() {
  return (
    <div>
      <Nav />
      <img className="background" src={Background} />
      <div className="circle"></div>
    </div>
  );
}

export default Projects;
