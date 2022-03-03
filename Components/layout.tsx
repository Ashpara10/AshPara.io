import React from "react";
import Navbar from "./Navbar"



const Layout:React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <main className="mt-[70px]">{props.children}</main>
    </div>
  );
};

export default Layout;
