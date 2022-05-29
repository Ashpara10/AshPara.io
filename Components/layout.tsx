import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = (props) => {
  const LH = "http://localhost:3000/blog";
  const PURL = "https://ashpara.vercel.app/blog";
  return (
    <div>
      <Navbar />
      <main className={`px-6 md:px-4  `}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
