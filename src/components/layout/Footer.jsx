import Icon from "../common/Icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-700/50 backdrop-blur-sm border-t border-sky-600/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Brand section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-3">
              <Icon icon="mdi:code-braces" className="text-3xl text-sky-300" />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-400">
                Yasser
              </span>
            </div>
            <p className="text-sky-200/80 text-sm max-w-md text-center md:text-left">
              Crafting beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-5">
              <a
                href="#"
                className="text-sky-100 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-sky-100 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-sky-100 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-sky-300/70">
            © {currentYear} Yasser. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sky-300/70 hover:text-sky-100 transition-colors hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sky-300/70 hover:text-sky-100 transition-colors hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sky-300/70 hover:text-sky-100 transition-colors hover:underline underline-offset-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
