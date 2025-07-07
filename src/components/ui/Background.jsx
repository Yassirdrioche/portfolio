import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Background = () => {
  const bgRef = useRef();

  useEffect(() => {
    const moveBackground = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      gsap.to(bgRef.current, {
        x: x * 30,
        y: y * 30,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveBackground);
    return () => window.removeEventListener("mousemove", moveBackground);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, var(--tw-gradient-stops))",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Background;
