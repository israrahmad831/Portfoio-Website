import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Magnetic from "../../Lib/Magnetic";
const s = styles;

const Footer = ({ sectionRefs }) => {
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
      <div className={s.mainBox}>
        <footer className={s.container}>
          <div className={s.grid}>
            <div className={s.section}>
              <h3 className={s.logo}>IsrarJS</h3>
              <p className={s.description}>
                Crafting clean, modern, and responsive websites with full-stack
                magic.
              </p>
              <div className={s.socialLinks}>
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/israrahmad2004/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://github.com/israrahmad831"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubLine />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.facebook.com/xDisrar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://wa.me/923264114782"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className={s.section}>
              <h4 className={s.sectionTitle}>Quick Links</h4>
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
                    <div key={index} className={styles.elements_type}>
                      <li onClick={() => scrollToSection(item)}>{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.section}>
              <h4 className={s.sectionTitle}>Contact</h4>
              <p>Email: israrahmad2004.aa@gmail.com</p>
              <p>Phone: +92-3264114-782</p>
              <p>Location: Islamabad, Pakistan</p>
            </div>
          </div>
          <div className={s.bottomBar}>
            <p>
              &copy; {new Date().getFullYear()} Israr Ahmad — All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
