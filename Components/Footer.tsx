import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import router from "next/router";

const Footer = () => {
  return (
    <footer className=" w-full  mt-32  flex flex-col items-center justify-center">
      <div className="max-w-2xl px-8 py-6 border-t border-gray-300 dark:border-bdark   w-full flex flex-col  items-center justify-center">
        <span className=" dark:text-gray-100 py-4 w-full text-center">
          © 2022 Ashwin Parande. All Rights Reserved.
        </span>
        <div className=" w-full flex items-center justify-center ">
          <div
            className="flex flex-col items-center justify-center pt-4 gap-3
          "
          >
            <a
              href="https://www.instagram.com/ashwin_p100/"
              target={"_blank"}
              className=" flex items-center justify-start w-full hover:text-violet-800 dark:hover:text-violet-600 hover:underline gap-2"
            >
              <FaInstagram className="text-xl " /> Instagram
            </a>
            <a
              href="https://github.com/Ashpara10 "
              className=" flex items-center justify-start w-full hover:text-violet-800 dark:hover:text-violet-600 hover:underline gap-2"
              target={"_blank"}
            >
              <FaGithub className="text-xl " /> Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="max-w-2xl px-8 py-6  border-t border-gray-400 dark:border-[#212121] w-full flex flex-col  items-center justify-center">
//   <span className="font-mono dark:text-gray-100 py-4 w-full text-center">
//     © 2022 Ashwin Parande. All Rights Reserved.
//   </span>
//   <div className="flex text-xl flex-wrap  gap-4">
//     <a
//       href="https://www.instagram.com/ashwin_p100/"
//       target={"_blank"}
//       className=""
//     >
//       <FaInstagram />
//     </a>
//     <a
//       href="https://github.com/Ashpara10 "
//       target={"_blank"}
//       className=""
//     >
//       <FaGithub />
//     </a>
//   </div>
// </div>
