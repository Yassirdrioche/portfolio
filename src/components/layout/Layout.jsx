import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={` bg-zinc-950 bg-fixed`}>
      <Header />
      <main className="mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
