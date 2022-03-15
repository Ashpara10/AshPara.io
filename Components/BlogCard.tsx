import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";
import { Blog } from "../.contentlayer/generated";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import { FiEye } from "react-icons/fi";

type BlogProps = {
  post: Blog;
};

const BlogCard = ({ post }: BlogProps) => {
  const { data }: any = useSWR(`/api/blog/${post.slug}`, fetcher, {
    revalidateOnFocus: false,
  });
  const views = data?.total?.views;

  return (
    <article className=" max-w-md w-full flex flex-col items-center justify-center gap-y-2 dark:border-gray-700 overflow-hidden ">
      <div className="w-full flex flex-col items-center  justify-center px-1 pb-3 gap-y-1.5">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-bold">{post.title}</h2>
        </Link>
        <span className="font-mono  w-full flex items-center justify-start gap-x-1 text-gray-900 dark:text-gray-200">
          {views?.toString()} <FiEye />
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
