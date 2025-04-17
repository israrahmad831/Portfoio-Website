import React from "react";
import "./MenuBar.css";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

const MenuBar = ({ open, toggleSidebar, darkMode, sectionRefs }) => {
  const handleLinkClick = (section) => {
    toggleSidebar();
    const element = sectionRefs[section]?.current;
    if (element) {
      const offset = -80;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`sidebar ${open ? "open" : ""} ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="sidebar-links">
        {["Home", "About", "Experience", "Projects", "Resume", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className="nav-links"
              onClick={() => handleLinkClick(item)}
            >
              <h4 className="names">{item}</h4>
            </a>
          )
        )}
      </div>
      <div className="sociallinks">
        <a
          href="https://www.linkedin.com/in/israrahmad2004/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/israrahmad831"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubLine />
        </a>
        <a
          href="https://www.facebook.com/xDisrar"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook />
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
