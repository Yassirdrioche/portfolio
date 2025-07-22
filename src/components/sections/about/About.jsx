// src/components/sections/About/About.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bio from "./Bio";
import Skills from "./Skills";
import GridBg from "../../ui/BackgroundBg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  // const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Set initial styles
    gsap.set([...contentRef.current.children], {
      opacity: 1,
      y: 0,
    });

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(
        contentRef.current.children,
        {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.3"
      );

    return () => tl.kill();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-20  z-50">
      <GridBg />
      <div className="mx-auto px-4 ">
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12">
          <div style={{ opacity: 1, transform: "translateY(0)" }}>
            <Bio />
          </div>
          <div style={{ opacity: 1, transform: "translateY(0)" }}>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
