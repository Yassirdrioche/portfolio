import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import GridBg from "../../ui/BackgroundBg";
import BlurText from "../../ui/BlurText";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const infoCardRef = useRef(null);
  const formContainerRef = useRef(null);
  const infoItemsRef = useRef([]);
  const socialIconsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the section header
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });

      // Animate the contact info card
      gsap.from(infoCardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });

      // Animate the contact form
      gsap.from(formContainerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      });

      // Animate each contact info item
      infoItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.from(item, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.5 + i * 0.1,
          });
        }
      });

      // Animate social icons
      socialIconsRef.current.forEach((icon, i) => {
        if (icon) {
          gsap.from(icon, {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.7 + i * 0.1,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper function to add refs to arrays
  const addToRefs = (ref, refArray) => {
    if (ref && !refArray.current.includes(ref)) {
      refArray.current.push(ref);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-50 py-20 overflow-hidden"
    >
      <GridBg />
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <BlurText
            text="Get In Touch"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-5xl flex justify-center text-white font-semibold mb-6"
          />
          <p className="text-lg max-w-2xl mx-auto text-sky-300/80">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sticky Contact Information Card */}
          <div className="sticky top-0">
            <div
              ref={infoCardRef}
              className="bg-gradient-to-br from-sky-900/50 to-sky-950/70 backdrop-blur-sm border border-sky-800/30 p-8 rounded-2xl shadow-xl hover:shadow-sky-500/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-sky-100 mb-6 flex items-center gap-2">
                <Icon
                  icon="mdi:contact-outline"
                  className="text-sky-300 text-3xl"
                />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div
                  ref={(el) => addToRefs(el, infoItemsRef)}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-sky-900/50 rounded-lg text-sky-300">
                    <Icon icon="mdi:email-outline" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400/80">Email</p>
                    <a
                      href="mailto:yassirdrioche@gmail.com"
                      className="text-sky-100 hover:text-white transition-colors font-medium"
                    >
                      yassirdrioche@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  ref={(el) => addToRefs(el, infoItemsRef)}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-sky-900/50 rounded-lg text-sky-300">
                    <Icon icon="mdi:map-marker-outline" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400/80">Location</p>
                    <p className="text-sky-100 font-medium">Agadir, Morocco</p>
                  </div>
                </div>

                <div
                  ref={(el) => addToRefs(el, infoItemsRef)}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-sky-900/50 rounded-lg text-sky-300">
                    <Icon icon="mdi:phone-outline" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400/80">Phone</p>
                    <a
                      href="tel:+212641420859"
                      className="text-sky-100 hover:text-white transition-colors font-medium"
                    >
                      +212 6 41 42 08 59
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formContainerRef}
            className="bg-sky-800/50 backdrop-blur-sm border border-sky-800/30 p-8 rounded-2xl shadow-lg"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
