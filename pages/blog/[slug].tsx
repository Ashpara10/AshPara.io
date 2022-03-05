import Head from "next/head";
import Image from "next/image";
import React from "react";
import { allBlogs, Blog } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxComponent from "../../Components/MdxComponent";
import moment from "moment";

type BlogProps = {
  post: Blog;
};

const BlogPost = ({ post }: { post: Blog }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="w-full flex items-center justify-center px-3 md:mx-auto">
      <Head>
        <title>{`${post.title}-AshPara`}</title>
      </Head>
      <article className="max-w-2xl w-full p-3 flex flex-col items-center justify-center gap-y-2">
        <div className="w-full flex flex-col gap-y-3 items-center justify-center">
          <h2 className="font-bold  mb-2 text-3xl md:text-4xl tracking-tight  text-black dark:text-gray-100">
            {post.title}
          </h2>
          <div className="w-full flex  items-center justify-between">
            <div className="w-full flex items-center justify-between gap-x-1 font-mono">
              <div className="flex items-center justify-center gap-x-1">
                <Image
                  src={"/twitter_profile.jpg"}
                  width={36}
                  height={36}
                  className="rounded-full flex items-center justify-center object-contain"
                />
                <span className="px-2"> AshPara /</span>
                <span>{moment(post.createdAt).format("MMM DD Y")}</span>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <span>{post.readingTime.text}</span>
              </div>
            </div>
          </div>
          <Image
            src={post.image}
            height={400}
            width={700}
            priority
            className="w-full p-1.5 rounded-md "
          />
          <div className="max-w-none w-full  ">
            <Component components={MdxComponent} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
