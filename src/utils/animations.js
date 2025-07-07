import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (element, options = {}) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      ...options,
    },
  });
};

export const staggerAnimation = (elements, options = {}) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements[0],
      start: "top 80%",
      ...options,
    },
  });
};
