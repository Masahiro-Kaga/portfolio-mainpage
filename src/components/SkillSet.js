import React from "react";
import content from "../utility";

const SkillSet = () => {
  const frontEndTech = content.stack.tech_frontend.map((images, index) => {
    let iconBg;
    let animation;
    let skillname;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 75 && images.level < 100) {
      iconBg = "items-end bg-[url('../public/img/background_fire2.gif')]";
      animation = "animate-bounce";
      skillname = images.alt;
    }
    return (
      <div key={index}>
        <div className="h-16 w-16 border-2 m-2 rounded-lg border-white overflow-hidden">
          <div
            className={`bg-cover h-full w-full flex bg-white justify-center ${iconBg}`}
          >
            <img
              src={images.img}
              alt={images.alt}
              className={`w-12 h-12 ${animation}`}
            />
          </div>
        </div>
        <p className="text-center text-[14px] text-white font-dosis">
          {skillname}
        </p>
      </div>
    );
  });
  const backEndTech = content.stack.tech_backend.map((images, index) => {
    let iconBg;
    let animation;
    let skillname;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 75 && images.level < 100) {
      iconBg = "items-end bg-[url('../public/img/background_fire2.gif')]";
      animation = "animate-bounce";
      skillname = images.alt;
    }
    return (
      <div key={index}>
        <div className="h-16 w-16 border-2 m-2 rounded-lg border-white overflow-hidden">
          <div
            className={`bg-cover h-full w-full flex bg-white justify-center ${iconBg}`}
          >
            <img
              src={images.img}
              alt={images.alt}
              className={`w-12 h-12 ${animation}`}
            />
          </div>
        </div>
        <p className="text-center text-[14px] text-white font-dosis">
          {skillname}
        </p>
      </div>
    );
  });
  const devTool = content.stack.tech_devtool.map((images, index) => {
    let iconBg;
    let animation;
    let skillname;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 75 && images.level < 100) {
      iconBg = "items-end bg-[url('../public/img/background_fire2.gif')]";
      animation = "animate-bounce";
      skillname = images.alt;
    }
    return (
      <div key={index}>
        <div className="h-16 w-16 border-2 m-2 rounded-lg border-white overflow-hidden">
          <div
            className={`bg-cover h-full w-full flex bg-white justify-center ${iconBg}`}
          >
            <img
              src={images.img}
              alt={images.alt}
              className={`w-12 h-12 ${animation}`}
            />
          </div>
        </div>
        <p className="text-center text-[14px] text-white font-dosis">
          {skillname}
        </p>
      </div>
    );
  });
  const media = content.stack.tech_media.map((images, index) => {
    let iconBg;
    let animation;
    let skillname;
    if (images.level >= 0 && images.level < 25) {
      iconBg = "items-center bg-[#cc6633]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 25 && images.level < 50) {
      iconBg = "items-center bg-[silver]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 50 && images.level < 75) {
      iconBg = "items-center bg-[gold]";
      animation = "";
      skillname = images.alt;
    } else if (images.level >= 75 && images.level <= 100) {
      iconBg = "items-end bg-[url('../public/img/background_fire2.gif')]";
      animation = "animate-bounce";
      skillname = images.alt;
    }
    return (
      <div key={index}>
        <div className="h-16 w-16 border-2 m-2 rounded-lg border-white overflow-hidden">
          <div
            className={`bg-cover h-full w-full flex bg-white justify-center ${iconBg}`}
          >
            <img
              src={images.img}
              alt={images.alt}
              className={`w-12 h-12 ${animation}`}
            />
          </div>
        </div>
        <p className="text-center text-[14px] text-white font-dosis">
          {skillname}
        </p>
      </div>
    );
  });

  return (
    <section className="py-32 bg-white" id="skills">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl py-20 font-bold text-center font-dosis bg">
          My Skillset [As a Jr.Dev]
        </h2>
        {/* <p className="my-11 text-md sm:text-lg text-center text-gray-600 tracking-tight mx-3 md:mx-32 leading-6">
          I have compiled a list of skills that I have acquired through my
          studies at school, self-learning, and work experience. I have been
          working on improving my skills in a wide range of areas, from
          front-end to back-end, although in a broad and shallow way. My
          strength is that I can handle all-round development, but I am aware
          that my overall understanding is limited and my expertise is low. In
          the future, I would like to increase my involvement in back-end
          development and gradually improve my expertise.
        </p> */}

        <div className="my-40 flex flex-col lg:flex-row flex-wrap justify-center items-center ">
          <div className="flex items-center mx-3">
            <div className="h-16 w-16 border-2 overflow-hidden m-2 rounded-lg border-gray-800">
              <div
                className={`bg-cover h-full w-full flex bg-white justify-center items-end bg-[url('../public/img/background_fire2.gif')]`}
              ></div>
            </div>
            <div className="font-dosis font-extrabold text-[20px] w-[140px]">
              <p>Level : 75 ~ 100</p>
              <p>Super Saiyan</p>
            </div>
          </div>
          <div className="flex items-center mx-3">
            <div className="h-16 w-16 border-2 overflow-hidden m-2 rounded-lg border-gray-800">
              <div
                className={`bg-cover h-full w-full flex bg-[gold] justify-center items-end`}
              ></div>
            </div>
            <div className="font-dosis font-extrabold text-[20px] w-[140px]">
              <p>Level : 50 ~ 74</p>
              <p>Gold</p>
            </div>
          </div>
          <div className="flex items-center mx-3">
            <div className="h-16 w-16 border-2 overflow-hidden m-2 rounded-lg border-gray-800">
              <div
                className={`bg-cover h-full w-full flex bg-[silver] justify-center items-end`}
              ></div>
            </div>
            <div className="font-dosis font-extrabold text-[20px] w-[140px]">
              <p>Level : 25 ~ 49</p>
              <p>Silver</p>
            </div>
          </div>
          <div className="flex items-center mx-3">
            <div className="h-16 w-16 border-2 overflow-hidden m-2 rounded-lg border-gray-800">
              <div
                className={`bg-cover h-full w-full flex bg-[#cc6633] justify-center items-end`}
              ></div>
            </div>
            <div className="font-dosis font-extrabold text-[20px] w-[140px]">
              <p>Level : 0 ~ 24</p>
              <p>Blonze</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mt-10 sm:grid-cols-8 sm:px-8 xl:px-0">
          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">
              Frontend
            </h4>
            <div className="flex flex-wrap justify-center">{frontEndTech}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">
              Backend
            </h4>
            <div className="flex flex-wrap justify-center">{backEndTech}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">
              Dev tools
            </h4>
            <div className="flex flex-wrap justify-center">{devTool}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">
              Media
            </h4>
            <div className="flex flex-wrap justify-center">{media}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
