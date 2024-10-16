import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-white">
              Hello, I'm{" "}
            </span>
            Shailesh Rajesh M
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            ducimus vel a vitae explicabo quo quibusdam eligendi, repellat ullam
            voluptas deleniti fugiat adipisci doloremque non ab nihil, porro
            exercitationem est?
          </p>
          <button className="text-white px-1 py-1 rounded-full bg-transparent hover:bg-slate-800  mt-3 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download Resume
            </span>
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1\2 -translate-x-1\2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
