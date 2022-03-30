import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";
import { Blog } from "../.contentlayer/generated";
import useSWR, { SWRResponse } from "swr";
import fetcher from "./lib/fetcher";

type BlogProps = {
  post: Blog;
};

const BlogCard = ({ post }: BlogProps) => {
  const { data, error }: SWRResponse = useSWR(
    `/api/blog/view/${post.slug}`,
    fetcher
  );

  const viewCount = data?.total?.views.toString();
  const likeCount = data?.total?.likes.toString();

  return (
    <article className=" max-w-sm bg-white border border-gray-300  dark:bg-dark dark:hover:bg-[#1a1a1a] dark:border-bdark  w-full flex flex-col items-center justify-center gap-y-2  rounded-md  overflow-hidden ">
      <div>
        <Image src={post.image} height={400} width={600} loading="lazy" />
      </div>
      <div className="w-full flex flex-col items-center justify-start px-6 pt-4 gap-y-4 pb-4 ">
        <div className="w-full flex flex-col items-center justify-center  ">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-inter text-[#121212] dark:text-gray-50 w-full  font-bold">
              {post.title}
            </h2>
          </Link>
        </div>

        <div className="w-full flex text-[#121212] dark:text-gray-50 items-center justify-start gap-x-5 font-mono ">
          <span className=" flex items-center justify-center hover:text-green-500 dark:hover:text-green-300 gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            {viewCount}
          </span>
          <span className="flex items-center justify-center hover:text-pink-500 dark:hover:text-pink-300 gap-x-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                className="fill-current"
                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
              />
            </svg>
            {likeCount}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
