import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <Hero />
      <section ref={sectionRefs.about}><About /></section>
      <section ref={sectionRefs.skills}><Skills /></section>
      <section ref={sectionRefs.projects}><Projects /></section>
      <section ref={sectionRefs.contact}><Contact /></section>
      <Footer />
    </>
  );
}

export default App;