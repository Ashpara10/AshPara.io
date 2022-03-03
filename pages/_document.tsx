import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <title>Create-Next-app</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Roboto:wght@900;500&display=swap"
        rel="stylesheet"
      />
      <body className=" bg-gray-100 dark:bg-[#050504]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
