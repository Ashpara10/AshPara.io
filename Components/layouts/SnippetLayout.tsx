import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Snippet } from "../../.contentlayer/generated";

const SnippetLayout = ({
  snippet,
  children,
}: PropsWithChildren<{ snippet: Snippet }>) => {
  return (
    <div className="w-full px-8 my-9 flex items-center justify-center">
      <article className=" container max-w-2xl flex flex-col gap-y-2 items-center justify-center">
        <h1 className="w-full text-black/90 dark:text-gray-50 text-left text-3xl md:text-4xl font-inter font-bold">
          {snippet.title}
        </h1>
        <div className="w-full my-2 flex items-center justify-between">
          <Image
            src={"/twitter_profile.jpg"}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div>
            <span className="font-mono">
              {new Date(snippet.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="font-inter max-w-none w-full flex flex-col gap-y-3 font-normal">
          {children}
        </div>
      </article>
    </div>
  );
};

export default SnippetLayout;
