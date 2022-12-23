import './App.css';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { addUser, editUser, mapexample, headshot, updatedwatersensoricon, the3sensors, updatedsensor, filelines, folderopen, folder, githubicon, machinemanager, watersensor } from './images';
//import Hamburger from './Hamburger.js';
import { resume } from './documents';
import ToolTip from '@mui/material/Tooltip';
import React from 'react';

function Home() {
  return (
    <div className="page" align="middle">
      <div className="about-me">
      <h1>About me:</h1>
      <h2>Intro:</h2>
      <div className="intro-grid">
        <img alt="headshot" src={headshot} className="headshot"/>
      <div>
      <p>I'm a Junior at Tulane University studying Computer Science and Engineering Physics. I've coded this webpage from scratch utilizing <strong>ReactJS as well as basic HTML, JavaScript, and CSS</strong>.
        I love programming because it's a way to creatively express logic, but I also creatively express myself musically using several instruments, such as guitar, ukulele, violin, piano, and just by singing.
      </p>
      <p>
        In my freetime, I love to cook, bake, listen to music, create personal projects using a laser cutter or 3D printer, and play video games.
      </p>
      </div>
     
      </div>
      <h2>Programming:</h2>
      <p>I've found myself accumulating more languages over time, dabbling just a little bit in each one, and with each project, I add a new language.
         Some languages that I've used in the past include <strong>Java, Python, C, C++, JavaScript, HTML,</strong> and <strong>CSS</strong>
      </p>
      <h2>Projects:</h2>
      <p>Some projects that I've worked on that can be viewed on this website include <ToolTip title="View Project"><NavLink className="about-me-link" to="/current-water-sensors"><strong >Mesh Water Sensors</strong></NavLink></ToolTip> and an  <ToolTip title="View GitHub Repository"><a className="about-me-link" href="https://github.com/xpsKING/TU-Makerspace-Card-Reader" target="blank">open source</a></ToolTip> <ToolTip title="View Project"><NavLink className="about-me-link" to="/makerspace-machine-manager"><strong>Machine Manager and User Authentication System</strong></NavLink></ToolTip> for the <ToolTip title="View Tulane MakerSpace Wiki Page"><a className="about-me-link" href="https://makerspace.tulane.edu/index.php/Scot_Ackerman_MakerSpace_at_Tulane_University_Wiki" target="blank">Tulane MakerSpace</a></ToolTip>. Other projects that I've worked on include a <ToolTip title="View GitHub Repository"><a className="about-me-link" href="https://github.com/tulane-graphics-2022/game-project-impostor" target="blank"><strong>Remake of Joust</strong></a></ToolTip> using OpenGL in C++, a Signals Processing project about sending strings in morse code through frequencies from one computer that are then decoded by another computer, and a data science project about political participation in the United States, viewable <a className="about-me-link" href="https://madbeignet.github.io/" target="blank"><strong>here</strong></a>.</p>
      <h2>Future Goals:</h2>
      <p>I'm constantly looking for ways to optimally organize and better represent code because there's no point in coding if it's impossible to go back and understand later.
         I also have a goal to be more familiar with React Hooks, so the folder icon above utilizes a hook to change state based on if the user is hovering over top. I hope to include more project pages as time continues and strengthen this website.</p>
         </div>
         <BottomHeader/>
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
        <h1>Machine Manager</h1>
        <h1>Mesh Water Sensors</h1>
        <NavLink to="/makerspace-machine-manager">
            <input type="image" alt="none :(" className="project" src={machinemanager}/>
        </NavLink>
        <div className="overlay"></div>
        <NavLink to="/current-water-sensors">
            <input type="image" alt="none :(" className="project" src={watersensor}/>
        </NavLink>
        <div className="overlay"></div>
      </div>
      <BottomHeader id="projects-footer"/>
    </div>
  );
}
function CurrentWaterSensors() {
  return OnePager({
    projectTitle:"Mesh Water Sensors", 
    problem:"Because New Orleans floods a lot, buildings can often experience indoor flooding. Without a person or camera physically seeing flooding, it is impossible to truly detect it, leading to unwanted, expensive water damage.", 
    solution: "Water sensors that can detect and communicate to a server will send alerts when there is water in a certain location. The server can communicate instantaneously with subscribed and dedicated users, such as building managers, to alert them of flooding.",
    image1:the3sensors,  
    execution:["My main job was creating the housing unit in Fusion360 to account for wires, electronics, sensors, as well as creating ways for water to be detected on all 4 sides. The device worked by having conductivity sensors, so when measuring the conductivity, a high value meant water. Because we separated each sensor by 1 cm in height, this allowed us to read the water level to the centimeter. We sent a boolean array representative of each sensor to The Things Network, which allowed a webpage to read off and display points on a map relative to each device's water level. Through a short bit of JavaScript, the array was translated into events, water level, and the battery level of the device in millivolts.",
    " This information was then accessed by a webpage, which displayed the sensors at their respective locations and indicated their water level visually on the map. In later stages of this project, we began using ReactJS to represent our sensors on a map. Throughout this project, I learned the basics of Web Development and how to effectively prototype, and it's one of the projects I'm currently most proud of."],
    images: [mapexample,false, updatedsensor, false, ],
    icon: updatedwatersensoricon,
  });
}
function MachineManager() {
  return OnePager({
    projectTitle:"Makerspace Machine Manager",
    problem:"The Tulane MakerSpace always requires a way to have users both independently and safely use machines in the Space, but in January 2022, there was no longer a way to add new users or additional trainings to users, which created a problem with ensuring independence of users throughout the Space.",
    solution:"A web application that allows students to safely use machines through the use of authorization and a tag out system. Preferably, this system would be better than the previous, allowing for suggestions from current Fabrication Technicians.",
    image1: machinemanager,
    execution:["Using ReactJS and NodeJS ensured for a database and efficient communication between the server and the client, which is crucial when users rely on the permissions set by the system. Other than transferring over data and making sure that machines could be toggled on and off, one major problem that needed to be solved was adding users.Before, users would be manually added to the system through the use of a database on a raspberry pi. Our goal for this project was to surpass this level of maintanability, so we created a page dedicated to adding users. The page is extremely easy to use, requiring a Fabrication Technician's ID as well as the new card ID. The new user has to also input some additional information, and if any slot is left out, a warning pops up beside the input box. Through the use of this page, a new user is added to the system immediately, and this can be reflected by tapping the RFID card on a reader, presenting the user's name.",
  "A large part of the MakerSpace is user independence, and part of this is training users to use certain machines and tools. Therefore, users need to be able to have trainings added, so that the system permits them to use the machines. I created the page to edit a user's training by first presenting a login page, which will only allow Fabrication Technicians or Administrators to access the edit page. Once a username is typed in, the user's trainings will appear. I decided to use a checkbox system to represent trainings as it's simple and represents exactly what is needed. Additionally, only Administrators will be able to see the \"FabTech\" Box. This software is currently in use at the Tulane MakerSpace, increasing the efficiency and user independence."],
    images: [editUser, true, addUser, false],
    icon: machinemanager,
  })
}
function OnePager(props) {
  let imageRight = false;
  return (
    <div className="page" align="middle">
      <div className="project-background">
      {/* should be making this just a page with information */}
      <div className="project-title">{props.projectTitle}
      <img alt="none :(" src={props.icon} className="page-icon"/>
      </div>
      
        <div className="information-grid">
        <img alt="none :(" className="project-picture" id="short" src={props.image1} />
          <div className="information">
            <div className="information-title">Problem</div>
              <p className="information-description">{props.problem}</p>
            <div className="information-title">Solution</div>
            <p className="information-description">{props.solution}</p>
          </div>
          {props.execution.map((exe) => {
            imageRight = !imageRight;
            let index = props.execution.indexOf(exe);
            let imageId = props.images[2*index+1];
            console.log(props.images);
            console.log(imageId);
            if (imageRight) {
              return (
                <div className="information-row">
                  <div className="information">
                    <div className="information-title">Execution</div>
                    <p className="information-description">{exe}</p>
                  </div>
                  <img alt="None :(" className="project-picture" id={imageId ? "short" : "tall"} src={props.images[index*2]} />
                </div>
              )
            } else {
            return (
              <div className="information-row">
                <img alt="None :(" className="project-picture" id={imageId ? "short" : "tall"} src={props.images[index*2]}  />
                <div className="information">
                  <div className="information-title"></div>
                  <p className="information-description">{exe}</p>
                </div>
              </div>
            )}
          })}
          
        </div>
        <BottomHeader/>
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
function BottomHeader(props) {
  return (
    <div className="footer" id={props.id || ''}>
      <a href="https://github.com/MadBeignet/Portfolio" className="repo-link" >Click here to visit my Portfolio Repository</a>
    </div>
  )
}

function App() {
  const [foldervalue, updateFolder] = React.useState(folder);
  let location = useLocation().pathname;
  return (
    
    <div className="header">
      
      {/**<Hamburger />**/}
      
      <span className="title">Portfolio{GetPageName(location)}</span>
        
      <a href={resume} download>
        <ToolTip title="Download Resume">
          <img alt="none :(" className="icon" src={filelines}/>
        </ToolTip>
      </a>
      <NavLink to="/">
        <input type="button" className="header-text" value="Maddie Wisinski"/>
      </NavLink>
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
      <Route path="makerspace-machine-manager" element = {<MachineManager />} />
    </Routes>
    
    </div>
  );
}

export default App;
