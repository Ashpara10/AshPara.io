import { Snippet } from "../.contentlayer/generated";
import React from "react";
import Image from "next/image";
import router from "next/router";
type SnippetType = {
  snippet: Snippet;
};

const SnippetCard = ({ snippet }: SnippetType) => {
  return (
    <article className=" w-full bg-white dark:bg-[#121211] flex flex-col items-center justify-center gap-y-1 border  border-gray-300 dark:border-none dark:hover:brightness-[1.2] rounded-sm p-3">
      <div className="w-full flex items-center justify-start">
        <Image
          src={"/twitter_profile.jpg"}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="w-full p-2 flex flex-col items-center justify-between gap-y-2">
        <h2
          onClick={() =>
            router.push("/snippet/[slug]", `/snippet/${snippet.slug}`)
          }
          className="text-2xl text-black/95 dark:text-white font-bold w-full text-left"
        >
          {snippet.title}
        </h2>
        <p className="w-full font-mono ">{snippet.description}</p>
      </div>
    </article>
  );
};

export default SnippetCard;
