import './App.css';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { updatedwatersensoricon, the3sensors, updatedsensor, filelines, folderopen, folder, githubicon, machinemanager, watersensor } from './images';
import Hamburger from './Hamburger.js';
import { resume } from './documents';
import ToolTip from '@mui/material/Tooltip';
import React from 'react';

function Home() {
  return (
    <div className="page" align="middle">
      <div className="about-me">
      <h1>About me:</h1>
      <p>I'm a Junior at Tulane University studying Computer Science and Engineering Physics. I've coded this webpage from scratch utilizing ReactJS as well as basic HTML, JavaScript, and CSS.
        I love programming because it's a way to creatively express logic, but I also creatively express myself musically using several instruments, such as guitar, ukulele, violin, piano, and just by singing.
      </p>
      <p>I've found myself accumulating more languages over time, dabbling just a little bit in some that I would never claim to know, but with each project, I add a new language.
         Some languages that I've used in the past include:
          <li>Java</li>
          <li>Python</li>
          <li>C, C++ (alsoOpenGL in C++)</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS (if this is even a language)</li>
      </p>

      <p>I'm looking to improve on the organization especially in CSS, but I'm constantly looking for ways to optimally organize and better represent code.
         I also have a goal to be familiar with React Hooks, so the folder icon above utilizes a hook to change state based on if the user is hovering over top.</p>
         </div>
    </div>
  );
}
function Resume() {
  return (
    <div className="page" align="middle">
      <object type="application/pdf" data={resume} className="resume-display">none :(</object>
    </div>
  );
}
function Projects() {
  return (
    <div className="page" align="middle">
      <div className="project-container">
        <NavLink to="/makerspace-machine-manager">
          <img alt="none :(" className="project" src={machinemanager}/>
          <button className="project-button"></button>
        </NavLink>
        <div className="overlay"></div>
        <NavLink to="/current-water-sensors">
          <input alt="none :(" className="project" type="image" src={watersensor}/>
        </NavLink>
        <div className="overlay"></div>
      </div>
    </div>
  );
}
function CurrentWaterSensors() {
  return OnePager({
    projectTitle:"Mesh Water Sensors", 
    problem:"Because New Orleans floods a lot, buildings can often experience indoor flooding. Without a person or camera physically seeing flooding, it is impossible to truly detect it.", 
    solution: "Water sensors that can detect and communicate to a server will send alerts when there is water in a certain location. The server can communicate instantaneously with subscribed and dedicated users, such as building managers, to alert them of flooding.",
    image1:the3sensors, 
    image2:updatedsensor, 
    execution:"This project is a mesh network of water sensors that can detect water and communicate to a server. The server can then communicate with subscribed users, such as building managers, to alert them of flooding. The project is currently in the prototyping phase.",

    icon: updatedwatersensoricon,
  });
}
function OnePager(props) {
  return (
    <div className="page" align="middle">
      {/* should be making this just a page with information */}
      <div className="project-title">{props.projectTitle}
      <img alt="none :(" src={props.icon} className="page-icon"/>
      </div>
      <div className="line"></div>
        <div className="information-grid">
        <img alt="none :(" className="project-picture" src={props.image1} />
          <div className="information">
            <div className="information-title">Problem</div>
              <p className="information-description">{props.problem}</p>
            <div className="information-title">Solution</div>
            <p className="information-description">{props.solution}</p>
          </div>
          <div className="information">
            <div className="information-title">Execution</div>
            <p className="information-description">{props.execution}</p>
          </div>
          <img alt="none :(" className="project-picture" src={props.image2} />
          
        </div>
        <div className="project-background">
      </div>
    </div>
  );

}
function GetPageName(loc) {
  let location = loc;
  if (location) {
    switch(location) {
      case "/resume":
        return ": Resume";
      case "/projects":
        return ": Projects";
      case "/current-water-sensors":
        return ": Current Mesh Water Sensors";
      default:
        return "";
    }
  }
};

function App() {
  const [foldervalue, updateFolder] = React.useState(folder);
  let location = useLocation().pathname;
  return (
    
    <div className="header">
      <Hamburger />
      <span className="header-text">Maddie Wisinski </span>
      <span className="title">Portfolio{GetPageName(location)}</span>
        
      <a href={resume} download>
        <ToolTip title="Download Resume">
          <img alt="none :(" className="icon" src={filelines}/>
        </ToolTip>
      </a>
      <NavLink to="projects" id="surround">
        <ToolTip title="View Projects">
          <input alt="none :(" type="image" src={foldervalue} className="icon" id="folder1" onMouseOver={() => updateFolder(folderopen)} onMouseOut={() => updateFolder(folder)} onClick = {() => "window.location='http://localhost.com:3000/projects"}/>
        </ToolTip>
      </NavLink>
      <a href="https://www.github.com/MadBeignet">
        <ToolTip title="View Github">
          <img alt="none :(" className="icon" id="github-icon" src={githubicon}/>
        </ToolTip>
      </a>

    {/**Routes**/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element = {<Projects />} />
      <Route path="current-water-sensors" element = {<CurrentWaterSensors />} />
    </Routes>

    </div>
  );
}

export default App;
