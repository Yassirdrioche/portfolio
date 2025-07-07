import Hero from "../components/sections/hero/Hero";
import About from "../components/sections/about/About";
import Projects from "../components/sections/projects/Projects";
import Experience from "../components/sections/experience/Experience";
import Contact from "../components/sections/contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
