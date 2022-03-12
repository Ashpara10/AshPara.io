import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className=" max-w-xl my-5 px-3 gap-x-2 flex  items-center justify-center">
        <div>
          <Image
            src={"/twitter_profile.jpg"}
            width={58}
            height={58}
            className="rounded-full"
          />
        </div>
        <div className="w-full flex flex-col px-3 items-center justify-between">
          <h1 className="w-full text-left text-4xl md:text-5xl font-fre  font-bold ">
            Ashwin Parande
          </h1>
          <p className="font-mono max-w-sm text-gray-700 dark:text-gray-300 ">
            Developer/Artist/Anime enthusiast learning and honing my developer
            skills...
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
