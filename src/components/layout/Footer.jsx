import Icon from "../common/Icon";
import Aurora from "../ui/Aurora";
import logo from "../../assets/picture/mylogo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-900/70 to-sky-950/90 backdrop-blur-lg border-t border-sky-800/50 py-16 relative overflow-hidden">
      <Aurora
        colorStops={["#1d7ca1", "#071a27", "#192329"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex  mb-4 ">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="h-auto w-24"
              />
            </div>
            <p className="text-sky-200/80 text-sm mb-6 leading-relaxed">
              Crafting beautiful digital experiences with modern technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Yassirdrioche"
                className="p-2 bg-sky-900/30 hover:bg-sky-800/50 rounded-lg text-sky-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/yasser-dreouech-a44b97326/"
                className="p-2 bg-sky-900/30 hover:bg-sky-800/50 rounded-lg text-sky-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="text-xl" />
              </a>
              <a
                href="mailto:yassirdrioche@gmail.com"
                className="p-2 bg-sky-900/30 hover:bg-sky-800/50 rounded-lg text-sky-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <Icon icon="mdi:email" className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sky-100 font-medium text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home", icon: "mdi:home" },
                {
                  name: "Projects",
                  href: "#projects",
                  icon: "mdi:code-braces",
                },
                { name: "About", href: "#about", icon: "mdi:account" },
                { name: "Contact", href: "#contact", icon: "mdi:email" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sky-300/80 hover:text-sky-100 transition-colors flex items-center gap-2 group"
                  >
                    <Icon icon={link.icon} className="text-sky-400 text-sm" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sky-100 font-medium text-lg mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:email-outline"
                  className="text-sky-300 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:yassirdrioche@gmail.com"
                  className="text-sky-300/80 hover:text-sky-100 transition-colors"
                >
                  yassirdrioche@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="text-sky-300 mt-1 flex-shrink-0"
                />
                <span className="text-sky-300/80">Agadir, Morocco</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:phone-outline"
                  className="text-sky-300 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+212641420859"
                  className="text-sky-300/80 hover:text-sky-100 transition-colors"
                >
                  +212 6 41 42 08 59
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sky-300/70 hover:text-sky-100 transition-colors duration-300">
            © {currentYear} Yasser. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sky-300/70 hover:text-sky-100 transition-colors text-sm flex items-center gap-1"
            >
              Contact Me
              <Icon icon="mdi:arrow-top-right" className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
