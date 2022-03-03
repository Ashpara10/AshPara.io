import React from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import router from "next/router";

const Navbar:React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="max-w-lg flex items-center justify-center">
        <ul className="w-full flex items-center justify-center font-mono gap-x-1">
          <li
            className="px-2 py-1 rounded-lg dark:hover:bg-[#1a1a1a] dark:hover:text-gray-100 hover:bg-blue-100 hover:text-blue-800 hover:transition-all "
            onClick={() => router.push("/")}
          >
            Blog
          </li>
          <li
            className="px-2 py-1 rounded-lg dark:hover:bg-[#1a1a1a] dark:hover:text-gray-100 hover:bg-blue-100 hover:text-blue-800 hover:transition-all "
            onClick={() => router.push("/snippets")}
          >
            Snippets
          </li>
        </ul>
      </div>
      <div className=" flex items-center justify-center ">
        <button
          className=" text-xl bg-indigo-700 hover:bg-indigo-600 dark:bg-orange-200 text-white dark:text-gray-900 dark:hover:bg-orange-300 p-3 rounded-lg font-mono"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
