import React from "react";
import Background from "../Images/Background.jpg";
import MPROSolo from "../Images/MPROSolo.jpg";
import Nav from "../Nav";
import "./Main.css";

function Home() {
  return (
    <div>
      <Nav className="Nav"/>
      <img className="background" src={Background} />
      <div className="circle"></div>
      <img className="me" src={MPROSolo} alt="Roman" />
    </div>
  );
}

export default Home;
