import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import sillicomImage from "../../assets/sillicomtech.png";
import blackLimoImage from "../../assets/black_limo_cover.png";
import learningWebsiteImage from "../../assets/learning_website_cover.png";
import Facilitaion from "../../assets/Facilitation.png";
import quizImage from "../../assets/Quiz.png";
import snakeImage from "../../assets/snake.png";
import HeerFlyingClub from "../../assets/HeerFlyingClub.png";
import ChaiKhana from "../../assets/ChaiKhana.png";
import Pong from "../../assets/pong.png";
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
        image: Facilitaion,
        link: "https://github.com/israrahmad831/Student-Facilitation-Portal",
        tags: ["html Css", "JavaScript", "MySQL"],
      },
      {
        title: "Chai Khaana",
        description: "Simple Frontend Design of a restaurant website.",
        image: ChaiKhana,
        link: "https://github.com/israrahmad831/Chai-Khaana",
        tags: ["html", "Css"],
      },
      {
        title: "Heer Flying Club",
        description: "A Full Stack website for a Pigeon Racing Club.",
        image: HeerFlyingClub,
        link: "https://heerflyingclub.com",
        tags: ["React.js", "Express", "MongoDB"],
      },
      {
        title: "WealthX Broker",
        description:
          "A modern trading app for brokers and investors, featuring real-time data and secure transactions.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["React.js", "Trading", "Finance", "Web App"],
      },
      {
        title: "Global Education",
        description:
          "Consultant website for global education services, providing resources and guidance for students.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["React.js", "Consultancy", "Education", "Web App"],
      },
      {
        title: "FreshBerry",
        description:
          "Company portfolio website for FreshBerry, showcasing products and business information.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["React.js", "Portfolio", "Company", "Web App"],
      },
      {
        title: "Wattsun Invoice",
        description:
          "Invoice generator app for Wattsun company, built with React Native for mobile platforms.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["React Native", "Invoice", "Mobile App"],
      },
      {
        title: "Business Manager",
        description:
          "A React Native manager app for businesses such as shops, helping with organization and operations.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["React Native", "Business", "Manager", "Mobile App"],
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
        image: Pong,
        link: "https://github.com/israrahmad831/Pong-Game",
        tags: ["C++", "Raylib"],
      },
    ],
    Python: [
      {
        title: "Code Teaching Model",
        description:
          "A simple Python model that answers questions related to coding languages, designed for educational purposes.",
        image: null, // Add image later
        link: "", // Add link later
        tags: ["Python", "AI", "Education", "Q&A"],
      },
    ],
  };

  const projects = projectData[category] || [];

  return (
    <>
      <div className={s.mainBox}>
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
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 1,
              },
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className={s.slider}
          >
            <div className={s.projectsBox}>
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
                        <p className={s.projectDescription}>
                          {project.description}
                        </p>
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
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
