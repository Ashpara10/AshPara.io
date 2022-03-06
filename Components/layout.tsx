import React from "react";
import Navbar, { NavList } from "./Navbar";
import router from "next/router";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar>
        <NavList>
          <li
            onClick={() => router.push("/")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#121211] dark:hover:text-white transition-opacity rounded-md  "
          >
            Home
          </li>
          <li
            onClick={() => router.push("/")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#121211] dark:hover:text-white transition-opacity rounded-md  "
          >
            Blog
          </li>
          <li
            onClick={() => router.push("/snippets")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#121211] dark:hover:text-white transition-opacity rounded-md  "
          >
            Snippets
          </li>
        </NavList>
      </Navbar>
      <main className="mt-[70px] ">{props.children}</main>
    </div>
  );
};

export default Layout;
