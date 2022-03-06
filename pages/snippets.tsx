import React from "react";
import type { GetStaticProps } from "next";
import { allSnippets, Snippet } from "../.contentlayer/generated";
import { pick } from "contentlayer/client";
import SnippetCard from "../Components/SnippetCard";

const SnippetPage = ({ posts }: any) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl my-3 font-bold ">Code Snippets</h1>
      <section className="max-w-2xl px-2 w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
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
