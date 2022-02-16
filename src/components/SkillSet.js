import React from "react";
import content from "../content/index";

const SkillSet = () => {
  const frontEndTech = content.stack.tech_frontend.map((images, index) => {
    let iconBg;
    let animation;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
    } else if (images.level >= 75 && images.level < 100) {
      // iconBg = "items-end bg-[url('/Users/kagamasahiro/Documents/icloud_general/portfolio/public/img/background_fire2.gif')]";
            iconBg = "items-center bg-[gold]";

      animation = "animate-bounce";
    }
    return (
      <div key={index} className="h-16 w-16 border-2 m-2 rounded-lg border-white">
        <div className={`bg-cover h-full w-full flex justify-center ${iconBg}`}>
          <img src={images.img} alt="" className={`w-12 h-12 ${animation}`} />
        </div>
      </div>
    );
  });
  const backEndTech = content.stack.tech_backend.map((images, index) => {
    let iconBg;
    let animation;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
    } else if (images.level >= 75 && images.level < 100) {
      // iconBg = "items-end bg-[url('/Users/kagamasahiro/Documents/icloud_general/portfolio/public/img/background_fire2.gif')]";
            iconBg = "items-center bg-[gold]";

      animation = "animate-bounce";
    }
    return (
      <div key={index} className="h-16 w-16 border-2 m-2 rounded-lg border-white">
        <div className={`bg-cover h-full w-full flex justify-center ${iconBg}`}>
          <img src={images.img} alt="" className={`w-12 h-12 ${animation}`} />
        </div>
      </div>
    );
  });
  const devTool = content.stack.tech_devtool.map((images, index) => {
    let iconBg;
    let animation;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
    } else if (images.level >= 75 && images.level < 100) {
      // iconBg = "items-end bg-[url('/Users/kagamasahiro/Documents/icloud_general/portfolio/public/img/background_fire2.gif')]";
            iconBg = "items-center bg-[gold]";

      animation = "animate-bounce";
    }
    return (
      <div key={index} className="h-16 w-16 border-2 m-2 rounded-lg border-white">
        <div className={`bg-cover h-full w-full flex justify-center ${iconBg}`}>
          <img src={images.img} alt="" className={`w-12 h-12 ${animation}`} />
        </div>
      </div>
    );
  });
  const media = content.stack.tech_media.map((images, index) => {
    let iconBg;
    let animation;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
    } else if (images.level >= 75 && images.level < 100) {
      // iconBg = "items-end bg-[url('/Users/kagamasahiro/Documents/icloud_general/portfolio/public/img/background_fire2.gif')]";
            iconBg = "items-center bg-[gold]";

      animation = "animate-bounce";
    }
    return (
      <div key={index} className="h-16 w-16 border-2 m-2 rounded-lg border-white">
        <div className={`bg-cover h-full w-full flex justify-center ${iconBg}`}>
          <img src={images.img} alt="" className={`w-12 h-12 ${animation}`} />
        </div>
      </div>
    );
  });

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center font-dosis bg">
          My Skillset
        </h2>
        <p className="my-11 text-md sm:text-lg text-center text-gray-600 tracking-tight mx-3 md:mx-32 leading-6">
          I have compiled a list of skills that I have acquired through my
          studies at school, self-learning, and work experience. I have been
          working on improving my skills in a wide range of areas, from
          front-end to back-end, although in a broad and shallow way. My
          strength is that I can handle all-round development, but I am aware
          that my overall understanding is limited and my expertise is low. In
          the future, I would like to increase my involvement in back-end
          development and gradually improve my expertise.
        </p>
        <div className="grid gap-8 mt-10 sm:grid-cols-8 sm:px-8 xl:px-0">
          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <h4 className="text-xl font-medium text-gray-700">Frontend</h4>
            <div className="flex flex-wrap justify-center">{frontEndTech}</div>
            <p className="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <h4 className="text-xl font-medium text-gray-700">Backend</h4>
            <div className="flex flex-wrap justify-center">
              {backEndTech}
            </div>
            <p className="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <h4 className="text-xl font-medium text-gray-700">Dev tools</h4>
            <div className="flex flex-wrap justify-center">
              {devTool}
            </div>
            <p className="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <h4 className="text-xl font-medium text-gray-700">Media</h4>
            <div className="flex flex-wrap justify-center">
              {media}
            </div>
            <p className="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="relative h-16 w-16">
        <div className="absolute w-full h-full border-2 border-black rounded-lg"></div>
        <div className="absolute h-full w-full flex justify-center items-end bg-cover bg-[url('/Users/kagamasahiro/Documents/icloud_general/portfolio/public/img/background_fire2.gif')]">
          <img
            src={content.stack.tech_frontend[3].img}
            alt=""
            className={`w-12 h-12 animate-bounce`}
          />
        </div>
      </div>
      <div className="relative h-16 w-16">
        <div className="absolute w-full h-full border-2 border-black rounded-lg"></div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <img
            src={content.stack.tech_frontend[3].img}
            alt=""
            className={`w-12 h-12`}
          />
        </div>
      </div> */}
    </section>
  );
};

export default SkillSet;
