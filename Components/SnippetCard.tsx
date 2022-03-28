import { Snippet } from "../.contentlayer/generated";
import React from "react";
import router from "next/router";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <article className=" w-full bg-white dark:bg-dark flex flex-col items-center justify-center gap-y-1 border  border-gray-300 dark:border-bdark dark:hover:bg-[#1a1a1a] rounded-md p-4 ">
      <div className="w-full p-2 flex flex-col items-center justify-between gap-y-2">
        <h2
          onClick={() =>
            router.push("/snippet/[slug]", `/snippet/${snippet.slug}`)
          }
          className="text-2xl font-inter text-black/90 dark:text-gray-50 font-bold w-full text-left"
        >
          {snippet.title}
        </h2>
        <p className="w-full font-inter font-normal  text-gray-900 dark:text-gray-100 ">
          {snippet.description}
        </p>
      </div>
    </article>
  );
};

export default SnippetCard;
