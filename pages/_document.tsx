import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@7/00?family=Roboto:wght@900&display=swap"
        rel="stylesheet"
      />
      <body className=" bg-gray-50 dark:bg-[#111010]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
