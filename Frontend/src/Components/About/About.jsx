import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Zap,
  Users,
  Award,
  BookOpen,
  Coffee,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
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

  const expertise = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and industry standards.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful interfaces that users love to interact with.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for lightning-fast load times and smooth user experiences.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with cross-functional teams to deliver exceptional results.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Started Journey",
      description: "Began coding and fell in love with development",
    },
    {
      year: "2023",
      title: "First Major Project",
      description: "Built and launched a successful web application",
    },
    {
      year: "2024",
      title: "Team Lead",
      description: "Led a team of developers on enterprise projects",
    },
    {
      year: "2025",
      title: "Current",
      description: "Continuing to grow and take on new challenges in tech",
    },
  ];

  const values = [
    { icon: Lightbulb, text: "Innovation" },
    { icon: Target, text: "Excellence" },
    { icon: Heart, text: "Passion" },
    { icon: BookOpen, text: "Learning" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Coffee className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">
              GET TO KNOW ME
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-3xl">👋</span> My Story
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hey there! I'm a{" "}
                    <span className="text-white font-semibold">
                      Full Stack Developer
                    </span>{" "}
                    who believes in the power of technology to transform ideas
                    into reality. My journey started with curiosity and evolved
                    into a passion for creating seamless digital experiences.
                  </p>
                  <p>
                    I specialize in building modern web applications using
                    cutting-edge technologies. From pixel-perfect front-ends to
                    robust back-end systems, I love every aspect of the
                    development process.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community. I believe in
                    continuous learning and staying ahead of the curve.
                  </p>
                </div>

                {/* Values */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={value.text}
                        className="flex flex-col items-center gap-2 p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                        style={{
                          animation: inView
                            ? `fadeInUp 0.5s ease-out ${
                                400 + index * 100
                              }ms both`
                            : "none",
                        }}
                      >
                        <Icon className="text-blue-400" size={24} />
                        <span className="text-gray-300 text-xs font-medium">
                          {value.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Cards */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative"
                  style={{
                    animation: inView
                      ? `slideInRight 0.6s ease-out ${600 + index * 100}ms both`
                      : "none",
                  }}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
                  ></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${item.color} rounded-xl`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">My Journey</h3>
            <p className="text-gray-400">The path that led me here</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - removed along with dots */}
            <div className="space-y-16">
              {journey.map((item, index) => (
                <div
                  key={item.year}
                  className="relative"
                  style={{
                    animation: inView
                      ? `fadeInScale 0.6s ease-out ${1000 + index * 150}ms both`
                      : "none",
                  }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`w-full md:w-5/12 flex ${
                        index % 2 === 0
                          ? "md:justify-end md:pr-8 justify-center"
                          : "md:justify-start md:pl-8 justify-center"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
                          index % 2 === 0
                            ? "from-blue-500 to-purple-500"
                            : "from-purple-500 to-pink-500"
                        } rounded-full shadow-lg`}
                      >
                        <Award className="text-white" size={20} />
                        <span className="text-white font-bold text-lg">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <p className="text-gray-300 text-lg mb-6">Want to work together?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Let's Create Something Amazing
            <Zap size={20} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
