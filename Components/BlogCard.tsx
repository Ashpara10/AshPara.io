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
  // const { data }: any = useSWR(`/api/blog/${post.slug}`, fetcher, {
  //   revalidateOnFocus: false,
  // });
  // const views = data?.total?.views;

  return (
    <article className=" max-w-md bg-white border border-gray-300  dark:bg-[#111010] dark:border-gray-700 dark:border-opacity-30 w-full flex flex-col items-center justify-center gap-y-2  rounded-md dark:hover:brightness-[1.2] overflow-hidden ">
      <div>
        <Image src={post.image} height={500} width={700} />
      </div>
      <div className="w-full flex flex-col items-center py-2 px-4 justify-center pb-3 gap-y-2.5">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl px-3 w-full whitespace-pre-line font-bold">
            {post.title}
          </h2>
        </Link>
        <p className="w-full px-3 break-all whitespace-pre-wrap font-mono text-gray-900 dark:text-gray-100">
          {post.description}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
