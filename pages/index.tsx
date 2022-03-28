import Image from "next/image";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center px-8 ">
      <div className=" w-full flex flex-col items-center gap-y-2 justify-center ">
        <h2 className="w-full text-3xl font-bold font-inter">Ashwin Parande</h2>
        <p className="text-gray-700  dark:text-gray-200 font-inter">
          Newbie Developer/Artist/Anime Enthusiast with a knack for creating
          stuff
        </p>
      </div>
    </div>
  );
};
export default Home;
