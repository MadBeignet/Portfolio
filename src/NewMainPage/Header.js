import React from "react";
import "./NewMainPage.css";
import Hamburger from "./Hamburger";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* <p>testawdawdawdad</p> */}
      <Hamburger />
      <NavLink className="nav-link" to="/">
        <button type="checkbox" className="name-box">
          Maddie Wisinski
        </button>
      </NavLink>
    </div>
  );
}

export default Header;
