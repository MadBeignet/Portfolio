import { resume } from "../documents";
import "./NewMainPage.css";

export default function Resume() {
  return (
    <div className="page" align="middle">
      <img src={resume} className="resume-display" alt="no js :(" />
    </div>
  );
}
