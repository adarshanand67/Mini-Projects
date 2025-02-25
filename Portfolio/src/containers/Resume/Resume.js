import React from "react";
import Button from "../../components/button/Button";
// import GoogleDocsViewer from "react-google-docs-viewer";
// import react router dom link
import {Link} from "react-router-dom";
import Btn from "../../components/Btn/Btn";

const Resume = () => {
  const windowWidth = window.innerWidth;
  const height = window.innerHeight;
  const resumeLink =
    "https://drive.google.com/file/d/1FhytKLqfKBxWEQHpFTF5Ai0WFAczQEVG/view?usp=drive_link";
  return (
    <>
      {/* <hr /> */}
      {/* Resume */}
      <div className="main" id="resume">
        {/* <p align="center">
          <h1 className="project_title_resume">Resume</h1>
          <iframe
            src={resumeLink}
            width={windowWidth / 1.25}
            height={height / 1.25}
            allow="autoplay"
          ></iframe>
        </p> */}

        {/* Download resume button */}
        <div className="button_container">
          <Btn
            text={"Download Resume"}
            href={resumeLink}
            className="project-button"
            newTab={true}
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
