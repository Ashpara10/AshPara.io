import Image from "next/image";
import React from "react";

const AnchorTag = (props: any) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:underline"
      href={props.href}
    >
      {props.children}
    </a>
  );
};
const StyledHeading1 = (props: any) => {
  return (
    <>
      <h1 className=" text-3xl font-sans font-bold py-1  dark:text-gray-200">
        {props.children}
      </h1>
    </>
  );
};

const BlockQuote = (props: any) => {
  return (
    <blockquote className="w-full rounded-sm border-l-[.25rem] flex flex-col items-center justify-center border-gray-500  dark:border-gray-800 p-2.5 font-semibold italic  bg-yellow-200 bg-opacity-70 dark:bg-transparent dark:text-gray-200">
      {props.children}
    </blockquote>
  );
};

const StyledHeading2 = (props: any) => {
  return (
    <h2 className=" text-2xl font-sans font-bold py-1 dark:text-gray-200">
      {props.children}
    </h2>
  );
};
const StyledHeading3 = (props: any) => {
  return (
    <h3 className=" text-xl font-sans font-bold py-1 dark:text-gray-200">
      {props.children}
    </h3>
  );
};

const UnorderedList = (props: any) => {
  return (
    <ul className="w-full max-w-xl font-sans list-disc flex gap-y-2 my-2 flex-col mx-auto">
      {props.children}
    </ul>
  );
};

const RoundedImage = (props: any) => {
  return (
    <Image
      src={props.src}
      className="w-full rounded-md"
      width={props.width}
      height={props.height}
      quality={100}
    />
  );
};

const MdxComponent = {
  img: RoundedImage,
  h1: StyledHeading1,
  h2: StyledHeading2,
  h3: StyledHeading3,
  ul: UnorderedList,
  a: AnchorTag,
  blockquote: BlockQuote,
};

export default MdxComponent;
