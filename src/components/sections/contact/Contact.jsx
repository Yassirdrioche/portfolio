import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import GridBg from "../../ui/BackgroundBg";
import BlurText from "../../ui/BlurText";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the section header
      gsap.from(".contact-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
      });

      // Animate the contact info card (sooner and faster)
      gsap.from(".contact-info-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
        onComplete: () => {
          // Force visible after animation
          gsap.set(".contact-info-card", { opacity: 1 });
        }
      });

      // Animate the contact form
      gsap.from(".contact-form-container", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6
      });

      // Animate each contact info item with less delay
      gsap.from(".contact-info-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5  // Start sooner
      });

      // Animate social icons with less delay
      gsap.from(".social-icon", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.7  // Start sooner
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative z-50 py-20 overflow-hidden">
      <GridBg />
      <div className="max-w-7xl mx-auto px-4">
        <div className="contact-header text-center mb-16">
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
              className="contact-info-card bg-gradient-to-br from-sky-900/50 to-sky-950/70 backdrop-blur-sm border border-sky-800/30 p-8 rounded-2xl shadow-xl hover:shadow-sky-500/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-sky-100 mb-6 flex items-center gap-2">
                <Icon
                  icon="mdi:contact-outline"
                  className="text-sky-300 text-3xl"
                />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="contact-info-item flex items-start gap-4">
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

                <div className="contact-info-item flex items-start gap-4">
                  <div className="p-3 bg-sky-900/50 rounded-lg text-sky-300">
                    <Icon icon="mdi:map-marker-outline" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400/80">Location</p>
                    <p className="text-sky-100 font-medium">Agadir, Morocco</p>
                  </div>
                </div>

                <div className="contact-info-item flex items-start gap-4">
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

                <div className="contact-info-item pt-4 mt-6 border-t border-sky-800/50">
                  <p className="text-sky-300/80 text-sm mb-4">
                    Connect with me:
                  </p>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: "mdi:github",
                        name: "GitHub",
                        href: "https://github.com/Yassirdrioche",
                      },
                      {
                        icon: "mdi:linkedin",
                        name: "LinkedIn",
                        href: "https://www.linkedin.com/in/yasser-dreouech-a44b97326/",
                      },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="social-icon p-3 bg-sky-900/30 hover:bg-sky-800/50 rounded-full text-sky-300 hover:text-white transition-all"
                        aria-label={social.name}
                      >
                        <Icon icon={social.icon} className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="contact-form-container bg-sky-800/50 backdrop-blur-sm border border-sky-800/30 p-8 rounded-2xl shadow-lg"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;