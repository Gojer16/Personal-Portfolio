import React, { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import './App.css'
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`bg-[#1a1a1a] text-[#e0b0ff] ${isLargeScreen ? 'snap-y snap-mandatory' : ''} overflow-y-scroll h-screen`}>
      <main>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="home" aria-label="Home Section">
          <Navbar />
          <Hero />
        </section>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="about" aria-label="About Section">
          <About />
        </section>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="projects" aria-label="Projects Section">
          <Projects />
        </section>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="skills" aria-label="Skills Section">
          <Skills />
        </section>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="contact" aria-label="Contact Section">
          <Contact />
        </section>
        <section className={`${isLargeScreen ? 'h-screen snap-center' : 'min-h-screen py-4'}`} id="footer" aria-label="Footer Section">
          <Footer />
        </section>
      </main>
    </div>
  );
};


export default App
