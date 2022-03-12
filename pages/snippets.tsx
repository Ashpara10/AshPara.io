import React from "react";
import type { GetStaticProps } from "next";
import { allSnippets, Snippet } from "../.contentlayer/generated";
import { pick } from "contentlayer/client";
import SnippetCard from "../Components/SnippetCard";
import Image from "next/image";

const SnippetPage = ({ posts }: any) => {
  return (
    <div className="w-full gap-y-2 flex flex-col items-center justify-center">
      <div className=" max-w-xl gap-y-2 px-3.5 py-1 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <h1 className=" w-full text-left text-4xl  font-bold ">
            Code Snippets
          </h1>

          <Image
            src={"/twitter_profile.jpg"}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <p className="font-mono text-gray-700 dark:text-gray-300 ">
          A gallery of my code snippets which Includes react next and Css and
          many more...
        </p>
      </div>
      <section className="max-w-2xl gap-3 py-3 px-2 w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        {posts.map((data: Snippet) => {
          return <SnippetCard key={data.slug} snippet={data} />;
        })}
      </section>
    </div>
  );
};

export default SnippetPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allSnippets.map((post) =>
    pick(post, [
      "title",
      "description",
      "createdAt",
      "slug",
      "body",
      "wordCount",
      "readingTime",
    ])
  );

  return {
    props: { posts },
  };
};
