import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <main className=" px-6 md:px-4  ">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
