import Icon from "../common/Icon";
import { navLinks } from "../../constants/navLinks";
import { useState } from "react";
import GridBg from "../ui/BackgroundBg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[999] bg-zinc-950 ">
      <GridBg/>
      <div className="container mx-auto p-2">
        {/* Main Header Bar */}
        <div className="flex justify-between items-center h-16 px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 ">
            <Icon
              icon="simple-icons:devbox"
              className="text-2xl text-sky-500"
            />
            <span className="font-bold text-3xl text-sky-500">Yasser</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sky-400  hover:text-sky-500  font-semibold transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              className="md:hidden p-2 rounded-md hover:bg-sky-100 dark:hover:bg-sky-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Icon
                icon={menuOpen ? "mdi:close" : "mdi:menu"}
                className="text-xl"
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="px-4 py-3 rounded-md text-sky-700  hover:bg-sky-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
