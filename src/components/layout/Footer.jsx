import Icon from "../common/Icon";
import Aurora from "../ui/Aurora";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-900/70 to-sky-950/90 backdrop-blur-lg border-t border-sky-800/50 py-12 relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo/Brand section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-4 group">
              <Icon
                icon="mdi:code-braces"
                className="text-3xl text-sky-300 group-hover:text-sky-100 transition-all duration-500 group-hover:rotate-12"
              />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-400 group-hover:from-sky-100 group-hover:to-sky-300 transition-all duration-500">
                Yasser
              </span>
            </div>
            <p className="text-sky-200/80 text-sm max-w-md text-center lg:text-left leading-relaxed">
              Crafting beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <h3 className="text-sky-100 font-medium text-sm uppercase tracking-wider">
              Connect With Me
            </h3>
            <div className="flex gap-5">
              {[
                { icon: "mdi:github", label: "GitHub", url: "#" },
                { icon: "mdi:linkedin", label: "LinkedIn", url: "#" },
                { icon: "mdi:twitter", label: "Twitter", url: "#" },
                { icon: "mdi:email", label: "Email", url: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="text-sky-100 hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="relative">
                    <Icon
                      icon={social.icon}
                      className="text-2xl group-hover:scale-110 transition-transform"
                    />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-sky-300/70 hover:text-sky-100 transition-colors duration-300">
            © {currentYear} Yasser. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="text-sky-300/70 hover:text-sky-100 transition-colors duration-300 hover:underline underline-offset-4 flex items-center gap-1"
            >
              Contact
              <Icon
                icon="mdi:arrow-top-right"
                className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
