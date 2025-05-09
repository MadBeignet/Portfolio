import React from "react";
import Projects from "./Projects";

import { filelines, githubicon, linkedin } from "../images";
import resume from "../documents/resume.pdf";
import ToolTip from "@mui/material/Tooltip";

function NewMainPage() {
  return (
    <div>
      <div className="mobile-display">
        {/* <Header /> */}
        <div className="main-container">
          {/* <AboutMe /> */}
          <div className="secondary-container">
            <div className="portfolio-welcome-message">
              <h2>Hi, I'm Maddie Wisinski!</h2>
              <p>
                I graduated from Tulane University with 
                a BSE in Engineering Physics and Computer Science
                and a certificate in Computational Engineering
              </p>
              <span id="desc">
                I have designed this website using ReactJS, HTML, and CSS. The
                repository for this website can be found{" "}
                <a
                  className="github-repo-link"
                  href="https://github.com/MadBeignet/Portfolio"
                >
                  here
                </a>
              </span>
              <div className="info-grid">
                <div>
                  <p>Resume</p>
                  <a href={resume} download>
                    <ToolTip title="Download Resume">
                      <img alt="none :(" className="icon" src={filelines} />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/maddie-wisinski/">
                    <ToolTip title="View LinkedIn">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={linkedin}
                      />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>GitHub</p>
                  <a href="https://www.github.com/MadBeignet">
                    <ToolTip title="View Github">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={githubicon}
                      />
                    </ToolTip>
                  </a>
                </div>
              </div>
              <Projects />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-display">
        {/* <Header /> */}
        <div className="main-container">
          {/* <AboutMe /> */}
          <div className="secondary-container">
            <div className="portfolio-welcome-message">
              <h2>Hi, I'm Maddie Wisinski!</h2>
              <p>
                I graduated from Tulane University with 
                a BSE in Engineering Physics and Computer Science
                and a certificate in Computational Engineering
              </p>
              <span id="desc">
                I have designed this website using ReactJS, HTML, and CSS. The
                repository for this website can be found{" "}
                <a
                  className="github-repo-link"
                  href="https://github.com/MadBeignet/Portfolio"
                >
                  here
                </a>
              </span>
              <span className="info-grid">
                <div>
                  <p>Resume</p>
                  <a href={resume} download>
                    <ToolTip title="Download Resume">
                      <img alt="none :(" className="icon" src={filelines} />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/maddie-wisinski/">
                    <ToolTip title="View LinkedIn">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={linkedin}
                      />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>GitHub</p>
                  <a href="https://www.github.com/MadBeignet">
                    <ToolTip title="View Github">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={githubicon}
                      />
                    </ToolTip>
                  </a>
                </div>
              </span>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMainPage;
