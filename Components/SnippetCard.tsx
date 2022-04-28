import { Snippet } from "../.contentlayer/generated";
import React from "react";
import router from "next/router";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <article className=" w-full bg-orange-50 hover:bg-orange-100 dark:bg-dark flex flex-col items-center justify-center gap-y-1 border  border-gray-300 dark:border-bdark dark:hover:bg-[#1a1a1a] rounded-md px-6 py-4 ">
      <div className="w-full flex flex-col items-center justify-between gap-y-2">
        <h2
          onClick={() =>
            router.push("/snippet/[slug]", `/snippet/${snippet.slug}`)
          }
          className="text-2xl  text-black dark:text-gray-50 font-bold w-full text-left"
        >
          {snippet.title}
        </h2>
        <p className="font-mono">{snippet.description}</p>
      </div>
    </article>
  );
};

export default SnippetCard;
