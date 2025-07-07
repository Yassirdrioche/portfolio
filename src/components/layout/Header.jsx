import Icon from "../common/Icon";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../constants/navLinks";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50  backdrop-blur-sm shadow-sm">
      <div className="  mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Icon icon="mdi:code-braces" className="text-2xl text-primary-500" />
          <span className="font-bold text-xl">YourName</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-primary-500 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="md:hidden">
            <Icon icon="mdi:menu" className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
