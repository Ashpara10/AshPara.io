import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full mt-32  flex flex-col items-center justify-center">
      <div className="max-w-2xl px-8 py-6  border-t border-gray-400 dark:border-[#212121] w-full flex flex-col  items-center justify-center">
        <span className="font-mono dark:text-gray-100 py-4 w-full text-center">
          © 2022 Ashwin Parande. All Rights Reserved.
        </span>
        <div className="flex text-xl flex-wrap  gap-4">
          <a
            href="https://www.instagram.com/ashwin_p100/"
            target={"_blank"}
            className=""
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Ashpara10 "
            target={"_blank"}
            className=""
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
