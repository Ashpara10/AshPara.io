import React from "react";
import { allSnippets, Snippet } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxComponent from "../../Components/MdxComponent";
import Image from "next/image";
import SnippetLayout from "../../Components/layouts/SnippetLayout";

const SnippetPost = ({ snippet }: { snippet: Snippet }) => {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <SnippetLayout snippet={snippet}>
      <Component components={MdxComponent} />
    </SnippetLayout>
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
