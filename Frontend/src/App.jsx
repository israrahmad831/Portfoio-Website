import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </>
  );
};

export default App;
