import type { GetStaticProps, NextPage } from "next";
import { allBlogs } from "../.contentlayer/generated";
import { pick } from "@contentlayer/client";
import BlogCard from "../Components/BlogCard";
import React, { FC } from "react";

const Home = ({ posts }:any) => {
  return (
    <div className="p-3 w-full  flex flex-col items-center justify-center">
      <section className="w-full flex flex-col items-center justify-center gap-y-3 ">
        {posts.map((data:any) => (
          <BlogCard key={data.slug} post={data} />
        ))}
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["title", "createdAt", "image", "slug", "body"])
  );

  return {
    props: { posts },
  };
};
