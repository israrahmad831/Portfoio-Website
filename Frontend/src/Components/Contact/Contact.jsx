import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Github,
  Facebook,
  MessageCircle,
  Clock,
  Globe,
  Heart,
} from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId = "service_ftbunhs";
    const templateId = "template_5f34w8c";
    const publicKey = "kW_4xhjRy61h3eR9r";

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "israrahmad2004.aa@gmail.com",
      link: "mailto:israrahmad2004.aa@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 326 4114782",
      link: "tel:+923264114782",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Islamabad, PK",
      link: "https://maps.google.com/?q=Islamabad,+PK",
      target: "_blank",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/israrahmad2004",
      color: "hover:bg-blue-500",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/israrahmad831",
      color: "hover:bg-gray-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/xDisrar",
      color: "hover:bg-blue-600",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/+923264114782",
      color: "hover:bg-green-500",
    },
  ];

  const availability = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Globe, text: "Available worldwide" },
    { icon: Heart, text: "Open to new opportunities" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Mail className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div
              className={`space-y-4 transition-all duration-1000 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.title === "Location" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group block"
                    style={{
                      animation: inView
                        ? `slideInLeft 0.6s ease-out ${
                            300 + index * 100
                          }ms both`
                        : "none",
                    }}
                  >
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                      ></div>
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-4 bg-gradient-to-br ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            {info.title}
                          </p>
                          <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-1000 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3"
                      style={{
                        animation: inView
                          ? `fadeIn 0.5s ease-out ${700 + index * 100}ms both`
                          : "none",
                      }}
                    >
                      <div className="flex-shrink-0 p-2 bg-blue-500/20 rounded-lg">
                        <Icon className="text-blue-400" size={18} />
                      </div>
                      <p className="text-gray-300 text-sm">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 ${social.color} hover:text-white hover:border-gray-600/50 transition-all duration-300 hover:scale-110`}
                      style={{
                        animation: inView
                          ? `popIn 0.5s ease-out ${1000 + index * 100}ms both`
                          : "none",
                      }}
                      aria-label={social.name}
                    >
                      <Icon size={22} />
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-700">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {isSuccess && (
                <div
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
                  style={{ animation: "slideDown 0.5s ease-out" }}
                >
                  <CheckCircle2 className="text-green-400" size={24} />
                  <div>
                    <p className="text-green-400 font-semibold">
                      Message sent successfully!
                    </p>
                    <p className="text-green-400/80 text-sm">
                      I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Contact Subject"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          80% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
