import Image from "next/image";
import router from "next/router";
import React from "react";
import useSWR from "swr";
import { Blog } from "../.contentlayer/generated";
import HeartIcon from "./Icons/HeartIcon";
import ViewIcon from "./Icons/ViewIcon";
import fetcher from "./lib/fetcher";

type Views = {
  total: {
    views: number;
  };
};

const BlogCard = ({ post }: { post: Blog }) => {
  const { title, description, image } = post;
  const { data }: any = useSWR(`/api/blog/view/${post.slug}`, fetcher);
  const views = data?.total?.views.toString();
  return (
    <article className="max-w-sm overflow-hidden flex flex-col items-center justify-center  bg-gray-50 dark:bg-dark">
      <div className="px-2 py-2">
        <Image
          className="rounded-md "
          src={image}
          loading="lazy"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="px-6 mt-3 flex flex-col  items-center justify-center">
        <h1 className="text-xl  font-semibold">
          <a onClick={() => router.push(`/blog/${post.slug}`)}>{title}</a>
        </h1>
        <p className="dark:text-gray-200 break-all leading-normal mt-3">
          {description}
        </p>
        <div className="w-full flex items-center gap-x-3 justify-start mt-3 text-gray-900 dark:text-gray-100">
          <ViewIcon />
          <span>{views === "0" ? 0 : views}</span>
          <HeartIcon />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
