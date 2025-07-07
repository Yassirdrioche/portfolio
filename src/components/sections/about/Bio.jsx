import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Bio = () => {
  const bioRef = useRef();

  useEffect(() => {
    gsap.from(bioRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      scrollTrigger: {
        trigger: bioRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div ref={bioRef}>
      <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
      <p className="mb-4">
        I'm a self-taught frontend developer with 3 months of professional
        experience at Storeino and several freelance projects under my belt.
      </p>
      <p className="mb-4">
        Certified in React.js from Udemy, I'm passionate about creating
        beautiful, functional, and user-friendly web applications.
      </p>
      <p className="mb-6">
        When I'm not coding, you can find me learning new technologies,
        contributing to open-source, or working on personal projects to enhance
        my skills.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Bio;
