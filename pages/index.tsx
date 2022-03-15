import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Ashpara10/repos");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

const Home = ({ data }: any) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <div className=" w-full flex items-center justify-center ">
        <HomeCard />
      </div>
      {/* <h1 className="text-4xl w-full text-center my-4 font-bold">
        Github Repos
      </h1> */}
      <section className="max-w-3xl grid grid-cols-2 gap-2 px-3">
        {data.map((e: any) => {
          return (
            <div
              key={e.id}
              className="max-w-md p-2.5 flex flex-col items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 dark:border-opacity-30 dark:hover:brightness-[1.2] bg-white dark:bg-[#111010]"
            >
              <a
                href={e.html_url}
                target="_blank"
                className="w-full text-left text-black/90 dark:text-gray-100 font-semibold hover:underline dark:hover:text-blue-600 hover:text-blue-700"
              >
                {e.name}
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Home;

const HomeCard = () => {
  return (
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
          Ashwin<span className=" text-3xl md:text-4xl px-1 ">🌱</span>
        </h1>
        <p className="font-mono max-w-sm text-gray-700 dark:text-gray-300 ">
          Developer/Artist/Anime enthusiast with a knack of creating stuff...
        </p>
      </div>
    </div>
  );
};
