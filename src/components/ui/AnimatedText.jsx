import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ text, className }) => {
  const textRef = useRef();

  useEffect(() => {
    const chars = textRef.current.textContent.split("");
    textRef.current.textContent = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";
      textRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.05,
        ease: "power3.out",
      });
    });
  }, [text]);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedText;
