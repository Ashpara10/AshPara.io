import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { allBlogs } from "../.contentlayer/generated";
import router from "next/router";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BlogCard from "../Components/BlogCard";
import { BsArrowRightCircle } from "react-icons/bs";
import { useFormik } from "formik";
export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full mt-10 p-4 flex flex-col items-center justify-center">
      <span className="text-3xl pb-6 font-bold max-w-2xl text-left w-full">
        Newsletter
      </span>

      <form
        className="w-full max-w-2xl gap-3  flex flex-col md:flex-row "
        onSubmit={formik.handleSubmit}
      >
        <input
          value={formik.values.email}
          className="p-2.5  w-full border dark:border-[#212121] dark:bg-[#191919] rounded-md focus-within:outline-none"
          placeholder="Enter email to stay updated"
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          className="w-fit font-semibold text-white bg-indigo-600 py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Home = () => {
  const { text } = useTypewriter({
    words: ["Developer", "Artist", "Anime Enthusiast", "Hook!"],
    loop: 0,
  });
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
            <div className="flex flex-col items-center justify- py-2.5 gap-1.5 px-4">
              <span className="w-full text-left  text-3xl md:text-4xl font-bold">
                Ashwin Parande
              </span>
              <span className="w-full text-lg dark:text-gray-100 font-mono">
                ( Newbie Web Developer / Artist )
              </span>
            </div>
          </div>
        </div>
      </div>
      <Posts />
      <Newsletter />
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
        className={`max-w-2xl py-4 grid gap-x-12 gap-y-5  grid-cols-1 md:grid-cols-2`}
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
