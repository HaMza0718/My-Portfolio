import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Icons from "./components/Icons";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EnterpriseProjects from "./components/EnterpriseProjects";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSmoothScroll from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main>
        <Home />
        <Icons />
        <About />
        <Experience />
        <Skills />
        <EnterpriseProjects />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
