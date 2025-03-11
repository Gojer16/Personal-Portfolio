import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import './App.css'
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-[#e0b0ff] snap-y snap-mandatory overflow-y-scroll h-screen">
      <main>
        <section className="h-screen snap-center" id="home" aria-label="Home Section">
          <Navbar />
          <Hero />
        </section>
        <section className="h-screen snap-center" id="about" aria-label="About Section">
          <About />
        </section>
        <section className="h-screen snap-center" id="projects" aria-label="Projects Section">
          <Projects />
        </section>
        <section className="h-screen snap-center" id="skills" aria-label="Skills Section">
          <Skills />
        </section>
        <section className="h-screen snap-center" id="contact" aria-label="Contact Section">
          <Contact />
        </section>
        <section className="h-screen snap-center" id="footer" aria-label="Footer Section">
          <Footer />
        </section>
      </main>
    </div>
  );
};


export default App
