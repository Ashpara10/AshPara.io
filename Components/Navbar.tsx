import React from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="navbar  dark:bg-dark ">
      <div className=" flex items-center justify-start">{children}</div>
      <div className=" flex items-center text-xl justify-between gap-x-2 ">
        <button
          className=" font-bold bg-indigo-700 hover:bg-indigo-600 dark:bg-orange-200 text-white dark:text-black dark:hover:bg-orange-300 p-2.5 md:p-3 rounded-md md:rounded-lg font-mono"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
        <button className=" group visible md:hidden font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3">
          <AiOutlineMenu />
          <div className="w-full -z-10 invisible group-focus:visible h-screen absolute top-0 left-0 bottom-0 right-0 bg-black/50" />
          <div className="group text-base font-normal translate-x-[-100%] group-focus-within:translate-x-[0%] flex flex-col fixed top-0 left-0 bottom-0 bg-white transition-transform dark:bg-dark w-72 h-screen">
            Hello
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavList: React.FC = (props) => {
  return (
    <ul className="font-inter invisible md:visible  w-full text-gray-800 dark:text-gray-200 flex items-center justify-center  gap-x-2">
      {props.children}
    </ul>
  );
};
