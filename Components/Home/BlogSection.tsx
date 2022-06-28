import router from "next/router";
import React from "react";
import { allBlogs } from "../../.contentlayer/generated";
import BlogCard from "../BlogCard";
import ArrowIcon from "../Icons/ArrowIcon";

const BlogSection = () => {
  return (
    <section className="max-w-2xl w-full flex flex-col gap-y-3 ">
      <div>
        <span className="text-3xl w-full max-w-2xl text-left font-semibold">
          Blogs
        </span>
      </div>
      <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
        {allBlogs.slice(0, 2).map((data) => {
          return <BlogCard key={data._id} post={data} />;
        })}
      </div>
      <div className="w-full px-2 flex items-center justify-start">
        <a
          className=" text-violet-800 dark:text-violet-500 flex items-center justify-center mt-2 gap-x-2"
          onClick={() => router.push("/blog")}
        >
          Read All Post <ArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
