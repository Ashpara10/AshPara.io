import { useTheme } from "next-themes";
import React from "react";
import { FaBars } from "react-icons/fa";

const MobileBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full px-4 py-2 font-inter text-gray-800 dark:text-gray-100 flex dark:bg-dark bg-white flex-col  fixed top-0 z-50 visible md:hidden  ">
      <button className="">
        <FaBars />{" "}
      </button>
    </header>
  );
};

export default MobileBar;
