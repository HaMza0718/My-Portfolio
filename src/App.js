import React from "react";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Icons from "./components/Icons";
// import Skills from "./components/Skills";
// import Education from "./components/Education"

const App = () => {
  return (
      <>
        <Header />
        <Home />
        <Icons />
        {/* <Skills />
        <Education /> */}
      </>
  );
};

export default App;
