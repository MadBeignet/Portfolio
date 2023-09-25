import React from "react";
import { NavLink } from "react-router-dom";
import { machinemanager, watersensor, nextfavartist2 } from "../images";
import "./NewMainPage.css";

function Projects() {
  return (
    <div className="projects">
      <h1 align="middle">Projects</h1>
      <div className="project-container" align="middle">
        <div className="project-item">
          <h5 className="project-desc">Machine Manager</h5>
          <NavLink to="/makerspace-machine-manager">
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={machinemanager}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <h5 className="project-desc">Current: Water Sensors</h5>
          <NavLink to="/current-water-sensors">
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={watersensor}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <h5 className="project-desc">Next Favorite Artist</h5>
          <NavLink to="/next-fav-artist">
            <input
              type="image"
              alt="none :("
              className="project"
              id="really-tall"
              src={nextfavartist2}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Projects;
