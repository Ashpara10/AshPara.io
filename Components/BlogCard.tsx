import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blog } from "../.contentlayer/generated";

type BlogProps = {
  post: Blog;
};

const BlogCard = ({ post }: BlogProps) => {
  
  return (
    <article className=" max-w-lg  w-full flex flex-col items-center justify-center gap-y-2 overflow-hidden ">
      <div className="w-full flex items-center justify-center">
         <Image src={post.image} quality={100} loading='lazy' className="rounded-md" width={500} height={300} />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-1 gap-y-1.5">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-robosab break-words font-bold">{post.title}</h2>
        </Link>
    
        <span className=" w-full text-left font-mono dark:text-gray-300">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
