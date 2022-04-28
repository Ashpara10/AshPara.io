import React from "react";
import type { GetStaticProps } from "next";
import { allSnippets, Snippet } from "../.contentlayer/generated";
import { pick } from "contentlayer/client";
import SnippetCard from "../Components/SnippetCard";
import Image from "next/image";

const SnippetPage = ({ posts }: any) => {
  return (
    <div className="w-full min-h-screen gap-y-2 px-6 flex flex-col items-center justify-start">
      <div className="max-w-2xl w-full flex items-center justify-between">
        <h1 className=" w-full font-inter text-left text-4xl  font-bold ">
          Code Snippets
        </h1>
      </div>
      <section className="max-w-2xl gap-x-3 gap-y-5 py-3  w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
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
