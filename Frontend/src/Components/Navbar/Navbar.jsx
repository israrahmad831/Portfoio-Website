import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import styles from "./Navbar.module.css";
import Menubar from "../MenuBar/MenuBar";
import Magnetic from "../../Lib/Magnetic";
import Home from "../Home/Home";

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
      <nav className={`${styles.navbar} ${darkMode ? styles.dark_navbar : ""}`}>
        <div className={styles.internal}>
          <Magnetic className={styles.logo}>
            <div>IsrScripter</div>
          </Magnetic>
          <div className={styles.elements}>
            <ul className={styles.elements_list}>
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Resume",
                "Contact",
              ].map((item, index) => (
                <Magnetic key={index} className={styles.elements_type}>
                  <li>{item}</li>
                </Magnetic>
              ))}
            </ul>
            <Magnetic>
              <div className={styles.color_mode} onClick={toggleTheme}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </div>
            </Magnetic>
            <div className={styles.menu_bar} onClick={toggleSidebar}>
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </nav>
      <Menubar
        open={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
      />
    </>
  );
};

export default Navbar;
