import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import styles from "./Navbar.module.css";
import Menubar from "../MenuBar/MenuBar";
import Magnetic from "../../Lib/Magnetic";

const Navbar = ({ sectionRefs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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

  const scrollToSection = (section) => {
    const element = sectionRefs[section]?.current;
    if (element) {
      const offset = -80;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${darkMode ? styles.dark_navbar : ""}`}>
        <div className={styles.gradientBar}></div>
        <div className={styles.internal}>
          <Magnetic className={styles.logo}>
            <div onClick={() => scrollToSection("Home")}>
              Israr
              <span className={styles.logoAccent}>JS</span>
            </div>
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
                  <li onClick={() => scrollToSection(item)}>{item}</li>
                </Magnetic>
              ))}
            </ul>

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
        sectionRefs={sectionRefs}
      />
    </>
  );
};

export default Navbar;
