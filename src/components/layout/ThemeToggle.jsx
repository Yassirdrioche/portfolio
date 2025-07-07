import Icon from "../common/Icon"; // Changed from Iconify to Icon
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon icon="mdi:weather-sunny" className="text-xl" />
      ) : (
        <Icon icon="mdi:weather-night" className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
