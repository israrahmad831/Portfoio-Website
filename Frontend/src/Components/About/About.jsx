import React from "react";
import { RxGear } from "react-icons/rx";
import { CgWebsite } from "react-icons/cg";
import { FiServer, FiDatabase, FiCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      duration: "2023 - Present",
      description:
        "Developing scalable web applications using React, Node.js, and MongoDB, focusing on performance optimization and user experience.",
    },
    {
      title: "Database Management",
      duration: "2023",
      description:
        "Designing and implementing efficient database schemas for web applications, ensuring data integrity and security.",
    },
    {
      title: "Frontend Developer",
      duration: "2022 - 2023",
      description:
        "Building responsive and interactive user interfaces using React, HTML, and CSS.",
    },
  ];

  const focusAreas = [
    {
      title: "Backend Efficiency",
      description: "Optimizing server-side performance and scalability.",
      icon: <FiServer className={styles.iconLarge} />,
    },
    {
      title: "Database Management",
      description: "Ensuring efficient data storage and retrieval systems.",
      icon: <FiDatabase className={styles.iconLarge} />,
    },
    {
      title: "Deployment & DevOps",
      description: "Streamlining CI/CD pipelines and cloud deployments.",
      icon: <FiCloud className={styles.iconLarge} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.section}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.text}>
            I’m <span className={styles.bold}>Israr Ahmad</span>, a passionate{" "}
            <span className={styles.bold}>full-stack developer</span> with
            expertise in React, JavaScript, and Express.js. I specialize in
            building scalable, high-performance web applications, focusing on
            clean, efficient, and maintainable code. My strength lies in
            developing robust backend architectures and integrating them
            seamlessly with dynamic frontends.
            <br />
            <br />I thrive on solving complex problems and optimizing systems
            for better efficiency. My approach to development is rooted in
            continuous learning and innovation, ensuring that every project
            meets the highest standards. Whether working independently or as
            part of a team, I am committed to delivering reliable and impactful
            digital solutions. If you're looking for a dedicated developer to
            collaborate with, let's connect!
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <CgWebsite className={styles.iconLarge} />
            <div>
              <h2 className={styles.cardTitle}>Full-Stack Development</h2>
              <p className={styles.cardText}>
                Building scalable and efficient web applications.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <RxGear className={styles.iconLarge} />
            <div>
              <h2 className={styles.cardTitle}>Backend Architecture</h2>
              <p className={styles.cardText}>
                Creating robust and optimized server-side solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.section}>
          <h2 className={styles.title}>Professional Journey</h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <motion.div
                  className={styles.timelineDot}
                  initial={{ y: 70, opacity: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                ></motion.div>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <p className={styles.timelineDuration}>{exp.duration}</p>
                <p className={styles.timelineText}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>Current Focus</h2>
          <div className={styles.focusArea}>
            {focusAreas.map((focus, index) => (
              <div key={index} className={styles.focusItem}>
                <div className={styles.focusIcon}>{focus.icon}</div>
                <div>
                  <h3 className={styles.focusTitle}>{focus.title}</h3>
                  <p className={styles.focusText}>{focus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
