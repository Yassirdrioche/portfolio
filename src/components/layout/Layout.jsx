import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "dark bg-zinc-900 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <Header />
      <main className="  mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
