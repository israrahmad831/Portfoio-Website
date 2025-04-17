import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
// import Resume and Contact if you have them

const App = () => {
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Resume: useRef(null),
    Contact: useRef(null),
  };

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
    </>
  );
};

export default App;
