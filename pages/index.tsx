import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { allBlogs } from "../.contentlayer/generated";
import router from "next/router";
import BlogCard from "../Components/BlogCard";
import { BsArrowRightCircle } from "react-icons/bs";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home = () => {
  return (
    <div className="w-full min-h-screen px-8  ">
      <div className="w-full  flex items-center justify-center ">
        <div className="max-w-2xl pb-6 w-full ">
          <div className="flex flex-col md:flex-row items-center justify-start">
            <Image
              src={"/twitter_profile.jpg"}
              width={80}
              height={80}
              className="rounded-full "
            />
            <div className="flex flex-col items-center justify-center gap-1.5 p-4">
              <span className="text-3xl md:text-4xl font-bold">
                Ashwin Parande
              </span>
              <span className="dark:text-gray-100 font-mono">
                ( Developer / Artist / Anime Enthusiast )
              </span>
            </div>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};
export default Home;

const Posts = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-bold max-w-2xl text-left w-full">Posts</h2>
      <div
        ref={ref}
        className={`max-w-2xl py-4 grid gap-x-12 gap-y-5 grid-cols-1 md:grid-cols-2`}
      >
        {allBlogs.slice(0, 2).map((e) => {
          return <BlogCard key={e._id} post={e} />;
        })}
        <span
          onClick={() => router.push("/blog")}
          className="px-3 w-full flex items-center justify-start gap-x-3"
        >
          Read All Posts <BsArrowRightCircle className="text-2xl" />
        </span>
      </div>
    </div>
  );
};
