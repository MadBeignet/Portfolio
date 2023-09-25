import React from "react";
import { NavLink } from "react-router-dom";
import { machinemanager, watersensor } from "../images";
import "./NewMainPage.css";

function Projects() {
  return (
    <div className="projects">
      <h1 align="middle">Projects</h1>
      <div className="project-container" align="middle">
        <div className="project-item">
          <NavLink to="/makerspace-machine-manager">
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={machinemanager}
            />
          </NavLink>
          <h5 id="project-desc">Machine Manager</h5>
        </div>
        <div className="project-item">
          <NavLink to="/current-water-sensors">
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={watersensor}
            />
          </NavLink>
          <h5 id="project-desc">Current: Water Sensors</h5>
        </div>
      </div>
    </div>
  );
}

export default Projects;
