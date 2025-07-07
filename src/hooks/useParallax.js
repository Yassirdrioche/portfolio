// src/hooks/useParallax.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useParallax = (ref, options = {}) => {
  const { speed = 0.1, trigger } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const parallax = (e) => {
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      gsap.to(element, {
        x: x,
        y: y,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    if (!trigger) {
      window.addEventListener("mousemove", parallax);
    } else {
      gsap.to(element, {
        y: speed * 100,
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
        },
      });
    }

    return () => {
      if (!trigger) window.removeEventListener("mousemove", parallax);
    };
  }, [ref, speed, trigger]);
};
