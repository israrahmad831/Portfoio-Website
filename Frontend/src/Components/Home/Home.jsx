import { TbBrandMysql } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaReact, FaWhatsapp } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import israr from "../../assets/me.png";
import Magnetic from "../../Lib/Magnetic";

const Home = () => {
  const typedref = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedref.current, {
      strings: ["Full Stack Developer", "App Developer", "Problem Solver"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.homeRoot}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextBlock}>
            <h1 className={styles.heroTitle}>
              Hi,{" "}
              <span className={styles.gradientName}>I'm Israr Ahmad</span>
            </h1>
            <div className={styles.typedWrap}>
              <span ref={typedref} className={styles.typedText} />
            </div>
            <p className={styles.heroDesc}>
              Building digital experiences that are fast, beautiful, and scalable.
              I specialize in full-stack development, modern UI/UX, and robust
              backend solutions.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className={styles.ctaButton}>
                See My Work
              </a>
              <a href="#contact" className={styles.ctaButtonOutline}>
                Contact Me
              </a>
            </div>
            <div className={styles.socialLinks}>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/israrahmad2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://github.com/israrahmad831"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubLine />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.facebook.com/xDisrar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFacebook />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://wa.me/923264114782"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </Magnetic>
            </div>
          </div>
          <div className={styles.heroImageBlock}>
            <div className={styles.heroImageBg}>
              <img
                src={israr}
                className={styles.heroImage}
                alt="Israr Ahmad"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>What I Do</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <FaReact className={styles.featureIcon} />
            <h3>Frontend Development</h3>
            <p>
              Modern, responsive, and interactive UIs using React.js and the
              latest web technologies.
            </p>
          </div>
          <div className={styles.featureCard}>
            <DiNodejsSmall className={styles.featureIcon} />
            <h3>Backend Engineering</h3>
            <p>
              Robust APIs and scalable server-side logic with Node.js, Express,
              and databases.
            </p>
          </div>
          <div className={styles.featureCard}>
            <SiMongodb className={styles.featureIcon} />
            <h3>Database Design</h3>
            <p>
              Efficient, secure, and scalable data storage with MongoDB and
              MySQL.
            </p>
          </div>
          <div className={styles.featureCard}>
            <TbBrandJavascript className={styles.featureIcon} />
            <h3>JavaScript Expertise</h3>
            <p>
              Advanced JavaScript for both frontend and backend, enabling
              dynamic web apps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
