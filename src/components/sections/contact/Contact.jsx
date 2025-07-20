import GridBg from "../../ui/BackgroundBg";
import BlurText from "../../ui/BlurText";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="relative z-50 py-10 ">
      <GridBg />
      <div className="mx-auto px-4">
        <BlurText
          text="Get In Touch"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-5xl flex justify-center text-white font-semibold mb-10"
        />

        <p className="text-center max-w-2xl mx-auto mb-12 text-sky-500">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto bg-sky-800/50  p-8 rounded-xl shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
