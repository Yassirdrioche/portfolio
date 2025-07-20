import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const ContactForm = () => {
  const form = useRef();
  const formContainerRef = useRef();
  const successRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // GSAP Animations
  useEffect(() => {
    if (!formContainerRef.current) return;

    // Set initial state (visible)
    gsap.set(formContainerRef.current, { opacity: 1, y: 0 });
    gsap.set(".form-item", { opacity: 1, y: 0 });

    // Animate form elements sequentially
    const tl = gsap.timeline();
    tl.from(formContainerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".form-item",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.2)",
      },
      "+=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Success message animation
  useEffect(() => {
    if (isSent && successRef.current) {
      gsap.from(successRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, [isSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_iujpxrm",
        "template_csgsyrh",
        form.current,
        "DTNv7Xu6MlKDO2mQ7"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetForm = () => {
    gsap.to(successRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setIsSent(false);
        // Ensure form is visible when returning
        gsap.set(formContainerRef.current, { opacity: 1 });
      },
    });
  };

  return (
    <div
      ref={formContainerRef}
      className="max-w-lg mx-auto p-8 rounded-2xl    shadow-xl border border-sky-100 backdrop-blur-sm relative overflow-hidden"
      style={{ opacity: 0 }} // Initial state for GSAP
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-sky-800/30 -z-10 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-sky-800/20 -z-10 blur-xl"></div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sky-500 mb-2">Let's Connect</h2>
        <p className="text-sky-400">
          Send me a message and I'll respond as soon as possible
        </p>
      </div>

      {isSent ? (
        <div ref={successRef} className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/40 rounded-full mb-6">
            <Icon icon="mdi:check-circle" className="text-4xl text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold text-green-600 mb-2">
            Message Sent!
          </h3>
          <p className="text-sky-400">I'll get back to you soon. Thank you!</p>
          <button
            onClick={resetForm}
            className="mt-6 px-6 py-2 bg-sky-600 text-sky-200 rounded-full shadow-md hover:bg-sky-400 transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="form-item">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-sky-400 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all bg-sky-700/80"
              placeholder="John Doe"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-sky-400 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all bg-sky-700/80"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-item">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-sky-400 mb-1"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all bg-sky-700/80"
              placeholder="Hello, I wanted to talk about..."
            ></textarea>
          </div>

          <div className="form-item">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-sky-500 to-sky-600 text-sky-700 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Icon
                    icon="svg-spinners:180-ring"
                    className="text-lg text-sky-400"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="mdi:send" className="text-lg text-sky-200" />
                  <span className="text-lg text-sky-200"> Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
