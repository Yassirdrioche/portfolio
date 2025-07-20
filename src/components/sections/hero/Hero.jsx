import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import avatar from "../../../assets/avatar.png";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

import BlurText from "../../ui/BlurText";
import GridBg from "../../ui/BackgroundBg";
import DotGrid from "../../ui/DotGrid";
// Constants for reusable data
const SOCIAL_LINKS = [
  { icon: "mdi:github", name: "GitHub" },
  { icon: "mdi:linkedin", name: "LinkedIn" },
  { icon: "mdi:twitter", name: "Twitter" },
  { icon: "mdi:dribbble", name: "Dribbble" },
];

const TECH_STACK = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
];

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  // Refs organized by related elements
  const refs = {
    hero: useRef(),
    title: useRef(),
    name: useRef(),
    subtitle: useRef(),
    image: useRef(),
    imageContainer: useRef(),
    particles: useRef(),
    social: useRef(),
    socialIcons: useRef(),
    btns: useRef(),
    techStack: useRef(),
    scrollIndicator: useRef(),
  };

  // Memoized particles array to prevent recreation on re-renders
  const particles = useMemo(
    () => Array.from({ length: 12 }, (_, i) => ({ id: i })),
    []
  );

  useEffect(() => {
    // Cleanup function for animations
    let ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: refs.hero.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });

      // Animation sequence
      tl.fromTo(
        refs.title.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          refs.name.current,
          { opacity: 0, backgroundPosition: "0% 50%" },
          {
            opacity: 1,
            backgroundPosition: "100% 50%",
            duration: 2,
            ease: "sine.inOut",
          },
          "-=0.8"
        )
        .fromTo(
          refs.subtitle.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=0.8"
        )
        .fromTo(
          refs.image.current,
          { x: 100, opacity: 0, rotate: 15 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5"
        )
        .fromTo(
          refs.socialIcons.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.8"
        )
        .fromTo(
          refs.btns.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
          },
          "-=0.8"
        )
        .fromTo(
          refs.techStack.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          refs.particles.current.children,
          {
            scale: 0,
            opacity: 0,
            y: 40,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // Floating animation for image
      gsap.to(refs.image.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll indicator animation
      gsap.to(refs.scrollIndicator.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax effect
      gsap.to(refs.imageContainer.current, {
        y: () => -ScrollTrigger.maxScroll(window) * 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: refs.hero.current,
          start: "top-80%",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Particle animation
      gsap.to(refs.particles.current.children, {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    }, refs.hero); // Scope all selectors to the hero ref

    return () => ctx.revert(); // Cleanup all animations
  }, []); // Empty dependency array ensures this runs once

  return (
    <section
      ref={refs.hero}
      id="home"
      className=" min-h-screen py-20  z-50 relative flex items-center justify-center  overflow-hidden"
    >
      <GridBg />

      {/* Particles */}
      <div
        ref={refs.particles}
        className="absolute inset-0 pointer-events-none flex justify-center items-center"
      >
        {particles.map(({ id }) => (
          <div
            key={id}
            className="absolute w-1 h-1 rounded-full bg-sky-600/30 dark:bg-sky-600/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text content */}
        <div className=" lg:text-left max-w-2xl space-y-8">
          <div className="flex md:justify-start justify-center">
            <BlurText
              text="Hello ,"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=" text-4xl lg:text-6xl text-white font-semibold"
            />
            <BlurText
              text=" I'm Yasser"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl lg:text-6xl text-sky-500 font-semibold"
            />
          </div>

          <div ref={refs.subtitle} className="font-medium">
            <h2 className="text-xl md:text-2xl  text-sky-600 flex md:justify-start justify-center items-center">
              Frontend Developer & UI Specialist
            </h2>
          </div>

          {/* Social links */}
          <div
            ref={refs.socialIcons}
            className="flex justify-center lg:justify-start gap-4 font-semibold"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href="#"
                className="social-icon w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-sm  bg-sky-800/10 shadow-lg hover:shadow-sky-300/20 transition-all hover:-translate-y-1 text-sky-500  hover:text-sky-600  border border-white/20  hover:border-sky-300/30"
              >
                <Icon icon={social.icon} className="text-2xl" />
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          {
            <div
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
              ref={refs.btns}
            >
              {/* Primary Glass Button - Futuristic sky */}
              <a></a>{" "}
              <button className="px-4 py-2 bg-gradient-to-br  from-sky-500/30 to-sky-600/40 hover:from-sky-500/40 hover:to-sky-600/50 text-white rounded-2xl font-medium shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden border border-sky-400/30 backdrop-blur-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3 text-lg justify-center">
                  <Icon
                    icon="ph:rocket-launch"
                    className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                  />
                  <span className="relative">
                    Explore Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
              </button>
              {/* Secondary Glass Button - Cyber Neon */}
              <button className="px-4 py-2 bg-gradient-to-br from-gray-900/40 to-gray-800/50 hover:from-gray-800/50 hover:to-gray-700/60 text-gray-100 rounded-2xl font-medium shadow-lg hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden border border-gray-700/50 backdrop-blur-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3 text-lg justify-center">
                  <Icon
                    icon="ph:chats-circle"
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-300"
                  />
                  <span className="relative">
                    Let's Connect
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
                <div className="absolute -bottom-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          }
          {/* Tech stack */}
          <div
            className=" flex flex-wrap justify-center lg:justify-start gap-3"
            ref={refs.techStack}
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1.5 text-xs font-mono rounded-full bg-sky-800/40  text-sky-200 -300 border border-sky-200  flex items-center gap-2"
              >
                <Icon icon={tech.icon} className="text-base" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div
          ref={refs.imageContainer}
          className="relative"
          style={{ willChange: "transform" }}
        >
          <div
            ref={refs.image}
            className="w-64 h-64 md:w-80 md:h-full rounded-2xl border-4 border-sky-700 drop-shadow-md shadow-sky-500/45  shadow-2xl relative z-10"
          >
            <img
              src={avatar}
              alt="Yasser's avatar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={refs.scrollIndicator}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-sky-600  mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-sky-600  rounded-full flex justify-center">
          <div className="w-1 h-2 bg-sky-600  rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
