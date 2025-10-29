import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Rocket,
  Star,
  Eye,
  ArrowRight,
  Filter,
} from "lucide-react";
import Divvy from "../../assets/Divvy.png";
import Tic from "../../assets/Tic.jpg";
import Uraan from "../../assets/Uraan.jpg";
import Business from "../../assets/Business.png";
import Wattsun from "../../assets/Wattsun.png";
import AI from "../../assets/AI.jpg";
import MT2D from "../../assets/MT2D.png";
import Learning from "../../assets/Learning.png";
import Snake from "../../assets/snake.png";
import PingPong from "../../assets/pong.png";
import Sillicom from "../../assets/sillicomtech.png";
import Quiz from "../../assets/Quiz.png";
import Facilitation from "../../assets/Facilitation.png";
import Chai from "../../assets/ChaiKhana.png";
import Fresh from "../../assets/FreshBerry.png";
import Heer from "../../assets/HeerFlyingClub.png";
import WealthX from "../../assets/WealthX.jpg";
import Tutor from "../../assets/tutor.jpeg";
import Global from "../../assets/global.jpg";
import Sunrays from "../../assets/Sunrays.png";
import CodeHub from "../../assets/CodeHub.png";
export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ["all", "web", "mobile", "fullstack"];

  const projects = [
    {
      id: 1,
      title: "Divvy Split",
      category: "web",
      description:
        "A web-based application app that helps groups of people split expenses and manage shared budgets easily and transparently.",
      image: Divvy,
      tags: ["React", "Css", "Firebase"],
      github: "https://github.com/israrahmad831/Divvy",
      live: "https://divvyy.netlify.app/",
      featured: true,
      stats: { stars: 342, views: "15.8K" },
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      category: "web",
      description: "Interactive online Tic Tac Toe game with multiplayer mode.",
      image: Tic,
      tags: ["PHP", "JavaScript", "Css"],
      github: "https://github.com/israrahmad831/Tik-Tac-Toe",
      live: "https://github.com/israrahmad831/Tik-Tac-Toe",
      featured: false,
      stats: { stars: 127, views: "6.2K" },
    },
    {
      id: 3,
      title: "Uraan AI",
      category: "web",
      description: "Pioneering AI for a Digitally Empowered Pakistan",
      image: Uraan,
      tags: ["PHP", "JavaScript", "Css"],
      github: "https://github.com/israrahmad831/UraanAI",
      live: "https://uraanpakistan.pk/uraanai/",
      featured: true,
      stats: { stars: 589, views: "28.4K" },
    },
    {
      id: 4,
      title: "Business App",
      category: "mobile",
      description:
        "All-in-one mobile app for small businesses to manage inventory, sales, and customer relationships on the go.",
      image: Business,
      tags: ["React Native", "Firebase", "CLI", "Google Drive"],
      github: "https://github.com/israrahmad831/Business-App",
      live: "https://github.com/israrahmad831/Business-App",
      featured: false,
      stats: { stars: 218, views: "11.3K" },
    },

    {
      id: 5,
      title: "Wattsun",
      category: "mobile",
      description:
        "An Invoice Generator App for a Local Business to create and manage invoices on the go.",
      image: Wattsun,
      tags: ["React Native", "Firebase", "CLI"],
      github: "https://github.com/israrahmad831/Wattsun",
      live: "https://github.com/israrahmad831/Wattsun",
      featured: false,
      stats: { stars: 165, views: "8.9K" },
    },
    {
      id: 6,
      title: "Wattsun Web",
      category: "web",
      description:
        "An Invoice Generator Web App for a Local Business to create and manage invoices on the go.",
      image: Wattsun,
      tags: ["React Native", "Firebase", "CLI"],
      github: "https://github.com/israrahmad831/Wattsun",
      live: "https://github.com/israrahmad831/Wattsun",
      featured: false,
      stats: { stars: 173, views: "9.6K" },
    },
    {
      id: 7,
      title: "Code Teaching Model",
      category: "Model",
      description:
        "A code teaching model that can teach coding concepts and programming languages effectively.",
      image: AI,
      tags: ["Python", "Machine Learning", "NLP"],
      github: "https://github.com/israrahmad831/Code-Teacher-Model",
      live: "https://github.com/israrahmad831/Code-Teacher-Model",
      featured: false,
      stats: { stars: 412, views: "32.7K" },
    },
    {
      id: 8,
      title: "MT2D game",
      category: "game",
      description: "A 2D multiplayer game with real-time interaction",
      image: MT2D,
      tags: ["React", "JavaScript"],
      github: "https://github.com/israrahmad831/MT2D",
      live: "https://github.com/israrahmad831/MT2D",
      featured: false,
      stats: { stars: 298, views: "19.5K" },
    },
    {
      id: 9,
      title: "Code Learning Platform",
      category: "fullstack",
      description:
        "A web platform that offers interactive coding lessons and projects for beginners.",
      image: Learning,
      tags: ["Django", "JavaScript", "CSS"],
      github: "https://github.com/israrahmad831/Learning-Website",
      live: "https://github.com/israrahmad831/Learning-Website",
      featured: false,
      stats: { stars: 387, views: "22.1K" },
    },
    {
      id: 10,
      title: "Snake Game",
      category: "game",
      description:
        "Classic Snake game with modern graphics and smooth controls.",
      image: Snake,
      tags: ["C++", "graphics", "controls"],
      github: "https://github.com/israrahmad831/Snake-Game",
      live: "https://github.com/israrahmad831/Snake-Game",
      featured: false,
      stats: { stars: 156, views: "7.8K" },
    },
    {
      id: 11,
      title: "Ping Pong",
      category: "game",
      description: "A classic Ping Pong game with AI opponent.",
      image: PingPong,
      tags: ["C++", "OOP"],
      github: "https://github.com/israrahmad831/Pong-Game",
      live: "https://github.com/israrahmad831/Pong-Game",
      featured: false,
      stats: { stars: 203, views: "10.4K" },
    },
    {
      id: 12,
      title: "Sillicom Technologies",
      category: "web",
      description: "A corporate website for Sillicom Technologies.",
      image: Sillicom,
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/israrahmad831/SillicomTechnologies",
      live: "https://github.com/israrahmad831/SillicomTechnologies",
      featured: false,
      stats: { stars: 241, views: "13.7K" },
    },
    {
      id: 13,
      title: "Quiz App",
      category: "desktop application",
      description:
        "A Quiz Generator App in Java where Teacher Creates the quiz and student solves it",
      image: Quiz,
      tags: ["Java", "Swing", "OOP"],
      github: "https://github.com/israrahmad831/Quiz-App",
      live: "https://github.com/israrahmad831/Quiz-App",
      featured: false,
      stats: { stars: 189, views: "9.2K" },
    },
    {
      id: 14,
      title: "Student Facilitation Portal",
      category: "fullstack",
      description: "A web portal to facilitate student services and resources.",
      image: Facilitation,
      tags: ["JavaScript", "Node.js", "Express", "MySQL"],
      github: "https://github.com/israrahmad831/Student-Facilitation-Portal",
      live: "https://github.com/israrahmad831/Student-Facilitation-Portal",
      featured: false,
      stats: { stars: 267, views: "16.5K" },
    },
    {
      id: 15,
      title: "Chai Khaana",
      category: "web",
      description: "A web application Clone of Chai Khaana.",
      image: Chai,
      tags: ["Html", "CSS"],
      github: "https://github.com/israrahmad831/Chai-Khaana",
      live: "https://github.com/israrahmad831/Chai-Khaana",
      featured: false,
      stats: { stars: 134, views: "5.4K" },
    },
    {
      id: 16,
      title: "Black Limo",
      category: "fullstack",
      description: "A web application for booking luxury limousines.",
      image: Business,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/israrahmad831/Black-Limo-Website",
      live: "https://israrahmad831.github.io/Black-Limo-Website/",
      featured: false,
      stats: { stars: 321, views: "18.9K" },
    },
    {
      id: 17,
      title: "Fresh Berry",
      category: "fullstack",
      description: "An e-commerce website for fresh fruits and vegetables.",
      image: Fresh,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SohailShafiq1/Fresh-Berry",
      live: "https://freshberryuae.com/",
      featured: false,
      stats: { stars: 445, views: "25.3K" },
    },
    {
      id: 18,
      title: "Heer Pigeon",
      category: "fullstack",
      description: "A website to track pigeon racing events.",
      image: Heer,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SohailShafiq1/Heer-Piegon-Full-stack",
      live: "https://heerflyingclub.com/",
      featured: false,
      stats: { stars: 276, views: "14.2K" },
    },
    {
      id: 19,
      title: "WealthX Broker",
      category: "fullstack",
      description: "A platform for trading stocks and cryptocurrencies.",
      image: WealthX,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SohailShafiq1/Trading-App",
      live: "https://github.com/SohailShafiq1/Trading-App",
      featured: true,
      stats: { stars: 523, views: "31.6K" },
    },
    {
      id: 20,
      title: "E-Tutor",
      category: "fullstack",
      description: "An online platform for tutoring and educational resources.",
      image: Tutor,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SohailShafiq1/E-Tutor",
      live: "https://github.com/SohailShafiq1/E-Tutor",
      featured: false,
      stats: { stars: 198, views: "12.7K" },
    },
    {
      id: 21,
      title: "Global Education",
      category: "web",
      description: "A Consultancy Website for Global Education.",
      image: Global,
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/SohailShafiq1/GlobalEducation",
      live: "https://github.com/SohailShafiq1/GlobalEducation",
      featured: false,
      stats: { stars: 167, views: "8.5K" },
    },
    {
      id: 22,
      title: "Sunrays Consultancy",
      category: "web",
      description: "A Consultancy Website for Sunrays Consultancy.",
      image: Sunrays,
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/SohailShafiq1/Consultancy",
      live: "https://www.sunrayconsultants.com/",
      featured: false,
      stats: { stars: 289, views: "17.8K" },
    },
    {
      id: 23,
      title: "CodeHub",
      category: "fullstack",
      description:
        "A collaborative platform for developers to share and learn code.",
      image: CodeHub,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Asad-Ullah-Turab/codehub-frontend",
      live: "https://github.com/Asad-Ullah-Turab/codehub-frontend",
      featured: true,
      stats: { stars: 678, views: "42.9K" },
    },
  ];

  const filteredProjects = (
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter)
  ).sort((a, b) => {
    // Sort featured projects first
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Rocket className="text-purple-400" size={18} />
            <span className="text-purple-400 text-sm font-medium">MY WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex justify-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-full px-2 sm:px-0 overflow-x-auto sm:overflow-visible flex justify-center">
            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-3 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-xl shadow-lg">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/40"
                  }`}
                  style={{
                    animation: inView
                      ? `popIn 0.4s ease-out ${300 + index * 50}ms both`
                      : "none",
                  }}
                >
                  <span className="relative z-10">{filter.toUpperCase()}</span>
                  {activeFilter === filter && (
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-30 -z-10"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: inView
                  ? `fadeInUp 0.6s ease-out ${400 + index * 100}ms both`
                  : "none",
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`}
                ></div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                  {/* Stats overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50">
                        <Star size={14} className="text-yellow-400" />
                        <span className="text-white text-xs font-medium">
                          {project.stats.stars}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50">
                        <Eye size={14} className="text-blue-400" />
                        <span className="text-white text-xs font-medium">
                          {project.stats.views}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick action buttons - appear on hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500 backdrop-blur-sm border border-blue-400 rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex-1 flex flex-col z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex-shrink-0 p-2 bg-gray-700/50 rounded-lg">
                      <Code2 className="text-blue-400" size={18} />
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs text-gray-300 hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More Link */}
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <a
            href="https://github.com/israrahmad831?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-gray-700 hover:border-gray-500 hover:bg-gray-700/50 hover:scale-105 transition-all duration-300"
          >
            <Github size={22} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          80% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
