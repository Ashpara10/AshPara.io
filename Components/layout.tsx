import React from "react";
import Navbar, { NavList } from "./Navbar";
import router from "next/router";
import Footer from "./Footer";
import MobileBar from "./MobileBar";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar>
        <NavList>
          <li
            onClick={() => router.push("/")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#6e6e6e1c] dark:hover:text-white hover:transition-all hover:delay-75 rounded-md  "
          >
            Home
          </li>
          <li
            onClick={() => router.push("/blog")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#6e6e6e1c] dark:hover:text-white hover:transition-all hover:delay-75 rounded-md  "
          >
            Blog
          </li>
          <li
            onClick={() => router.push("/snippets")}
            className="py-1 px-3 hover:text-black hover:bg-gray-200 dark:hover:bg-[#6e6e6e1c] dark:hover:text-white hover:transition-all hover:delay-75 rounded-md  "
          >
            Snippets
          </li>
        </NavList>
      </Navbar>

      <main className="mt-[70px] ">{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
