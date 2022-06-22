import { useState } from "react";
import BlogSection from "../Components/Home/BlogSection";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full mt-10 p-4 flex flex-col items-center justify-center">
      <span className="text-3xl pb-6 font-bold max-w-2xl text-left w-full">
        Newsletter
      </span>

      <form
        className="w-full max-w-2xl gap-3  flex flex-col md:flex-row "
        onSubmit={(e) => {
          e.preventDefault();
          alert(JSON.stringify(email));
        }}
      >
        <input
          value={email}
          className="p-2.5  w-full border dark:border-[#212121] dark:bg-[#191919] rounded-md focus-within:outline-none"
          placeholder="Enter email to stay updated"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-fit font-semibold text-white border border-violet-50 bg-violet-600 dark:border-violet-900 dark:bg-violet-800/50 py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full min-h-screen mt-3 flex flex-col items-center justify-center">
      <BlogSection />
    </div>
  );
};
export default Home;
