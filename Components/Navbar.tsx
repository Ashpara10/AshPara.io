import React from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="navbar  ">
      <div className=" flex items-center justify-center">{children}</div>
      <div className=" flex items-center text-xl justify-between gap-x-2 ">
        <button
          className=" font-bold bg-indigo-700 hover:bg-indigo-600 dark:bg-orange-200 text-white dark:text-gray-900 dark:hover:bg-orange-300 p-3 rounded-lg font-mono"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
        <button className=" visible  md:hidden font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3">
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavList: React.FC = (props) => {
  return (
    <ul className=" invisible md:visible text-base w-full text-gray-800 dark:text-gray-200 flex items-center justify-center font-mono gap-x-2">
      {props.children}
    </ul>
  );
};
