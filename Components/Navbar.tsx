import React, { useState } from "react";
import { useTheme } from "next-themes";
import router from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import useDelayedRender from "use-delayed-render";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const { rendered } = useDelayedRender(nav);

  return (
    <nav className="navbar bg-white dark:bg-dark ">
      <div className="w-full flex items-center text-xl justify-between gap-x-2 ">
        <NavIcon />
        <ul className="w-full px-3 invisible md:visible flex text-base gap-x-3">
          <li onClick={() => router.push("/")} className="px-2">
            Home
          </li>
          <li onClick={() => router.push("/about")} className="px-2">
            About
          </li>
          <li onClick={() => router.push("/blog")} className="px-2">
            Blog
          </li>
        </ul>
        <button
          className="nav-theme-btn  invisible md:visible "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
        <button
          onClick={() => setNav(!nav)}
          className=" visible md:hidden font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3"
        >
          <HiMenuAlt4 />
        </button>
        {nav && (
          <div
            onClick={() => setNav(false)}
            className="w-full z-auto h-full fixed top-0 left-0 bottom-0 right-0 bg-black/50"
          />
        )}

        <div
          className={`px-5 py-2 z-20 font-normal text-base w-64 translate-x-[-100%] overflow-hidden flex flex-col fixed top-0 left-0 bottom-0 bg-white  dark:bg-dark ${
            rendered
              ? "translate-x-0 transition-all"
              : " translate-x-[-100%] transition-all"
          } h-screen`}
        >
          <div className="w-full px-2 flex items-center justify-start">
            <NavIcon />
          </div>
          <ul className="w-full py-3 flex flex-col items-center justify-center gap-y-2">
            <li
              onClick={() => router.push("/")}
              className="w-full flex items-center gap-r-2 justify-start hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/")}
              className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              About
            </li>
            <li
              onClick={() => router.push("/blog")}
              className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Blog
            </li>
            <li
              onClick={() => router.push("/snippets")}
              className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Snippets
            </li>
            <li
              onClick={() => router.push("/snippets")}
              className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              <button
                className="nav-theme-btn  visible md:invisible "
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <BiMoon /> : <BiSun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavIcon = () => {
  return (
    <svg
      onClick={() => router.push("/")}
      className="flex-shrink-0 block"
      width="36"
      height="36"
      viewBox="0 0 44 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 22C1.03435e-06 9.84973 9.84974 -1.03435e-06 22 0C30.9336 7.80998e-07 38.6235 5.3248 42.069 12.9737L12.9737 42.069C11.7252 41.5066 10.5385 40.8311 9.42689 40.0555L27.4824 22H22L6.44366 37.5563C2.46244 33.5751 -5.31105e-07 28.0751 0 22Z"></path>
      <path d="M44 22.0076L22.0076 44C34.1518 43.9959 43.9959 34.1518 44 22.0076Z"></path>
    </svg>
  );
};
