import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const s = styles;

const Footer = () => {
  const scrollToSection = (section) => {
    const element = sectionRefs[section]?.current;
    if (element) {
      const offset = -80;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <footer className={s.container}>
      <div className={s.grid}>
        {/* Brand & Socials */}
        <div className={s.section}>
          <h3 className={s.logo}>IsrarJS</h3>
          <p className={s.description}>
            Crafting clean, modern, and responsive websites with full-stack
            magic.
          </p>
          <div className={s.socialLinks}>
            <a
              href="https://www.linkedin.com/in/israrahmad2004/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/israrahmad831"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
            <a
              href="https://www.facebook.com/xDisrar"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://wa.me/92XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={s.section}>
          <h4 className={s.sectionTitle}>Quick Links</h4>
          <ul className={s.links}>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={s.section}>
          <h4 className={s.sectionTitle}>Contact</h4>
          <p>Email: israrahmad831@gmail.com</p>
          <p>Phone: +92-XXX-XXXXXXX</p>
          <p>Location: Pakistan</p>
        </div>
      </div>

      {/* Copyright */}
      <div className={s.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Israr Ahmad — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
