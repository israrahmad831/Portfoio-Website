import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"; // Import both icons
import styles from "./Navbar.module.css";

const Navbar = () => {
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

  return (
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
          <li className={styles.color_mode} onClick={toggleTheme}>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
