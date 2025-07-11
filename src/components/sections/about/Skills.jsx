// src/components/sections/About/Skills.jsx
import { useRef, useEffect } from "react";
import { skills } from "../../../constants/skills";
import Icon from "../../common/Icon";
import { gsap } from "gsap";
import BlurText from "../../ui/BlurText";

const Skills = () => {
  const sectionRef = useRef();
  const categoryRefs = useRef([]);
  const skillItemsRef = useRef([]);

  // Store refs for categories and skill items
  const addToCategoryRefs = (el) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

  const addToSkillItemsRef = (el) => {
    if (el && !skillItemsRef.current.includes(el)) {
      skillItemsRef.current.push(el);
    }
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    // Set initial state
    gsap.set(categoryRefs.current, { opacity: 0, y: 20 });
    gsap.set(skillItemsRef.current, { opacity: 0, y: 10 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate categories with stagger
    tl.to(categoryRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
    });

    // Animate skill items with more pronounced stagger
    tl.to(
      skillItemsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out",
      },
      "-=0.3"
    ); // Overlap slightly with category animation

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <h3
        ref={addToCategoryRefs}
        className="text-2xl font-semibold mb-8 text-zinc-100 font-mono"
      >
        <BlurText
          text="My Skills"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className=" text-2xl md:text-4xl text-white font-semibold"
        />
      </h3>

      {Object.entries(skills).map(([category, skillsList]) => (
        <div key={category} className="mb-8">
          <h4
            ref={addToCategoryRefs}
            className="text-lg font-medium mb-4 capitalize text-zinc-300"
          >
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {skillsList.map((skill) => (
              <div
                key={skill.name}
                ref={addToSkillItemsRef}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-primary-500 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon icon={skill.icon} className="text-xl text-zinc-100" />
                <span className="text-zinc-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
