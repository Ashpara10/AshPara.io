import Image from "next/image";

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
  console.log(data);

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <HomeCard />
      <section className="max-w-3xl grid grid-cols-2">
        {data.map((e: any) => {
          return <h2 className="text-2xl font-bold ">{e.name}</h2>;
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
          Developer/Artist/Anime enthusiast learning and honing my developer
          skills...
        </p>
      </div>
    </div>
  );
};
