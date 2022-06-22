import router from "next/router";
import React from "react";
import { allBlogs } from "../../.contentlayer/generated";
import BlogCard from "../BlogCard";

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
          Read All Post{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
