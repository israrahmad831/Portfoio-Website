import React from "react";
import "./MenuBar.css";

const MenuBar = ({ open, toggleSidebar, darkMode }) => {
  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <div
      className={`sidebar ${open ? "open" : ""} ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="sidebar-links">
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names">Home</h4>
        </a>
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names">About</h4>
        </a>
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names side-service">Experience</h4>
        </a>
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names">Projects</h4>
        </a>
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names">Resume</h4>
        </a>
        <a className="nav-links" onClick={handleLinkClick}>
          <h4 className="names">Contact</h4>
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
