import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";
import { Blog } from "../.contentlayer/generated";

type BlogProps = {
  post: Blog;
};

const BlogCard = ({ post }: BlogProps) => {
  return (
    <article className=" max-w-md  w-full flex flex-col items-center justify-center gap-y-2 dark:border-gray-700 overflow-hidden ">
      <div className="w-full flex items-center justify-center">
        <Image
          src={post.image}
          quality={100}
          loading="lazy"
          className="rounded-lg border "
          width={500}
          height={300}
        />
      </div>
      <div className="w-full flex flex-col items-center  justify-center px-1 pb-3 gap-y-1.5">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="w-full text-left text-2xl font-bold">{post.title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
