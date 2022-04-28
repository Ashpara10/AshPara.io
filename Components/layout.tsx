import React from "react";
import Navbar, { NavList } from "./Navbar";
import router from "next/router";
import Footer from "./Footer";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar>
        <NavList>
          <li
            className="px-2 font-normal hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className="px-2 font-normal hover:underline"
            onClick={() => router.push("/blog")}
          >
            Blog
          </li>
          <li
            className="px-2 font-normal hover:underline"
            onClick={() => router.push("/snippets")}
          >
            Snippets
          </li>
        </NavList>
      </Navbar>

      <main className="mt-[70px] ">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
