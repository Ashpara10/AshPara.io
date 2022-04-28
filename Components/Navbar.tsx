import React, { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import router from "next/router";
import useDelayedRender from "use-delayed-render";
import Context from "./lib/context";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const { query } = useContext(Context);
  const { rendered } = useDelayedRender(nav);

  return (
    <nav className="navbar bg-orange-50 dark:bg-dark ">
      <div className=" flex items-center justify-start">{children}</div>
      <div className=" flex items-center text-xl justify-between gap-x-2 ">
        <button
          className=" font-bold bg-indigo-700 hover:bg-indigo-600 dark:bg-orange-200 text-white dark:text-black dark:hover:bg-orange-300 p-2 rounded-md  font-mono"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
        <button
          onClick={() => setNav(!nav)}
          className=" visible md:hidden font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3"
        >
          <AiOutlineMenu />
        </button>
        {nav && (
          <div
            onClick={() => setNav(false)}
            className="w-full z-auto h-full fixed top-0 left-0 bottom-0 right-0 bg-black/50"
          />
        )}

        <div
          className={`z-20 font-normal text-base w-64 translate-x-[-100%] overflow-hidden flex flex-col fixed top-0 left-0 bottom-0 bg-orange-50  dark:bg-dark ${
            rendered
              ? "translate-x-0 transition-all"
              : " translate-x-[-100%] transition-all"
          } h-screen`}
        >
          <ul className="w-full py-3  px-5 flex flex-col items-center justify-center gap-y-2">
            <li
              onClick={() => router.push("/")}
              className="w-full hover:transition-all hover:bg-gray-200 text-left py-1 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/")}
              className="w-full hover:transition-all hover:bg-gray-200 text-left py-1 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              About
            </li>
            <li
              onClick={() => router.push("/blog")}
              className="w-full hover:transition-all hover:bg-gray-200 text-left py-1 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Blog
            </li>
            <li
              onClick={() => router.push("/snippets")}
              className="w-full hover:transition-all hover:bg-gray-200 text-left py-1 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Snippets
            </li>
            <li
              onClick={() => router.push("/tweets")}
              className="w-full hover:transition-all hover:bg-gray-200 text-left py-1 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Tweets
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavList: React.FC = (props) => {
  return (
    <ul className=" invisible md:visible w-full text-gray-800 dark:text-gray-200 flex items-center justify-center  gap-x-5">
      {props.children}
    </ul>
  );
};
