import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full mt-32  flex flex-col items-center justify-center">
      <div className="max-w-2xl px-8 py-6  border-t border-gray-400 dark:border-[#212121] w-full flex items-center justify-between">
        <ul className="text-gray-800 dark:text-gray-300  flex flex-col items-center justify-start gap-y-4 ">
          <li className="w-full dark:hover:text-gray-200">Home</li>
          <li className="w-full dark:hover:text-gray-200">Blog</li>
          <li className="w-full dark:hover:text-gray-200">Snippets</li>
          <li className="w-full dark:hover:text-gray-200">Tweets</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
