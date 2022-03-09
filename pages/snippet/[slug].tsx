import React from "react";
import { allSnippets, Snippet } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxComponent from "../../Components/MdxComponent";
import Image from "next/image";

type SnippetProps = {
  snippet: Snippet;
};

const SnippetPost = ({ snippet }: SnippetProps) => {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <div className="w-full flex items-center justify-center">
      <article className="max-w-2xl w-full p-3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between gap-x-2 py-2 ">
          <h1 className="w-full text-3xl md:text-4xl font-bold">
            {snippet.title}
          </h1>
          <Image
            src={"/twitter_profile.jpg"}
            width={38}
            height={38}
            className="rounded-full w-full ml-1 "
          />
        </div>
        <div className="max-w-none w-full flex flex-col gap-y-3 prose-pre:my-2 prose-p:text-[medium] prose-p:font-sans ">
          <Component />
        </div>
      </article>
    </div>
  );
};

export default SnippetPost;

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const snippet = allSnippets.find((s) => s.slug === params.slug);

  return { props: { snippet } };
}
