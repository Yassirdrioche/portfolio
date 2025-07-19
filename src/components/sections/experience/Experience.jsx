import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "./Timeline";
import { experience } from "../../../constants/experience";
import BlurText from "../../ui/BlurText";
import GridBg from "../../ui/BackgroundBg";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineContainerRef = useRef();

  useEffect(() => {
    if (!timelineContainerRef.current) return;

    // Set initial state (visible but off-screen)
    gsap.set(timelineContainerRef.current, {
      opacity: 1,
      y: 50,
    });

    // Animation for the timeline container
    const anim = gsap.to(timelineContainerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: timelineContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false, // Set to true to debug
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-20 relative z-50">
      <GridBg />
      <div className="mx-auto px-4">
        <section className="flex justify-center">
          <BlurText
            text="Work Experience"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl text-center text-white font-semibold mb-10"
          />
        </section>

        {/* Timeline Container */}
        <section
          ref={timelineContainerRef}
          className="max-w-3xl mx-auto opacity-0" // Initial opacity set to 0
        >
          <Timeline experiences={experience} />
        </section>
      </div>
    </section>
  );
};

export default Experience;
