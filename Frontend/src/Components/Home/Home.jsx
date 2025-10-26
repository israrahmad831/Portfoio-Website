import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Download,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import Israr from "../../assets/Israr.png";
import CV from "../../assets/CV.pdf";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/israrahmad2004",
      color:
        "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/israrahmad831",
      color:
        "hover:bg-gray-600/20 hover:border-gray-500/50 hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/xDisrar",
      color:
        "hover:bg-blue-600/20 hover:border-blue-600/50 hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+923264114782",
      color:
        "hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400",
    },
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: Rocket },
    { number: "20+", label: "Projects Completed", icon: Code2 },
    { number: "10+", label: "Happy Clients", icon: Sparkles },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden pb-10"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-green-400 text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-gray-400 text-lg font-medium mb-3 tracking-wide">
                CREATIVE DEVELOPER
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Bio */}
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                I'm{" "}
                <span className="text-white font-semibold">Israr Ahmad</span>, a
                passionate Full Stack Developer specializing in the MERN stack.
                I create scalable and high-performance web applications focused
                on clean architecture, responsive design, and smooth user
                experiences. With a strong command of both frontend and backend
                technologies, I’m dedicated to transforming complex ideas into
                efficient, reliable digital solutions.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 py-6 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="relative group"
                    style={{
                      animation: mounted
                        ? `slideUp 0.6s ease-out ${600 + index * 100}ms both`
                        : "none",
                    }}
                  >
                    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      <Icon className="text-blue-400 mb-2" size={24} />
                      <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Let's Talk
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={CV}
                download
                className="group px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-gray-600 hover:border-white hover:bg-white/5 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 bg-gray-800/30 backdrop-blur-sm text-gray-400 rounded-xl border border-gray-700/50 transition-all duration-300 ${social.color}`}
                        style={{
                          animation: mounted
                            ? `popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${
                                1000 + index * 100
                              }ms both`
                            : "none",
                        }}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 ${
              mounted
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative group">
              {/* Animated gradient rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 animate-spin-slow"></div>

              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-gray-700/30 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                <img
                  src={Israr}
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Floating tech icons */}
              <div
                className="absolute -top-8 -right-8 bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-xl"
                style={{
                  animation: mounted ? "float 3s ease-in-out infinite" : "none",
                }}
              >
                <Code2 className="text-blue-400" size={28} />
              </div>

              <div
                className="absolute -bottom-8 -left-8 bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-xl"
                style={{
                  animation: mounted
                    ? "float 3s ease-in-out infinite 1.5s"
                    : "none",
                }}
              >
                <Sparkles className="text-purple-400" size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2 animate-bounce">
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
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
            transform: scale(0.5) translateY(20px);
          }
          80% {
            transform: scale(1.1) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
