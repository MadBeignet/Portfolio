import { Route, Routes } from "react-router-dom";
import { CurrentWaterSensors, MachineManager } from "./GetProject";
import Resume from "./Resume";
import NewMainPage from "./NewMainPage";

export default function GetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewMainPage />} />
      <Route path="resume" element={<Resume />} />
      {/* <Route path="projects" element={<Projects />} /> */}
      <Route path="current-water-sensors" element={<CurrentWaterSensors />} />
      <Route path="makerspace-machine-manager" element={<MachineManager />} />
      {/* <Route path="china-wall-moment" element={<ChinaWallMoment />} />
      <Route path="double-pendulum-project" element={<DoublePendulum />} /> */}
    </Routes>
  );
}
