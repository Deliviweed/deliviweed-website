import React from "react";
import "./App.css";
import Header from "./components/nav/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Roadmap />
    </>
  );
}

export default App;
