import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import sillicomImage from "../../assets/sillicom_technologies_cover.jpeg";
import blackLimoImage from "../../assets/black_limo_cover.png";
import learningWebsiteImage from "../../assets/learning_website_cover.png";
import quizImage from "../../assets/quiz_app.jpeg";
import snakeImage from "../../assets/snake_game.jpeg";
import pongImage from "../../assets/pong_game.jpeg";
import Magnetic from "../../Lib/Magnetic";
const s = styles;

const Projects = () => {
  const [category, setCategory] = useState("Javascript");

  const projectData = {
    Javascript: [
      {
        title: "Sillicom Technologies",
        description: "A Portfolio website for a tech company.",
        image: sillicomImage,
        link: "https://sillicom.com",
        tags: ["React", "NodeMailer", "CSS"],
      },
      {
        title: "Black Limo Website",
        description: "A full-stack professional limo service website.",
        image: blackLimoImage,
        link: "https://github.com/israrahmad831/Black-Limo-Website",
        tags: ["React.js", "Express.js", "MongoDB"],
      },
      {
        title: "Code Learning Website",
        description: "A website for learning code with a modern UI.",
        image: learningWebsiteImage,
        link: "https://github.com/israrahmad831/Learning-Website",
        tags: ["React.js", "Express", "MongoDB"],
      },
      {
        title: "Student Facilitation Portal",
        description:
          "A portal for students to submit queries and admin review them.",
        image: learningWebsiteImage,
        link: "https://github.com/israrahmad831/Student-Facilitation-Portal",
        tags: ["html", "Css", "JavaScript", "MySQL"],
      },
      {
        title: "Chai Khaana",
        description: "Simple Frontend Design of a restaurant website.",
        image: learningWebsiteImage,
        link: "https://github.com/israrahmad831/Chai-Khaana",
        tags: ["html", "Css"],
      },
      {
        title: "Heer Pigeon Club",
        description: "A Full Stack website for a Pigeon Racing Club.",
        image: learningWebsiteImage,
        link: "https://github.com/SohailShafiq1/Heer-Piegon-Full-stack",
        tags: ["React.js", "Express", "MongoDB"],
      },
    ],
    Java: [
      {
        title: "Quiz App",
        description: "Teachers create quizzes, students attempt them.",
        image: quizImage,
        link: "https://github.com/israrahmad831/Quiz-App",
        tags: ["Java", "Spring Boot", "MySQL"],
      },
    ],
    "C++": [
      {
        title: "Snake Game",
        description: "A simple snake game using C++.",
        image: snakeImage,
        link: "https://github.com/israrahmad831/Snake-Game",
        tags: ["C++", "Graphics"],
      },
      {
        title: "Pong Game",
        description: "A simple Pong game using C++.",
        image: pongImage,
        link: "https://github.com/israrahmad831/Pong-Game",
        tags: ["C++", "Raylib"],
      },
    ],
  };

  const projects = projectData[category] || [];

  return (
    <div className={s.projectsContainer}>
      <h2 className={s.sectionTitle}>My Projects</h2>
      <div className={s.categoryButtons}>
        {Object.keys(projectData).map((cat) => (
          <Magnetic key={cat}>
            <button
              onClick={() => setCategory(cat)}
              className={category === cat ? s.activeButton : ""}
            >
              {cat}
            </button>
          </Magnetic>
        ))}
      </div>

      <Swiper
        slidesPerView={projects.length < 3 ? projects.length : 3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1024: { slidesPerView: projects.length < 3 ? projects.length : 3 },
          768: { slidesPerView: projects.length < 2 ? projects.length : 2 },
          480: { slidesPerView: 1 },
        }}
        className={s.slider}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={s.slide}>
            <div className={s.projectCard}>
              <div className={s.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={s.image}
                />
                <div className={s.overlay}>
                  <h3 className={s.projectTitle}>{project.title}</h3>
                  <p className={s.projectDescription}>{project.description}</p>
                </div>
              </div>
              <div className={s.projectInfo}>
                <div className={s.tagContainer}>
                  {project.tags.map((tag, i) => (
                    <Magnetic key={i}>
                      <span className={s.tag}>{tag}</span>
                    </Magnetic>
                  ))}
                </div>
                <Magnetic>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.viewButton}
                  >
                    View
                  </a>
                </Magnetic>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
