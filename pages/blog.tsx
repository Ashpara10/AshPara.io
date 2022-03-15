import type { GetStaticProps, NextPage } from "next";
import { allBlogs } from "../.contentlayer/generated";
import { pick } from "@contentlayer/client";
import BlogCard from "../Components/BlogCard";
import React, { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import Fuse from "fuse.js";

const BlogPage = ({ posts }: any) => {
  const [search, setSearch] = useState("");

  const options = {
    includeScore: false,
    keys: ["title", "body.raw", "description"],
  };

  const fuse = new Fuse(posts, options);

  const result = fuse.search(String(search.length > 1 && search));

  return (
    <div className="px-5 w-full  flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center py-3">
        <SearchBox
          query={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
      <section className="max-w-xl flex flex-col items-center justify-center gap-y-3">
        {search.length > 0
          ? result.map((data: any) => {
              return <BlogCard key={data?.item.slug} post={data?.item} />;
            })
          : posts.map((data: any) => <BlogCard key={data.slug} post={data} />)}
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
      placeholder={"Search for Blogs..."}
      onChange={onChange}
      className="p-2.5 rounded-md font-mono focus-visible:outline-none max-w-xl w-full border border-gray-300 dark:border-gray-700 dark:border-opacity-30 bg-white dark:bg-inherit"
    />
  );
};
