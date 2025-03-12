import React from "react";
import "./MenuBar.css";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

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
      <div className="sociallinks">
        <a href="https://www.linkedin.com/in/israrahmad2004/" target="blank">
          <i className="fab fa-linkedin">
            <AiOutlineLinkedin />
          </i>
        </a>
        <a href="https://github.com/israrahmad831" target="blank">
          <i className="fab fa-linkedin">
            <RiGithubLine />
          </i>
        </a>
        <a href="https://www.facebook.com/xDisrar" target="blank">
          <i className="fab fa-linkedin">
            <AiOutlineFacebook />
          </i>
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
