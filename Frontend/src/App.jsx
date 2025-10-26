import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
