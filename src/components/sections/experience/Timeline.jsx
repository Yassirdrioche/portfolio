import Icon from "../../common/Icon";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ experiences }) => {
  const timelineRef = useRef();

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll(".timeline-item");

    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700 transform -translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`timeline-item mb-8 relative pl-10 md:pl-0 ${
            index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 transform -translate-x-1/2 -translate-y-1"></div>

          <div
            className={`bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "md:mr-8" : "md:ml-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="mdi:briefcase" className="text-primary-500" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Icon icon="mdi:office-building" />
              <span className="text-zinc-600 dark:text-zinc-300">
                {exp.company}
              </span>
              <span className="text-zinc-400 text-sm">• {exp.period}</span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon
                    icon="mdi:check"
                    className="text-primary-500 mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
