import React from "react";
import Profile from "../images/profile.png";
import LinkedIn from "../images/linkedin.png";
import Resume from "../images/resume.png";
import ResumePDF from "../images/resume.pdf";

export default function Header() {
  const openResumePDF = () => {
    window.open(ResumePDF, "_blank");
  };
  return (
    <div className="header--container">
      <img className="header--image" src={Profile} alt="Profile" />
      <h3 className="header--name">Desiree Diane O. Cabales</h3>
      <h4 className="header--role">Backend Developer</h4>
      <span className="header--link">cabalesdesireediane@gmail.com</span>
      <div className="btn--container">
        <button className="header--btn btn1" onClick={openResumePDF} style={{ cursor: "pointer" }}>
          <img src={Resume} className="resume" alt="Resume" />
          Resume
        </button>
        <button className="header--btn btn2">
        <a href="https://www.linkedin.com/in/desiree-diane-cabales-6841852a8">
          <img src={LinkedIn} className="linkedin" alt="LinkedIn" />
          </a>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
