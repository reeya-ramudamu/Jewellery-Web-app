import React from "react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-800 mb-8 w-full">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center flex flex-col">
          <p className="text-white font-banner text-xl md:text-2xl self-start ">
            New R.K
          </p>
          <p className="font-serif text-4xl md:text-6xl text-amber-200 ">
            Jewellery
          </p>
          <p className="font-banner text-2xl md:text-3xl text-white self-end">
            collections
          </p>
          <p className="bg-white text-slate-700 text-xs  font-mono tracking-widest">
            JUST FOR YOU
          </p>

          {/* <h1>Jewellery</h1>
          <p>is a Way of Keeping </p>
          <h1>Memories</h1>
          <p>Alive</p> */}
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image src="/banner.png" alt="banner" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
