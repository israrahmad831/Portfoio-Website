import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
