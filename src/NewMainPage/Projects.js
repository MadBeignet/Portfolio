import React from "react";
import { NavLink } from "react-router-dom";
// TODO: Update image imports
import {
  machinemanager,
  watersensor,
  nextfavartist2,
  joustremakeimg,
  prototype,
} from "../images";
import "./NewMainPage.css";

// TODO: This is where you will also want to update project names, links, and images
// prototype is the name of the image i used, given inside src/images/index.js
function Projects() {
  return (
    <div className="projects">
      <h1 align="middle">Projects</h1>
      <div className="project-container" align="middle">
        <div className="project-item">
          <NavLink className="project-button" to="/moire">
            <h5 className="project-desc">Moiré Sensor Nodes</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={prototype}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/current-water-sensors">
            <h5 className="project-desc">Current: Water Sensors</h5>
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
          <NavLink className="project-button" to="/makerspace-machine-manager">
            <h5 className="project-desc">Machine Manager</h5>
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
          <NavLink className="project-button" to="/next-fav-artist">
            <h5 className="project-desc">Next Favorite Artist</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="really-tall"
              src={nextfavartist2}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/joust-remake">
            <h5 className="project-desc">Joust Remake</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={joustremakeimg}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Projects;
