// src/components/sections/About/About.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bio from "./Bio";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Set initial styles
    gsap.set([titleRef.current, ...contentRef.current.children], {
      opacity: 1,
      y: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
    }).from(
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
    <section ref={sectionRef} id="about" className="py-20 bg-zinc-950">
      <div className="  mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl font-bold text-center mb-16"
          style={{ opacity: 1, transform: "translateY(0)" }}
        >
          About Me
        </h2>

        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
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
