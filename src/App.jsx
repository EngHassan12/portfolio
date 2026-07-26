import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    services: servicesRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-slate-900 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar sectionRefs={sectionRefs} theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <section ref={aboutRef}><About /></section>
      <section ref={servicesRef}><Services /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={experienceRef}><Experience /></section>
      <Testimonials />
      <section ref={contactRef}><Contact /></section>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;