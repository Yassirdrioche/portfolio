import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Icon from "../../common/Icon";
import BlurText from "../../ui/BlurText";

const Bio = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRefs = useRef([]);
  const buttonRefs = useRef([]);
  const iconRefs = useRef([]);

  // Helper functions to add refs
  const addTextRef = (el) => el && textRefs.current.push(el);
  const addButtonRef = (el) => el && buttonRefs.current.push(el);
  const addIconRef = (el) => el && iconRefs.current.push(el);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    // Set initial hidden state
    gsap.set(
      [
        headingRef.current,
        ...textRefs.current,
        ...buttonRefs.current,
        ...iconRefs.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate heading
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate icons with slight delay
    tl.to(
      iconRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Animate text paragraphs
    tl.to(
      textRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate buttons last
    tl.to(
      buttonRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="max-w-3xl mx-auto px-6 md:px-8">
      <div className="rounded-xl p-8 md:p-10 shadow-sm shadow-zinc-800/30 border border-zinc-800 bg-sky-600/60 bg-fixed">
        {/* Heading */}
        <div className="mb-10" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 flex items-center gap-3">
            <span>
              <Icon icon={"hugeicons:user"} />
            </span>
            <BlurText
              text="About me"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=" text-2xl md:text-4xl text-white font-semibold"
            />
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-lg text-zinc-200 leading-relaxed">
            <span
              ref={addIconRef}
              className="inline-flex items-center mr-2 text-primary-500"
            >
              <Icon icon="mdi:code-braces" className="mr-2" />
            </span>
            <span ref={addTextRef}>
              Self-taught frontend developer with professional experience and
              multiple successful freelance projects.
            </span>
          </p>

          <p className="text-lg text-zinc-200 leading-relaxed">
            <span
              ref={addIconRef}
              className="inline-flex items-center mr-2 text-primary-500"
            >
              <Icon icon="mdi:certificate" className="mr-2" />
            </span>
            <span ref={addTextRef}>
              Udemy-certified React.js developer passionate about building
              beautiful, functional web applications with great UX.
            </span>
          </p>

          <p className="text-lg text-zinc-200 leading-relaxed">
            <span
              ref={addIconRef}
              className="inline-flex items-center mr-2 text-primary-500"
            >
              <Icon icon="mdi:lightbulb-on" className="mr-2" />
            </span>
            <span ref={addTextRef}>
              Constantly learning new technologies, contributing to open-source,
              and working on personal projects to level up my skills.
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            ref={addButtonRef}
            href="/resume.pdf"
            download
            className="flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors"
          >
            <Icon icon="mdi:download" className="mr-2" />
            Download Resume
          </a>
          <a
            ref={addButtonRef}
            href="#contact"
            className="flex items-center px-6 py-2 bg-black/30 border text-white rounded-lg font-medium transition-colors"
          >
            <Icon
              icon="streamline-sharp:mail-send-email-message"
              className="mr-2"
            />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bio;
