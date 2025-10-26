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

  const filters = ["all", "web", "mobile", "ui/ux", "fullstack"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 234, views: "12.5K" },
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and productivity analytics.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 189, views: "8.3K" },
    },
    {
      id: 3,
      title: "Fitness Tracking Mobile",
      category: "mobile",
      description:
        "Native mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      tags: ["React Native", "Redux", "API Integration"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 456, views: "18.2K" },
    },
    {
      id: 4,
      title: "Portfolio Design System",
      category: "ui/ux",
      description:
        "Complete design system with reusable components, documentation, and interactive prototypes for modern portfolios.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Figma", "React", "Storybook"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 312, views: "9.7K" },
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      category: "fullstack",
      description:
        "Intelligent chatbot with natural language processing, contextual understanding, and multi-language support.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tags: ["Python", "OpenAI", "React", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 567, views: "25.1K" },
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      category: "web",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and customizable reports.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Next.js", "D3.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 278, views: "11.4K" },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-gray-800/30 border border-gray-700/50 rounded-full backdrop-blur-sm max-w-full">
            <Filter className="text-gray-400 flex-shrink-0" size={16} />
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                style={{
                  animation: inView
                    ? `popIn 0.4s ease-out ${300 + index * 50}ms both`
                    : "none",
                }}
              >
                {filter.toUpperCase()}
              </button>
            ))}
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
            href="https://github.com/yourprofile"
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
