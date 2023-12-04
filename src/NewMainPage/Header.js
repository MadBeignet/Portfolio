import React from "react";
import "./NewMainPage.css";
import Hamburger from "./Hamburger";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Hamburger />
      <NavLink className="nav-link" to="/">
        <button type="checkbox" className="name-box">
          {/* TODO: Your name*/}
          Maddie Wisinski
        </button>
      </NavLink>
    </div>
  );
}

export default Header;
