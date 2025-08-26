import { TbBrandMysql, TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaReact, FaWhatsapp } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import israr from "../../assets/me.png";
import Magnetic from "../../Lib/Magnetic";

const Home = () => {
  const typedref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedref.current, {
      strings: ["Full Stack Developer", "App Developer", "Problem Solver"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Enhanced Particle animation with magnification effect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 200;
    const magnificationFactor = 100; // Area around cursor that gets magnified

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsla(${Math.random() * 60 + 240}, 100%, 70%, ${
          Math.random() * 0.5 + 0.3
        })`;
        this.originalSize = this.size;
      }

      update(mouse) {
        // Check distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Magnify particles near cursor
        if (distance < magnificationFactor) {
          const force = (magnificationFactor - distance) / magnificationFactor;
          const directionX = dx / distance;
          const directionY = dy / distance;

          // Push particles away from cursor
          this.x -= directionX * force * 5;
          this.y -= directionY * force * 5;

          // Increase size near cursor
          this.size = this.originalSize + force * 5;
        } else {
          // Normal movement
          this.x += this.speedX;
          this.y += this.speedY;
          this.size = this.originalSize;
        }

        // Bounce off walls
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mousePosition);
        particlesArray[i].draw();
      }

      // Connect particles
      connectParticles();

      requestAnimationFrame(animate);
    }

    function connectParticles() {
      const maxDistance = 100;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 0.3 - distance / maxDistance;
            ctx.strokeStyle = `hsla(240, 100%, 70%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      typed.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePosition]);

  return (
    <div className={styles.homeRoot}>
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>

      {/* Mouse follow effect */}
      <div
        className={styles.mouseFollow}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div className={styles.animatedOrbs}>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
      </div>

      {/* Floating elements */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextBlock}>
            <div className={styles.titleContainer}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine}>Hi, I'm</span>
                <span className={styles.gradientName}>Israr Ahmad</span>
              </h1>
              <div className={styles.animatedUnderline}></div>
            </div>

            <div className={styles.typedWrap}>
              <span ref={typedref} className={styles.typedText} />
              <div className={styles.cursor}></div>
            </div>

            <p className={styles.heroDesc}>
              Crafting digital excellence through code. I build fast, beautiful,
              and scalable experiences with modern technologies and innovative
              solutions.
            </p>

            <div className={styles.heroActions}>
              <Magnetic>
                <a href="#projects" className={styles.ctaButton}>
                  <span>See My Work</span>
                  <div className={styles.buttonHoverEffect}></div>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className={styles.ctaButtonOutline}>
                  <span>Contact Me</span>
                  <div className={styles.buttonHoverEffect}></div>
                </a>
              </Magnetic>
            </div>

            <div className={styles.socialLinks}>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/israrahmad2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <AiOutlineLinkedin />
                  <span className={styles.socialText}>LinkedIn</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://github.com/israrahmad831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <RiGithubLine />
                  <span className={styles.socialText}>GitHub</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.facebook.com/xDisrar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <AiOutlineFacebook />
                  <span className={styles.socialText}>Facebook</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://wa.me/923264114782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaWhatsapp />
                  <span className={styles.socialText}>WhatsApp</span>
                </a>
              </Magnetic>
            </div>
          </div>

          <div className={styles.heroImageBlock}>
            <div className={styles.imageContainer}>
              <div className={styles.floatingOrbs}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
                <div className={styles.orb4}></div>
              </div>
              <div className={styles.hexagonContainer}>
                <div className={styles.hexagon}>
                  <div className={styles.heroImageBg}>
                    <img
                      src={israr}
                      className={styles.heroImage}
                      alt="Israr Ahmad"
                    />
                  </div>
                </div>
                <div className={styles.hexagonBorder}></div>
              </div>
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <p>Scroll down</p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.sectionTitle}>
          <h2>What I Do</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardInner}>
              <div className={styles.featureIconContainer}>
                <FaReact className={styles.featureIcon} />
              </div>
              <h3>Frontend Development</h3>
              <p>
                Modern, responsive, and interactive UIs using React.js and the
                latest web technologies.
              </p>
              <div className={styles.cardHoverEffect}></div>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardInner}>
              <div className={styles.featureIconContainer}>
                <DiNodejsSmall className={styles.featureIcon} />
              </div>
              <h3>Backend Engineering</h3>
              <p>
                Robust APIs and scalable server-side logic with Node.js,
                Express, and databases.
              </p>
              <div className={styles.cardHoverEffect}></div>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardInner}>
              <div className={styles.featureIconContainer}>
                <SiMongodb className={styles.featureIcon} />
              </div>
              <h3>Database Design</h3>
              <p>
                Efficient, secure, and scalable data storage with MongoDB and
                MySQL.
              </p>
              <div className={styles.cardHoverEffect}></div>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardInner}>
              <div className={styles.featureIconContainer}>
                <TbBrandJavascript className={styles.featureIcon} />
              </div>
              <h3>JavaScript Expertise</h3>
              <p>
                Advanced JavaScript for both frontend and backend, enabling
                dynamic web apps.
              </p>
              <div className={styles.cardHoverEffect}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
