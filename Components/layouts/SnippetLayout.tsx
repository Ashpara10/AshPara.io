import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Snippet } from "../../.contentlayer/generated";
import moment from "moment";

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
        <div className="w-full flex items-center justify-between">
          <Image
            src={"/twitter_profile.jpg"}
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
        <div className="font-inter max-w-none w-full flex flex-col gap-y-3 font-normal">
          {children}
        </div>
      </article>
    </div>
  );
};

export default SnippetLayout;
