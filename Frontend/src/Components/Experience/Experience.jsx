import { FiServer } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import Magnetic from "../../Lib/Magnetic";

const Experience = () => {
  const fSkills = [
    { name: "React.js", level: "Advanced", points: "90%" },
    { name: "Tailwind CSS", level: "Intermediate", points: "70%" },
    { name: "HTML, CSS, JS", level: "Professional", points: "80%" },
  ];
  const bSkills = [
    { name: "Node.js", level: "Intermediate", points: "75%" },
    { name: "MongoDB", level: "Advanced", points: "80%" },
    { name: "Rest API's", level: "Intermediate", points: "70%" },
  ];

  const progressRefs = useRef([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.expContainer}>
      {/* Frontend Section */}
      <div className={styles.expBox}>
        <div className={styles.expLeft}>
          <div className={styles.iconBox}>
            <Magnetic>
              <MdWeb className={styles.icon} />
            </Magnetic>
          </div>
          <h2 className={styles.sectionTitle}>Frontend Development</h2>
          <div>
            {fSkills.map((skill, index) => (
              <div key={index} className={styles.skillBox}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </div>
                <div
                  className={styles.progressBar}
                  ref={(el) => (progressRefs.current[index] = el)}
                >
                  <div
                    className={styles.progressFill}
                    style={{ width: visible ? skill.points : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className={styles.expRight}>
          <div className={styles.iconBox}>
            <Magnetic>
              <FiServer className={styles.icon} />
            </Magnetic>
          </div>
          <h2 className={styles.sectionTitle}>Backend Development</h2>
          <div>
            {bSkills.map((skill, index) => (
              <div key={index} className={styles.skillBox}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </div>
                <div
                  className={styles.progressBar}
                  ref={(el) =>
                    (progressRefs.current[index + fSkills.length] = el)
                  }
                >
                  <div
                    className={styles.progressFill}
                    style={{ width: visible ? skill.points : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.tools}>
          <Magnetic>
            <span>VS Code</span>
          </Magnetic>
          <Magnetic>
            <span>Git</span>
          </Magnetic>
          <Magnetic>
            <span>Postman</span>
          </Magnetic>
          <Magnetic>
            <span>Netlify</span>
          </Magnetic>
          <Magnetic>
            <span>Chrome Dev Tools</span>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Experience;
