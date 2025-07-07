import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from "../../../assets/avatar.png";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();
  const particlesRef = useRef();
  const socialRef = useRef();
  const scrollIndicatorRef = useRef();

  useEffect(() => {
    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, imageRef.current], {
      opacity: 0,
    });

    // Master timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    // Complex animation sequence
    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
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
      .from(
        ".social-icon",
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        particlesRef.current.children,
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
    gsap.to(imageRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Particle animation
    gsap.to(particlesRef.current.children, {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 overflow-hidden"
    >
      {/* Dynamic grid background with dark/light mode */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-50 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none flex justify-center items-center"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-400/30 dark:bg-primary-500/30"
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
        <div className="text-center lg:text-left max-w-2xl">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-4 text-zinc-800 dark:text-white"
          >
            Hello, I'm{" "}
            <span className="text-electric-blue-400 bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-blue-600">
              Yasser
            </span>
          </h1>

          <div ref={subtitleRef} className="mb-8">
            <h2 className="text-2xl md:text-3xl mb-6 text-electric-blue-500 dark:text-electric-blue-400 font-mono">
              <span className="animate-pulse">_</span> Frontend Developer & UI
              Specialist
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Crafting{" "}
              <span className="text-electric-blue-500 dark:text-electric-blue-400 font-medium relative">
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-blue-500 dark:bg-electric-blue-400 animate-underline"></span>
                cutting-edge
              </span>{" "}
              digital experiences with modern tech stack
            </p>
          </div>

          {/* Social links - Modern Glassmorphism */}
          <div
            ref={socialRef}
            className="flex justify-center lg:justify-start gap-4 mb-8"
          >
            {["github", "linkedin", "twitter", "dribbble"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="social-icon w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/80 dark:bg-zinc-800/80 shadow-lg hover:shadow-electric-blue/20 transition-all hover:-translate-y-1 text-zinc-700 dark:text-zinc-300 hover:text-electric-blue-500 dark:hover:text-electric-blue-400 border border-white/20 dark:border-zinc-700/50 hover:border-electric-blue-300/30"
              >
                <span className="text-2xl">{icon.charAt(0).toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* CTA buttons - Futuristic Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3.5 bg-gradient-to-r from-electric-blue-500 to-electric-blue-600 hover:from-electric-blue-600 hover:to-electric-blue-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-electric-blue-400 to-electric-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="px-8 py-3.5 bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 text-zinc-800 dark:text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-zinc-200 dark:border-zinc-700 hover:border-electric-blue-300/50 relative overflow-hidden">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-electric-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {["React", "Next.js", "Tailwind", "GSAP", "Framer"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="relative">
          <div
            ref={imageRef}
            className="w-64 h-64 md:w-80 md:h-full rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative z-10"
          >
            {/* Replace with your actual image */}
            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl">
              <img src={avatar} alt="" />
            </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-primary-400/20 dark:bg-primary-500/20 rounded-3xl blur-xl -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-zinc-400 dark:border-zinc-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
