import { FiGithub } from "react-icons/fi";
import React from "react";
import styles from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sillicomImage from "../../assets/sillicom_technologies_cover.jpeg";
import blackLimoImage from "../../assets/black_limo_cover.png";
import learningWebsiteImage from "../../assets/learning_website_cover.png";
const s = styles;

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: "Sillicom Technologies",
      description: "A Portfolio website for a tech company.",
      image: sillicomImage,
      link: "https://sillicom.com",
      tags: ["React", "NodeMailer", "Css"],
    },
    {
      title: "Black Limo Website",
      description:
        "A full stack professional limo service website with modern UI.",
      image: blackLimoImage,
      link: "https://github.com/israrahmad831/Black-Limo-Website",
      tags: ["React.js", "Express.js", "MongoDB"],
    },
    {
      title: "Code Learnig Website",
      description: "A website for learning code with a modern UI.",
      image: learningWebsiteImage,
      link: "https://github.com/israrahmad831/Learning-Website",
      tags: ["React.js", "Express", "MongoDB"],
    },
  ];

  return (
    <div className={s.projectsContainer}>
      <h2 className={s.sectionTitle}>My Projects</h2>
      <Slider {...settings} className={s.slider}>
        {projects.map((project, index) => (
          <div key={index} className={s.slide}>
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
                    <span key={i} className={s.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.viewButton}
                >
                  view
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
