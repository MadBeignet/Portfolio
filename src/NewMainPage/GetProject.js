import {
  addUser,
  editUser,
  mapexample,
  updatedwatersensoricon,
  the3sensors,
  updatedsensor,
  machinemanager,
  nextfavartist0,
  nextfavartist1,
  nextfavartist2,
  joustgif,
  spriterun,
  prototype_radio,
  explanation,
  pcb1,
  pcb2,
  enclosure_design,
  device_design,
  measurement_struct,
  interval_example,
  solar_panel,
  battery_hole,
  communication_success,
  fake_sleep,
  moire_presentation,
  moire_final
} from "../images";
// import "../MainPage/App.css";
import "./Project.css";

export function CurrentWaterSensors() {
  return OnePager({
    projectTitle: "Mesh Water Sensors",
    problem:
      "Because New Orleans floods a lot, buildings can often experience indoor flooding. Without a person or camera physically seeing flooding, it is impossible to truly detect it, leading to unwanted, expensive water damage.",
    solution:
      "Water sensors that can detect and communicate to a server will send alerts when there is water in a certain location. The server can communicate instantaneously with subscribed and dedicated users, such as building managers, to alert them of flooding.",
    image1: the3sensors,
    execution: [
      "My main job was creating the housing unit in Fusion360 to account for wires, electronics, sensors, as well as creating ways for water to be detected on all 4 sides. The device worked by having conductivity sensors, so when measuring the conductivity, a high value meant water. Because we separated each sensor by 1 cm in height, this allowed us to read the water level to the centimeter. We sent a boolean array representative of each sensor to The Things Network, which allowed a webpage to read off and display points on a map relative to each device's water level. Through a short bit of JavaScript, the array was translated into events, water level, and the battery level of the device in millivolts.",
      " This information was then accessed by a webpage, which displayed the sensors at their respective locations and indicated their water level visually on the map. In later stages of this project, we began using ReactJS to represent our sensors on a map. Throughout this project, I learned the basics of Web Development using ReactJS and how to effectively prototype with an end goal in mind.",
    ],
    images: [updatedsensor, false, mapexample, false],
    icon: updatedwatersensoricon,
  });
}
export function MachineManager() {
  return OnePager({
    projectTitle: "Makerspace Machine Manager",
    problem:
      "The Tulane MakerSpace always requires a way to have users both independently and safely use machines in the Space, but in January 2022, there was no longer a way to add new users or additional trainings to users, which created a problem with ensuring independence of users throughout the Space.",
    solution:
      "A web application that allows students to safely use machines through the use of authorization and a tag out system. Preferably, this system would be better than the previous, allowing for suggestions from current Fabrication Technicians.",
    image1: machinemanager,
    execution: [
      "Using ReactJS and NodeJS ensured for a database and efficient communication between the server and the client, which is crucial when users rely on the permissions set by the system. Other than transferring over data and making sure that machines could be toggled on and off, one major problem that needed to be solved was adding users.Before, users would be manually added to the system through the use of a database on a raspberry pi. Our goal for this project was to surpass this level of maintanability, so we created a page dedicated to adding users. The page is extremely easy to use, requiring a Fabrication Technician's ID as well as the new card ID. The new user has to also input some additional information, and if any slot is left out, a warning pops up beside the input box. Through the use of this page, a new user is added to the system immediately, and this can be reflected by tapping the RFID card on a reader, presenting the user's name.",
      "A large part of the MakerSpace is user independence, and part of this is training users to use certain machines and tools. Therefore, users need to be able to have trainings added, so that the system permits them to use the machines. I created the page to edit a user's training by first presenting a login page, which will only allow Fabrication Technicians or Administrators to access the edit page. Once a username is typed in, the user's trainings will appear. I decided to use a checkbox system to represent trainings as it's simple and represents exactly what is needed. Additionally, only Administrators will be able to see the \"FabTech\" Box. This software is currently in use at the Tulane MakerSpace, increasing the efficiency and user independence.",
    ],
    images: [addUser, true, editUser, false],
    icon: machinemanager,
  });
}

export function NextFavoriteArtist() {
  return OnePager({
    projectTitle: "Next Favorite Artist (nextfavartist.dev)",
    problem:
      "I really love listening to music, but I found myself listening to the same few artists all the time, and I was interested in finding new artists to listen to.",
    solution:
      "To solve this problem, I created a web application that takes in the current user's favorite artists and tracks and recommends new artists weighted on the ranking of the favorite artists.",
    image1: nextfavartist0,
    execution: [
      "I started by creating an Application on Spotify Developer, and then by using my unique code for that application, I used the Spotify API to get the user's favorite artists and tracks. I then took the top 10 favorite artists and found their 20 related artists each. Because some artists could have the same related artist, I reduced the results by name and summed their weighting based on their root artist's ranking, making a more often appearing artist have a higher value. Another problem is that the user might already be listening to these related artists, so I filtered out the top 40 artists as well as the artists of their top 50 tracks. For the sorted and weighted recommended artists, I displayed the top 20 and embedded their top track next to them.",
      "Additionally, in the user's Profile section, there is a button to create a curated playlist, which will create a playlist using these 20 songs from the recommended artists and use Spotify's seed route to add 40 related tracks. I plan to submit this application for Spotify's review to officially publish it and have it open for other users, but I have successfully found new artists that are making their way into my playlists! I consider this application a huge success because I'm both proud of it, and it's something I find super useful.",
    ],
    images: [nextfavartist1, true, nextfavartist2, true],
    icon: nextfavartist0,
  });
}

export function JoustRemake() {
  return ShortProject({
    imgs: [joustgif, "short", spriterun, "small"],
    descriptions: [
      "For an Intro to Computer Graphics class, my teammate and I were tasked with recreating a retro game using OpenGL in C++. To start I created static images, and I messed around with the equations of motion, such as acceleration, velocity, and position. I created surface class and assigned them a hitbox along with a custom image, allowing the characters to interact with the surfaces, such as dip down beneath, land on, and bounce against on the side.",
      "Later on, we created custom sprites to mock their motions, and I created a way for those sprites to be switched through. The motions that we included were when the character jumped, fell, and ran on the ground. To assign direction (left or right), it was based on the sign of velocity. Overall, this project was super fun especially getting to interact with the bare bones of graphics and equations of motion in OpenGL.",
    ],
    descriptionTitles: ["Intro"],
    title: "Joust Remake",
  });
}

export function MoireCapstone() {
  return (
    <div>
      {ShortProject({
        title: "Moiré (Senior Capstone Project)",
        descriptions: [
          "For my senior year, I'm leading my capstone team in creating a mesh network of measurement nodes. The nodes will take abiotic measurements of the environment and report them to a database. The data consisting of soil moisture, temperature, relative humidity, and sunlight will then be visualized using a web application available to analyze and inspect the data. This technology will be dedicated to FCAT, an Ecuadorian NGO that is focusing on reforestation and biodiversity in Ecuador. By creating this technology, we are giving them the power to identify the optimal environment for their land to be reforested.",
          "For this project, we will be utilizing an ESP32 on a custom PCB, which will be powered by a solar panel and battery. The device will wake up only when it takes measurements and then communicate them via radio to the nearest node that is closest to the gateway, which will receive all the data. We will be coating the PCB to prevent water or corrosion, and we will be 3D printing an enclosure. The device will be approximately 18 cm tall and 2.5 cm wide, and to ensure that the device stays in place, it will be attached to a stake that will stick into the ground. I'm super excited to be working on this project, and I will continue to update this page as it progresses.",
        ],
        descriptionTitles: ["Intro"],
        imgs: [explanation, "tall", prototype_radio, "short"],
      })}
      {ShortProject({
        line: false,
        title: "",
        descriptions: [
          "For the first PCB, it did not include sensors directly on the board but rather had pinheaders for the sensors to be connected, and was roughly 4.5cm by 12cm. The reasoning for this is to focus on the power system, and this ended up benefitting us because there was an error. Because we were essentially recreating an Arduino board from scratch, this was unfamiliar, and we messed up the system that allows the board to actually take in code. That being said, the team member who designed these boards immediately researched on the topic and dove right in with a multimeter and a soldering iron to modify the board enough to test the full power system. This was crucial because even though the board had errors, we were able to not only learn what the errors were, but also ensure that the solution would allow the board to work.",
          "For the second PCB, sensors were included on the board, such as an HDC1080 temperature and humidity sensor, a slot for a photoresistor to detect light, and the custom frequency soil moisture sensor. The board also changed shape, now reflecting the shape drawn above, with 30cm at its widest point and being about 180cm tall. This board also had some issues caused by the software used to create them, but that problem, like the previous problems, were solved by digging into the board and manually redirecting power. This solution allowed us to test solar charging with our current buck converter and battery as well as create code that reads the frequency-based soil moisture sensor. Another feature on this board is a power rail, which is enabled only when taking readings. This allows us to not waste power on sensors that remain in a sleep mode, which remains drawing power from our system. Doing so effectively saves us 12mAh of 26mAh of power per day, nearly eliminating half of the original power. Overall, we're making huge progress on this project, and I'm incredibly excited to see how our device progresses next semester.",
        ],
        descriptionTitles: ["PCB Design Updates (12/08/2023)"],
        imgs: [pcb1, "tall", pcb2, "tall"],
      })}
      {ShortProject({
        line: false,
        title: "",
        descriptions: [
          "Throughout the first semester, we realized a few problems. Because this device will be outdoors for its lifetime, it will need to be as weather proof as possible. This doesn't just mean the PCB, but also the enclosure. To solve this problem, I designed a enclosure fitted to the PCB design to allow for a neoprene layer between. This will ensure that the enclosure is as waterproof as possible without being airtight. This is because our sensors still need to access to air to take data points, such as humidity. For this issue specifically, we are using an expanded teflon mesh, which will allow airflow and moisture, but not water at low pressures. This solution has yet to be tested, but we are confident that it will work.",
          "Another problem we realized related to charging. For instance, our current battery is an LIR2032 40mAh coin cell battery, which we calculated as having a lifetime without charge for 2.7 days. The charging issue isn't caused by the battery capacity, but actually by the charger/buck converter because the minimum applied voltage has to be between 4.2V and 6.4V. Our solar panel is capable up to 5.58V, but we found that the panel struggles on overcast days. It's unlikely that this problem is able to be solved by just getting a battery with much larger capacity because that's not the issue, but exchanging the buck converter or the solar panel will cost a lot more money, upwards of $400. With our $3,000 budget already being flexed, we are trying to find a solution that works for our device, budget, and our product receiver, FCAT.",
        ],
        descriptionTitles: ["Semester 1 Final Updates"],
        imgs: [enclosure_design, "tall", device_design, "tall"],
      })}
      {ShortProject({
        line: false,
        title:"",
        descriptions: [
          "To solve this problem, I gathered 2 additional solar panel contenders. Both offered the same current, but slightly different voltage, but neither significant. The second panel had a more similar footprint to the current panel, but later I discovered they were out of stock. It was a go for panel #1 with 2.23V and 55mA. But at just over $4 a panel, it was going to take money. However with that money, we gained confidence in our device. For the associated buck converter, we would have to go with the 0.1V to 3.0V converter because of supply-chain issues. It is clear that switching solar panels is advantageous because of its nearly quadrupled charging speed. Because we also switched our battery to a JST connector, we saved $100 total, spending $250 net.",
          "For the device firmware, I used RadioHead to create the mesh network because on the first message to another node, it saves the best path. I also planned out a timeline. At each measurement, the node would store and then go back to sleep for the remaining time until the next wakeup. On the final measurement of the day (or measurement period), the node would instead go into a wait state while it waited for a message from the gateway. As soon as the gateway sent the message, the node would then broadcast it for other nodes out of range, then the node would wait a random amount of time, send the data to the gateway, and then act as a relay point for other nodes throughout the rest of the time. After this point, the node would go to sleep. The gateway tallies up the measurements and the nodes, and sends it to the web-app to be displayed, also noting any nodes that did not check in."
        ],
        descriptionTitles: ["Semester 2 Updates"],
        imgs: [solar_panel, "tall", interval_example, "tall"],

      })}
      {ShortProject({
        line: false,
        title:"",
        descriptions: ["To test the firmware, I needed a few PCBs that could survive detached from a cable. To do this, we designed PCB 3, and because of our new battery, we had a different footprint. We wanted our device to be thin to preserve material, and because the bottom of the enclosure was taken, that woud mean the top, but we didn't want the device to be overloaded at the top. Because of this, I brought a novel idea to the table of cutting out a hole in the PCB to rest the battery. It was a tough goal, but I believed it was achievable, and at the end of the day, we had a design completely planned out. It was a go.",
      "PCB 3 allowed me to test my firmware concept. I planned out the messages that would be sent from the nodes, using minimal storage because the messages had a limit of 255 bytes. Therefore, I created a Measurement struct consisting of 20 bytes when compacted. This means up to 12 measurements could be sent in 1 message or measurement period. To conserve power, the device turns off its accessory rail and goes to sleep. This means the process resets, and data stored normally while awake also resets. To combat this, the measurements are all stored in RTC, the clock, and as such, do not reset. By minimizing space and power, the device would functional maximally."
    ],
    descriptionTitles: ["Designing for Perfection"],
    imgs: [battery_hole, "short", measurement_struct, "tall"],
      })}
      {ShortProject({
        line: false,
        title:"",
        descriptions: ["To test my firmware, I uploaded code for nodes to 3 devices and the code to a gateway unit, which I kept plugged into my computer. After a few hours of fixing bugs and perfecting the communication, I was regularly receiving measurements from every node via radio. This was an incredible moment, and I will forever remember the feeling of hardwork paying off. Unfortunately after an hour, the gateway node began to have some issues of a boot loop. This was a nightmare, and I began to see this with every unit that stayed plugged in or had been charging. Finally, we discovered that even though the voltage of the battery was in range with our voltage regulator, after increasing above 4V, the MCU would enter a boot loop.",
      "To combat this, if the voltage was above a certain point, the device would not actually shut down while waiting for its next measurement. The accessory rail would remain off, but to keep the device above the new maximum voltage, it would need to drain power. Reflecting on this, this was a point of failure, one that we only noticed when a device was plugged in."
    ],
    descriptionTitles: ["Making Progress"],
    imgs: [communication_success, "tall", fake_sleep, "tall"]        
      })}
      {ShortProject({
        line:false,
        title:"",
        descriptions: ["In contrast to our failure, we were able to successfully present our devices including a live demonstration. We found that the nodes we left outside to collect measurements struggled a bit to keep up even though they were working and charging. At the same time, we were incredibly proud of our achievements, and I was super proud to be involved. FCAT was super excited and came by to see our work, and they were amazed.",
        "Eventually, we discovered that the devices were struggling with power. With the end of the semester just behind us, we were completely out of time. We encouraged future students to take up this project to expand and improve upon the work we've done. Through this project, I gained leadership skills, supply-chain knowledge, budgeting, analyzing datasheets for electronics, and strengthened my knowledge in Arduino. Although the project was ultimately a bust, I know it has paved a huge path for any future work for FCAT, and I'm curious to see what comes next."
      ],
        descriptionTitles: ["Final Updates & Conclusion"],
        imgs: [moire_presentation, "short", moire_final, "short"]
      })}
    </div>
  );
}

function OnePager(props) {
  let imageRight = false;
  return (
    <div className="page" align="middle">
      <div className="mobile-display">
        <div className="project-background">
          <div className="project-title">
            <h2>{props.projectTitle}</h2>
          </div>

          <div className="information-grid">
            <img
              alt="none :("
              className="project-picture"
              id="short"
              src={props.image1}
            />
            <div className="information">
              <div className="information-title">
                <h3>Problem</h3>
              </div>
              <p className="information-description">{props.problem}</p>
              <div className="information-title">
                <h3>Solution</h3>
              </div>
              <p className="information-description">{props.solution}</p>
            </div>
            {props.execution.map((exe, index) => {
              imageRight = !imageRight;
              let imageId = props.images[2 * index + 1];
              if (imageRight) {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2] || null}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Execution</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2] || null}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Conclusion</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="desktop-display">
        <div className="project-background">
          <div className="project-title">
            <h2>{props.projectTitle}</h2>
          </div>

          <div className="information-grid">
            <div className="information-row">
              <img
                alt="none :("
                className="project-picture"
                id="short"
                src={props.image1}
              />
              <div className="information">
                <div className="information-title">
                  <h3>Problem</h3>
                </div>
                <p className="information-description">{props.problem}</p>
                <div className="information-title">
                  <h3>Solution</h3>
                </div>
                <p className="information-description">{props.solution}</p>
              </div>
            </div>
            {props.execution.map((exe) => {
              imageRight = !imageRight;
              let index = props.execution.indexOf(exe);
              let imageId = props.images[2 * index + 1];
              if (imageRight) {
                return (
                  <div className="information-row">
                    <div className="information">
                      <div className="information-title">
                        <h3>Execution</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2]}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2]}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Conclusion</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShortProject(props) {
  return (
    <div className="page" align="middle">
      <div className="desktop-display">
        {props.title && (
          <div className="project-title">
            <h2>{props.title}</h2>
          </div>
        )}

        <div
          className={
            props.line === false
              ? "information-grid-no-line"
              : "information-grid"
          }
        >
          <div className="information-row">
            <img
              id={props.imgs[1] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[0] || null}
            />
            <div className="information">
              <div className="information-title">
                <h3>{props.descriptionTitles[0] || ""}</h3>
              </div>
              <p className="information-description">{props.descriptions[0]}</p>
            </div>
            <div className="information">
              <p className="information-description">{props.descriptions[1]}</p>
            </div>
            <img
              // id="short"
              id={props.imgs[3] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[2] || null}
            />
          </div>
        </div>
      </div>
      <div className="mobile-display">
        <div className="project-title">
          <h2>{props.title || ""}</h2>
        </div>
        <div className="information-grid">
          <div className="information-row">
            <div className="information">
              <div className="information-title">
                <h3>{props.descriptionTitles[0] || ""}</h3>
              </div>
              <p className="information-description">{props.descriptions[0]}</p>
              <img
                id={props.imgs[1] || ""}
                className="project-picture"
                alt=":("
                src={props.imgs[0] || null}
              />
            </div>

            <div className="information">
              <p className="information-description">{props.descriptions[1]}</p>
            </div>
            <img
              // id="short"
              id={props.imgs[3] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[2] || null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
