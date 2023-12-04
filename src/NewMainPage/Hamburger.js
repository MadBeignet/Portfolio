import React from "react";
import "./Hamburger.css";

// TODO: Update project names and links (according to GetRoutes.js links)

export default function Hamburger() {
  return (
    <>
      <input id="hamburger-input" type="checkbox" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav id="sidebar-menu">
          <div className="xout">
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <h3>Menu</h3>
          <div className="menu-line"></div>
          <ul className="input-container">
            <a href="/">
              <input type="button" className="menu-label2" value="Home" />
            </a>
            <a href="/resume">
              <input type="button" className="menu-label2" value="Resume" />
            </a>
            <a href="/moire">
              <input
                type="button"
                className="menu-label2"
                value="Moiré Sensor Nodes"
              />
            </a>
            <a href="/current-water-sensors">
              <input
                type="button"
                className="menu-label2"
                value="Water Sensors"
              />
            </a>
            <a href="/makerspace-machine-manager">
              <input
                type="button"
                className="menu-label2"
                value="Machine Manager"
              />
            </a>
            <a href="/next-fav-artist">
              <input
                type="button"
                className="menu-label2"
                value="Next Favorite Artist"
              />
            </a>
            <a href="/joust-remake">
              <input
                type="button"
                className="menu-label2"
                value="Joust Remake"
              />
            </a>
          </ul>
        </nav>
      </label>

      <div className="overlay"></div>
    </>
  );
}
