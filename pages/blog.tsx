import type { GetStaticProps, NextPage } from "next";
import { allBlogs, Blog } from "../.contentlayer/generated";
import { pick } from "@contentlayer/client";
import BlogCard from "../Components/BlogCard";
import React, { useState } from "react";
import Fuse from "fuse.js";

const BlogPage = ({ posts }: { posts: Blog[] }) => {
  const [search, setSearch] = useState("");

  const options = {
    includeScore: false,
    keys: ["title", "body.raw", "description"],
  };

  const fuse = new Fuse(posts, options);

  const result = fuse.search(String(search.length > 0 && search));

  return (
    <div className=" my-9 w-full min-h-screen flex flex-col items-center justify-center">
      <input
        value={search}
        placeholder="Search for posts..."
        onChange={(e) => setSearch(e.target.value)}
        className="py-2.5 font-mono w-full max-w-lg  px-4 mb-3 bg-gray-50 border border-gray-300 dark:border-bdark focus-within:outline-none dark:bg-dark  rounded-md "
      />
      <section className="max-w-2xl min-h-screen flex flex-col items-center justify-start gap-5">
        {search.length > 0
          ? result.map((data: any) => {
              return <BlogCard key={data?.item.slug} post={data?.item} />;
            })
          : posts.map((data: Blog) => <BlogCard key={data.slug} post={data} />)}
      </section>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, [
      "title",
      "description",
      "createdAt",
      "image",
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
type SearchInput = {
  query: string;
  onChange: any;
};

const SearchBox = ({ query, onChange }: SearchInput) => {
  return (
    <input
      value={query}
      placeholder="Search for Blogs..."
      onChange={onChange}
      className="p-2.5 rounded-md font-mono focus-visible:outline-none max-w-xl md:max-w-sm  w-full border border-gray-300 dark:border-[#272727] bg-gray-50 dark:bg-[#191919] "
    />
  );
};
