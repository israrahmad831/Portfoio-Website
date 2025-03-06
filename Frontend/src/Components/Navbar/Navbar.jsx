import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import styles from "./Navbar.module.css";
import Menubar from "../MenuBar/MenuBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add(styles.dark);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove(styles.dark);
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add(styles.dark);
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${darkMode ? styles.dark_navbar : ""}`}>
        <div className={styles.logo}>IsrarDev</div>
        <div className={styles.elements}>
          <ul className={styles.elements_list}>
            <li className={styles.elements_type}>Home</li>
            <li className={styles.elements_type}>About</li>
            <li className={styles.elements_type}>Experience</li>
            <li className={styles.elements_type}>Projects</li>
            <li className={styles.elements_type}>Resume</li>
            <li className={styles.elements_contact}>Contact</li>
          </ul>
          <div className={styles.color_mode} onClick={toggleTheme}>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </div>
          <div className={styles.menu_bar} onClick={toggleSidebar}>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <Menubar
        open={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
      />
    </>
  );
};

export default Navbar;
