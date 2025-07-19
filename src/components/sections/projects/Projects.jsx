// src/components/sections/Projects/Projects.jsx
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "../../../constants/projects";
import GridBg from "../../ui/BackgroundBg";
import BlurText from "../../ui/BlurText";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  };
  useEffect(() => {
    // Initialize cards
    gsap.set(cardsRef.current, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
    });

    return () => tl.kill();
  }, [filteredProjects]);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-10 z-50 relative text-zinc-100"
    >
      <GridBg />
      <div className="container  mx-auto px-4">
        <BlurText
          text="Projects"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className=" text-3xl md:text-5xl text-white font-semibold flex justify-center mb-10"
        />

        <ProjectFilter
          activeFilter={activeFilter}
          onChange={handleFilterChange}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToCardsRef}
              style={{ opacity: 1, transform: "translateY(0)" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
