import React, { useState, useEffect } from "react";
import styles from "./Resume.module.css";
import CV from "../../assets/CV.pdf";

const Resume = () => {
  return (
    <>
      <div className={styles.container}>
        <a href={CV} download>
          <button className={styles.downloadbutton}>Download Resume</button>
        </a>
      </div>
    </>
  );
};

export default Resume;
