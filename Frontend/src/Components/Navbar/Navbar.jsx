import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href, name) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(name.toLowerCase());
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-center transition-all duration-500 ${
              scrolled ? "h-16" : "h-24"
            }`}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div
                className={`relative flex items-center space-x-1 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl px-3 py-2.5 rounded-full border border-gray-700/50 shadow-2xl transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-60"></div>

                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href, link.name)}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      animation: mounted
                        ? `slideIn 0.5s ease-out ${index * 100}ms both`
                        : "none",
                    }}
                    className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeSection === link.name.toLowerCase()
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/50 hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {activeSection === link.name.toLowerCase() && (
                      <span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-50"
                        style={{
                          animation:
                            "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      ></span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden fixed top-6 right-6 z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative text-gray-300 hover:text-white p-3 rounded-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:scale-110 ${
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  animation: mounted
                    ? "fadeInScale 0.5s ease-out 0.3s both"
                    : "none",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg opacity-60"></div>
                <div className="relative z-10 transition-transform duration-300">
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Buttons Only */}
      <div
        className={`md:hidden fixed top-0 right-0 z-40 transition-all duration-700 ease-in-out ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Menu Content */}
        <div
          className={`fixed top-0 right-0 flex flex-col items-end justify-start pt-24 pr-6 transition-all duration-500 ${
            isOpen ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-end space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.name)}
                style={{
                  transitionDelay: isOpen ? `${300 + index * 80}ms` : "0ms",
                  animation: isOpen
                    ? `scaleIn 0.5s ease-out ${300 + index * 80}ms both`
                    : "none",
                }}
                className={`relative group px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50 scale-110"
                    : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/70 hover:scale-110 backdrop-blur-xl border border-gray-700/50"
                }`}
              >
                {/* Glow Effect */}
                {activeSection === link.name.toLowerCase() && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-60 animate-pulse"></span>
                )}

                {/* Hover Glow */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 blur-lg transition-all duration-300"></span>

                <span className="relative z-10">{link.name}</span>

                {/* Active Dot */}
                {activeSection === link.name.toLowerCase() && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
}
