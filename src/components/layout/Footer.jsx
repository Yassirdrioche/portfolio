import Icon from "../common/Icon";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800 py-8">
      <div className="  mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Icon
              icon="mdi:code-braces"
              className="text-2xl text-primary-500"
            />
            <span className="font-bold">YourName</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Icon icon="mdi:github" className="text-2xl" />
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Icon icon="mdi:linkedin" className="text-2xl" />
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Icon icon="mdi:twitter" className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
