import Head from "next/head";
import Image from "next/image";
import React from "react";
import { allBlogs, Blog } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxComponent from "../../Components/MdxComponent";

const BlogPost = ({ post }: { post: Blog }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <div className="w-full flex items-center justify-center md:mx-auto">
      <Head>
        <title>{`${post.title} - AshPara`}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.description} />
      </Head>
      <article className="max-w-2xl w-full flex flex-col items-center justify-center gap-y-2 mt-5">
        <div className="w-full flex flex-col gap-y-3 items-center justify-center">
          <h1 className="font-bold w-full text-left mb-2 text-2xl md:text-3xl tracking-tight  text-dark dark:text-gray-50">
            {post.title}
          </h1>
          <div className="w-full flex  items-center justify-between">
            <div className="w-full flex items-center justify-between gap-x-1 font-mono">
              <div className="flex items-center justify-center gap-x-1">
                <div className="w-full px-4 flex gap-x-1 items-center justify-between">
                  <span>{post.readingTime.text}</span> {" / "}
                  <span className="px-2">
                    {0}
                    {/* <ViewsManager slug={post.slug} /> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={post.image}
            height={450}
            width={700}
            priority
            className="w-full p-1.5 rounded-md "
          />
          <div className="max-w-none font-inter text-[#0b0b0b] w-full flex flex-col gap-y-5 px-1.5 ">
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
