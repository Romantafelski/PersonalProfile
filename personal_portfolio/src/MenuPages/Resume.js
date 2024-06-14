import React from "react";
import Background from "../Images/Background.jpg";
import Nav from "../Nav";
import "./Resume.css";
import "./Main.css"

function Resume() {
  return (
    <div className="resumePage">
      <Nav />
      <span className="documents">
        <iframe className="coverLetter" src="https://docs.google.com/document/d/e/2PACX-1vTly2Sx-5HzPDZbdtte0_ZjSjatwDMohUyKSNkUpSHH_p50q51qEoC2rH5XJBjs7oUyyiv3BQboF2A1/pub?embedded=true"></iframe>
        <iframe
          classname="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vThc0tbabNSl_JtH5gjD0ZO0qbrwp1XVpuCr-5UC7fULNB3C7gu4zy7BRu2fU-1ddBSw6IqQatjicbG/pub?embedded=true"
        ></iframe>
      </span>
        <img className="background" src={Background} />
    </div>
  );
}

export default Resume;
