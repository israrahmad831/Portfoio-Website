import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Wrench,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");
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

  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "backend",
      name: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "tools",
      name: "Tools & Others",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 95, icon: "⚛️", experience: "3 years" },
      { name: "Next.js", level: 90, icon: "▲", experience: "2 years" },
      { name: "TypeScript", level: 88, icon: "📘", experience: "3 years" },
      { name: "Tailwind CSS", level: 92, icon: "🎨", experience: "3 years" },
      { name: "JavaScript", level: 94, icon: "🟨", experience: "3 years" },
      { name: "HTML/CSS", level: 96, icon: "🌐", experience: "3 years" },
      { name: "React Native", level: 85, icon: "📱", experience: "1 years" },
      { name: "Redux", level: 87, icon: "🔄", experience: "2 years" },
      {
        name: "Bootstrap",
        level: 80,
        icon: "🅱️",
        experience: "2 years",
      },
      { name: "Sass", level: 82, icon: "🎭", experience: "2 years" },
      { name: "Webpack", level: 84, icon: "📦", experience: "2 years" },
      { name: "Jest", level: 80, icon: "🧪", experience: "1 years" },
      { name: "Figma", level: 89, icon: "🎨", experience: "3 years" },
    ],
    backend: [
      { name: "Node.js", level: 91, icon: "🟢", experience: "3 years" },
      { name: "Express.js", level: 89, icon: "🚂", experience: "3 years" },
      { name: "MongoDB", level: 86, icon: "🍃", experience: "3 years" },
      { name: "PostgreSQL", level: 84, icon: "🐘", experience: "2 years" },
      { name: "Python", level: 82, icon: "🐍", experience: "1 years" },
      { name: "REST API", level: 93, icon: "🔌", experience: "3 years" },
      { name: "GraphQL", level: 80, icon: "◈", experience: "1 years" },
      { name: "Firebase", level: 88, icon: "🔥", experience: "2 years" },
      { name: "Django", level: 81, icon: "🌐", experience: "1 years" },
      { name: "MySQL", level: 83, icon: "🐬", experience: "2 years" },
      { name: "Redis", level: 79, icon: "🧠", experience: "1 years" },
      { name: "PHP", level: 75, icon: "🐘", experience: "1 years" },
      { name: "Laravel", level: 77, icon: "🌿", experience: "1 years" },
      { name: "C#", level: 78, icon: "🎯", experience: "1 years" },
    ],
    tools: [
      { name: "Git & GitHub", level: 94, icon: "🔀", experience: "3 years" },
      { name: "Docker", level: 83, icon: "🐳", experience: "1 years" },
      { name: "AWS", level: 81, icon: "☁️", experience: "2 years" },
      { name: "Figma", level: 89, icon: "🎨", experience: "3 years" },
      { name: "VS Code", level: 96, icon: "💻", experience: "3 years" },
      { name: "Postman", level: 92, icon: "📮", experience: "2 years" },
      { name: "Linux", level: 85, icon: "🐧", experience: "3 years" },
      { name: "CI/CD", level: 80, icon: "🔄", experience: "1 years" },
      { name: "Jira", level: 84, icon: "📋", experience: "2 years" },
    ],
  };

  const expertise = [
    {
      title: "Responsive Design",
      description: "Mobile-first approach",
      icon: Palette,
    },
    { title: "Performance", description: "Optimized & fast", icon: Zap },
    {
      title: "Best Practices",
      description: "Clean & maintainable",
      icon: CheckCircle2,
    },
    {
      title: "Always Learning",
      description: "Staying updated",
      icon: TrendingUp,
    },
  ];

  const currentSkills = skills[activeCategory];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Sparkles className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">
              WHAT I DO BEST
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r " +
                      category.color +
                      " text-white shadow-xl scale-105"
                    : "bg-gray-800/50 backdrop-blur-sm text-gray-400 border border-gray-700/50 hover:border-gray-600/50 hover:text-white hover:scale-105"
                }`}
                style={{
                  animation: inView
                    ? `slideInDown 0.5s ease-out ${300 + index * 100}ms both`
                    : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} />
                  <span className="text-lg">{category.name}</span>
                </div>
                {activeCategory === category.id && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-50 -z-10`}
                  ></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{
                animation: inView
                  ? `fadeInScale 0.6s ease-out ${400 + index * 80}ms both`
                  : "none",
              }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {skill.experience} experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
                    <Award size={14} className="text-blue-400" />
                    <span className="text-white text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      transitionDelay: `${500 + index * 80}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>

                {/* Skill level indicator dots */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                        i < Math.ceil(skill.level / 20)
                          ? "bg-gradient-to-r from-blue-500 to-purple-600"
                          : "bg-gray-700/50"
                      }`}
                      style={{
                        transitionDelay: `${600 + index * 80 + i * 50}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">My Approach</h3>
            <p className="text-gray-400">Core principles that guide my work</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative"
                  style={{
                    animation: inView
                      ? `popIn 0.6s ease-out ${1000 + index * 100}ms both`
                      : "none",
                  }}
                >
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-blue-400" size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
