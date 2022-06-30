import React, { useState } from "react";
import { useTheme } from "next-themes";
import router from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import useDelayedRender from "use-delayed-render";
import NavList from "./NavList";
import NavItem from "./NavItem";
import NavIcon from "./Icons/NavIcon";
import MenuIcon from "./Icons/MenuIcon";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const { rendered } = useDelayedRender(nav);

  const Router = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <nav className="navbar bg-gray-50 dark:bg-dark ">
      <div className="w-full  hidden md:flex items-center text-xl justify-between gap-x-2 ">
        <NavIcon />
        <NavList>
          <NavItem children="Home" onClick={() => Router("/")} />
          <NavItem children="About" onClick={() => Router("/blog")} />
          <NavItem children="Blog" onClick={() => Router("/blog")} />
        </NavList>
      </div>
      <button
        className="nav-theme-btn  hidden md:flex "
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <BiMoon /> : <BiSun />}
      </button>
      <div className="w-full flex md:hidden items-center justify-between ">
        <button
          onClick={() => setNav(true)}
          className=" font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3"
        >
          <MenuIcon />
        </button>
        <button
          className="nav-theme-btn  "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="w-full z-auto h-full fixed top-0 left-0 bottom-0 right-0 bg-black/50"
        />
      )}

      <div
        className={`px-5 py-2 z-20 font-normal text-base w-64 translate-x-[-100%] overflow-hidden flex flex-col fixed top-0 left-0 bottom-0 bg-white/90 backdrop-blur-sm  dark:bg-dark/90 ${
          rendered
            ? "translate-x-0 transition-all"
            : " translate-x-[-100%] transition-all"
        } h-screen`}
      >
        <ul className="w-full py-3 flex flex-col items-center justify-center gap-y-2">
          <div className="w-full px-2 flex items-center justify-start">
            <NavIcon />
          </div>
          <li
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-r-2 justify-start hover:transition-all hover:bg-violet-200 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Home
          </li>
          <li
            onClick={() => router.push("/")}
            className="w-full hover:transition-all hover:bg-violet-200 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            About
          </li>
          <li
            onClick={() => router.push("/blog")}
            className="w-full hover:transition-all hover:bg-violet-200 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Blog
          </li>
          <li
            onClick={() => router.push("/snippets")}
            className="w-full hover:transition-all hover:bg-violet-200 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Snippets
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
