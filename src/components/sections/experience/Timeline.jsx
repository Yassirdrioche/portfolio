import Icon from "../../common/Icon";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ experiences }) => {
  const timelineRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);
  const dotRefs = useRef([]);

  // Initialize ref arrays
  useEffect(() => {
    itemRefs.current = [];
    dotRefs.current = [];
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;

    // Store all animations for cleanup
    const animations = [];

    // Timeline line animation
    if (lineRef.current) {
      const lineAnim = gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power3.out",
        immediateRender: false,
      });
      animations.push(lineAnim);
    }

    // Item animations
    itemRefs.current.forEach((itemRef, index) => {
      if (!itemRef) return;

      const direction = index % 2 === 0 ? 50 : -50;

      const itemAnim = gsap.from(itemRef, {
        opacity: 1, // Start visible
        x: direction,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: true,
      });

      animations.push(itemAnim);

      // Create scroll trigger for each item
      ScrollTrigger.create({
        trigger: itemRef,
        start: "top 80%",
        animation: itemAnim,
        toggleActions: "play none none none",
      });
    });

    // Dot animations
    dotRefs.current.forEach((dotRef, index) => {
      if (!dotRef || !itemRefs.current[index]) return;

      const dotAnim = gsap.from(dotRef, {
        scale: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        immediateRender: true,
      });

      animations.push(dotAnim);

      ScrollTrigger.create({
        trigger: itemRefs.current[index],
        start: "top 80%",
        animation: dotAnim,
      });
    });

    // Create scroll trigger for timeline line
    if (lineRef.current) {
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: "top center",
        toggleActions: "play none none none",
      });
    }

    // Cleanup function
    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [experiences]);

  return (
    <div ref={timelineRef} className="relative py-8">
      {/* Timeline line */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-700 to-sky-500 transform h-full -translate-x-1/2 rounded-full"
      />
      <div className="absolute text-white bottom-0 translate-y-6 left-1/2 -translate-x-1/2">
        <Icon
          icon={"iconamoon:arrow-down-2-bold"}
          className="text-4xl text-sky-400 animate-bounce"
        />
      </div>
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`mb-12 relative`}
        >
          {/* Timeline dot */}
          <div
            ref={(el) => (dotRefs.current[index] = el)}
            className="absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 transform -translate-x-1/2 -translate-y-1 shadow-md shadow-sky-200/50 z-10"
          />

          <div
            className={`relative bg-gradient-to-br from-sky-700/50 to-sky-500/50 p-6 rounded-xl shadow-lg border border-sky-100 backdrop-blur-sm  transition-all duration-300 hover:shadow-xl hover:scale-[1.01]`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="mdi:briefcase" className="text-sky-500 text-xl" />
              <h3 className="text-xl font-semibold text-sky-400">{exp.role}</h3>
            </div>

            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Icon icon="mdi:office-building" className="text-sky-500" />
              <span className="text-sky-500">{exp.company}</span>
              <span className="text-sky-500 text-sm">• {exp.period}</span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon
                    icon="mdi:check"
                    className="text-sky-500 mt-1 flex-shrink-0"
                  />
                  <span className="text-sky-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-sky-200/20 -mr-4 -mt-4" />
            <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-sky-300/20 -ml-2 -mb-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
