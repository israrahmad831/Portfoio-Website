import React, { useRef, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5"; // icon for close button

const App = () => {
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Resume: useRef(null),
    Contact: useRef(null),
  };

  const scrollToResume = () => {
    const resumeRef = sectionRefs.Resume;
    if (resumeRef?.current) {
      const offset = -80;
      const top =
        resumeRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    toast(
      ({ closeToast }) => (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0.2rem",
            borderRadius: "16px",
            maxWidth: "400px",
            fontFamily: "inherit",
          }}
        >
          <button
            onClick={closeToast}
            style={{
              position: "absolute",
              background: "transparent",
              border: "none",
              right: "1px",
              color: "#aaa",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "#aaa")}
          >
            <IoClose />
          </button>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#3b82f6",
            }}
          >
            📄 Wanna See My Resume?
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
            Explore my experience and education in a sleek document.
          </p>
          <button
            onClick={() => {
              scrollToResume();
              closeToast();
            }}
            style={{
              marginTop: "1rem",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.9rem",
              boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2563eb")}
            onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
          >
            View Resume
          </button>
        </div>
      ),
      {
        position: "top-right",
        autoClose: 6000,
        closeButton: false,
        hideProgressBar: true,
        transition: Slide,
      }
    );
  }, []);

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={sectionRefs.Home}>
        <Home />
      </div>
      <div ref={sectionRefs.About}>
        <About />
      </div>
      <div ref={sectionRefs.Experience}>
        <Experience />
      </div>
      <div ref={sectionRefs.Projects}>
        <Projects />
      </div>
      <div ref={sectionRefs.Resume}>
        <Resume />
      </div>
      <ToastContainer style={{ marginTop: "4.5rem" }} />
    </>
  );
};

export default App;
