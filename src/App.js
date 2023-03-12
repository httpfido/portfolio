import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands/>
      <About/>
      <Skills/>
      <div style={{ height: "2000px", border: "3px solid blue" }}></div>
    </div>
  );
};

export default App;
