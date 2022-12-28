import React from "react";
import Slider from "./UI/Slider";

const AboutMe = () => {
  return (
    <section className="w-full min-h-screen md:flex px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <h2 className="text-4xl py-20 font-bold text-center font-dosis bg mb-16">
        About Me
      </h2>
        <div className="w-full flex flex-wrap items-center justify-around">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 overflow-hidden">
            <Slider></Slider>
            <div className="p-5">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name : Masahiro Kaga
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hometown : Hokkaido,Japan
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Education : Langara College, CS
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hobby : Snowboard
              </p>
            </div>
          </div>
          <div className=" md:px-3 text-center my-20">
            <div className="max-w-sm pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">What A Beautiful</span>
                <span className="block text-indigo-600 xl:inline">
                Life
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                I was born and raised in Hokkaido prefecture in Japan. I worked prefectual government over 11 years.<br />When I was 31 years old, I determined to persue my future dream which is to travel all over the world, then finally I am in Canada🇨🇦.<br />I already have experience as a web developer and would be happy to work with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
