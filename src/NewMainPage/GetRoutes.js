import { Route, Routes } from "react-router-dom";
// TODO: These function names will be different depending on what they were named in GetProject.js
import {
  CurrentWaterSensors,
  MachineManager,
  NextFavoriteArtist,
  JoustRemake,
  MoireCapstone,
} from "./GetProject";
import Resume from "./Resume";
import NewMainPage from "./NewMainPage";
import ChinaWallMoment from "./ChinaWallMoment/ChinaWallMoment";

// TODO: You will want to update the routes to match the function name of your onepagers (inside the </> and also the path name)
export default function GetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewMainPage />} />
      <Route path="resume" element={<Resume />} />
      {/* <Route path="projects" element={<Projects />} /> */}
      <Route path="current-water-sensors" element={<CurrentWaterSensors />} />
      <Route path="makerspace-machine-manager" element={<MachineManager />} />
      <Route path="next-fav-artist" element={<NextFavoriteArtist />} />
      <Route path="joust-remake" element={<JoustRemake />} />
      <Route path="moire" element={<MoireCapstone />} />
      <Route path="china-wall-moment" element={<ChinaWallMoment />} />
      {/*<Route path="double-pendulum-project" element={<DoublePendulum />} /> */}
    </Routes>
  );
}
