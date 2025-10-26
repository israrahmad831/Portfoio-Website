import { useState, useEffect } from "react";
import {
  Heart,
  ArrowUp,
  Linkedin,
  Github,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/israrahmad2004",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/israrahmad831",
      color: "hover:text-gray-300",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/xDisrar",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/+923264114782",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Israr Ahmad
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Full Stack Developer crafting beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                style={{
                  animation: mounted
                    ? `fadeIn 0.4s ease-out ${200 + index * 50}ms both`
                    : "none",
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 ${social.color} hover:border-gray-600/50 transition-all duration-300 hover:scale-110`}
                  style={{
                    animation: mounted
                      ? `fadeIn 0.4s ease-out ${400 + index * 50}ms both`
                      : "none",
                  }}
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Israr Ahmad</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart
              size={14}
              className="text-red-500"
              fill="currentColor"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span>Israr Ahmad</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </footer>
  );
}
