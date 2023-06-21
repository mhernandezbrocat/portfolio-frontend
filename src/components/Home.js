import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
