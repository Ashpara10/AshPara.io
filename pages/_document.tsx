import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <title>Create-Next-app</title>
      <body className=" bg-gray-50 dark:bg-[#050504]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
