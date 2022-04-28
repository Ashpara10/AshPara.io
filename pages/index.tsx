import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { allBlogs } from "../.contentlayer/generated";
import router from "next/router";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <div className="w-full ">
      <div className="w-full min-h-screen sticky top-0 -z-10">
        <Image layout="fill" className="absolute top-0 " src={"/totoro.jpg"} />
      </div>
      <div className="w-full px-8 py-6 flex flex-col items-center justify-center bg-amber-50 dark:bg-dark">
        {/* <h2 className="text-4xl font-extrabold max-w-2xl w-full my-5">Blogs</h2> */}
        <div
          ref={ref}
          className="max-w-2xl grid gap-3 grid-cols-1 md:grid-cols-2"
        >
          {allBlogs.slice(0, 2).map((e) => {
            return (
              <article
                key={e._id}
                className={` opacity-0 delay-75 ${
                  entry?.isIntersecting && " transition-all opacity-100"
                } max-w-sm border border-gray-300 dark:hover:bg-[#212121] dark:border-[#272727] rounded-md px-6 py-4 flex flex-col items-center justify-center`}
              >
                <h2
                  onClick={() => router.push("/blog/[slug]", `/blog/${e.slug}`)}
                  className="text-2xl font-bold"
                >
                  {e.title}
                </h2>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
