import React from "react";
import "./index.css";
import Header from "./components/Header";
// import Home from "./components/Home";
import Icons from "./components/Icons";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

const App = () => {
  return (
      <>
        <Header />
        {/* <Home /> */}
        <Icons />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </>
  );
};

export default App;
