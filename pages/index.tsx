import type { GetStaticProps, NextPage } from "next";
import { allBlogs } from "../.contentlayer/generated"
import { pick } from "@contentlayer/client";
import React,{FC} from 'react'

// type BlogPost={
//   title:string,
//   createdAt:string,
//   image:string,
//   slug:string,
//   body:any
// }

const Home:NextPage = (posts) => {
  console.log(posts)
  return(
   <div>
  Hello 
  </div>
)}

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  const posts = allBlogs.map((post) =>
    pick(post, ["title", "createdAt", "image", "slug", "body"])
  );

  return {
    props: {posts},
  };
};
