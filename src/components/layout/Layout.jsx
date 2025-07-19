import Header from "./Header";
import Footer from "./Footer";
import DotGrid from "../ui/DotGrid";
import GridBg from "../ui/BackgroundBg";

const Layout = ({ children }) => {
  return (
    <div className={` bg-zinc-950 bg-fixed`}>
      <GridBg />
      <Header />

      <main className="mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
