import React from "react";
import "./Resume.css";
import "./Home.css";

function Resume() {
  return (
    <div className="resumePage">
      <span className="documents">
        <iframe
          title="Cover Letter"
          className="coverLetter"
          src="https://docs.google.com/document/d/e/2PACX-1vTly2Sx-5HzPDZbdtte0_ZjSjatwDMohUyKSNkUpSHH_p50q51qEoC2rH5XJBjs7oUyyiv3BQboF2A1/pub?embedded=true"
        ></iframe>
        <iframe
          title="Cover Letter"
          classname="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vThc0tbabNSl_JtH5gjD0ZO0qbrwp1XVpuCr-5UC7fULNB3C7gu4zy7BRu2fU-1ddBSw6IqQatjicbG/pub?embedded=true"
        ></iframe>
      </span>
    </div>
  );
}

export default Resume;
