import React from "react";
import styles from "./Resume.module.css";
import CV from "../../assets/CV.pdf";
import Magnetic from "../../Lib/Magnetic";
const Resume = () => {
  return (
    <div className={styles.container}>
      <div className={styles.resumeBox}>
        <h2 className={styles.title}>My Resume</h2>
        <p className={styles.description}>
          Here you can download or view my latest resume. It covers my
          educational background, professional experience, technical skills, and
          project highlights.
        </p>

        <div className={styles.buttons}>
          <Magnetic>
            <a href={CV} download>
              <button className={styles.downloadbutton}>Download Resume</button>
            </a>
          </Magnetic>
          <Magnetic>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button className={styles.viewbutton}>View Resume</button>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Resume;
