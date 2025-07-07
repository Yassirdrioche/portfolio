import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Get In <span className="text-primary-500">Touch</span>
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-700 p-8 rounded-xl shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
