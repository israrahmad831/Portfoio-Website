import { TbBrandMysql } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import israr from "../../assets/me.png";
import Magnetic from "../../Lib/Magnetic";
import { Link } from "react-router-dom";

const Home = () => {
  const typedref = React.useRef(null);
  useEffect(() => {
    
    const typed = new Typed(typedref.current, {
      strings: ["Full Stack Developer", "App Developer", "Problem Solver"],
      typedSpeed: 0,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.leftSide}>
          <div className={styles.introBox}>
            <div className={styles.welcome}>Welcome to My portfolio</div>
            <h1 className={styles}>
              I am <span ref={typedref} />
            </h1>
            <p>
              Hi, I'm Israr Ahmad, a passionate Full-Stack Developer skilled in
              React, JavaScript, and backend technologies. I love building
              dynamic and responsive web applications that deliver seamless user
              experiences. Currently, I'm working on innovative projects,
              including my portfolio and a full-stack website. Always eager to
              learn and grow in the tech world!
            </p>
          </div>
          <div className={styles.socialLinks}>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/israrahmad2004/"
                target="blank"
              >
                <i className="fab fa-linkedin">
                  <AiOutlineLinkedin />
                </i>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/israrahmad831" target="blank">
                <i className="fab fa-linkedin">
                  <RiGithubLine />
                </i>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.facebook.com/xDisrar" target="blank">
                <i className="fab fa-linkedin">
                  <AiOutlineFacebook />
                </i>
              </a>
            </Magnetic>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageBox}>
            <img src={israr} className={styles.Israr} alt="Israr Ahmad" />
          </div>
        </div>
      </div>
      <div className={styles.TechUsed}>
        <div className={styles.header}>
          <h1>Technologies I Work With</h1>
        </div>
        <div className={styles.techs}>
          <div className={styles.technology}>
            <Magnetic>
              <FaReact className={styles.icons} />
            </Magnetic>
            React.js
          </div>
          <div className={styles.technology}>
            <Magnetic>
              <DiNodejsSmall className={styles.icons} />
            </Magnetic>
            Node.js
          </div>
          <div className={styles.technology}>
            <Magnetic>
              <SiExpress className={styles.icons} />
            </Magnetic>
            Express.JS
          </div>
          <div className={styles.technology}>
            <Magnetic>
              <SiMongodb className={styles.icons} />
            </Magnetic>
            MongoDB
          </div>
          <div className={styles.technology}>
            <Magnetic>
              <TbBrandJavascript className={styles.icons} />
            </Magnetic>
            JavaScript
          </div>
          <div className={styles.technology}>
            <Magnetic>
              <TbBrandMysql className={styles.icons} />
            </Magnetic>
            MySQL
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
