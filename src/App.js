import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education"

const App = () => {
  return (
      <>
        <Header />
        <Hero />
        <Skills />
        <Education />
      </>
  );
};

export default App;
