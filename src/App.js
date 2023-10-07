import React from "react";
import "./index.css";
import Header from "./components/Header";
// import Home from "./components/Home";
import Icons from "./components/Icons";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Footer />
      </>
  );
};

export default App;
