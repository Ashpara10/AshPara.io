import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="max-w-2xl w-full  pb-4 flex flex-col gap-3 items-center justify-between">
      <Image
        src={"/twitter_profile.jpg"}
        width={100}
        height={100}
        className="border  rounded-2xl"
      />
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold">Ashwin Parande</span>
      </div>
    </section>
  );
};

export default HomeSection;
