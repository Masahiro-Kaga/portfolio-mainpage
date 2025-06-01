import React from "react";
import content from "../utility";
import { SkillIcon, SectionTitle } from "../utils/commonUtils";

const SkillSet = () => {
  // 共通のスキルマッピング関数
  const createSkillList = (techArray) => {
    return techArray.map((skill, index) => (
      <SkillIcon
        key={`${skill.alt}-${index}`}
        image={skill.img}
        level={skill.level}
        alt={skill.alt}
      />
    ));
  };

  const frontEndTech = createSkillList(content.stack.tech_frontend);
  const backEndTech = createSkillList(content.stack.tech_backend);
  const devTool = createSkillList(content.stack.tech_devtool);
  const media = createSkillList(content.stack.tech_media);

  // レベルインジケーター用の共通コンポーネント
  const LevelIndicator = ({ level, levelName, levelRange }) => {
    // 各レベル範囲に対応する背景スタイル
    const getLevelBackground = (levelName) => {
      switch (levelName) {
        case "Super Saiyan":
          return "bg-[url('../public/img/background_fire2.gif')] bg-cover";
        case "Gold":
          return "bg-[gold]";
        case "Silver":
          return "bg-[silver]";
        case "Bronze":
          return "bg-[#cc6633]";
        default:
          return "bg-gray-300";
      }
    };

    return (
      <div className="flex items-center mx-3">
        <div className="h-16 w-16 border-2 overflow-hidden m-2 rounded-lg border-gray-800">
          <div
            className={`h-full w-full flex justify-center items-center ${getLevelBackground(
              levelName
            )}`}
          ></div>
        </div>
        <div className="font-dosis font-extrabold text-[20px] w-[140px]">
          <p>Level : {levelRange}</p>
          <p>{levelName}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-32 bg-gray-200" id="skills">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle>My Skillset [As a Jr.Dev]</SectionTitle>
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
          <LevelIndicator level={100} levelName="Super Saiyan" levelRange="75 ~ 100" />
          <LevelIndicator level={75} levelName="Gold" levelRange="50 ~ 74" />
          <LevelIndicator level={50} levelName="Silver" levelRange="25 ~ 49" />
          <LevelIndicator level={25} levelName="Bronze" levelRange="0 ~ 24" />
        </div>

        <div className="grid gap-8 mt-10 sm:grid-cols-8 sm:px-8 xl:px-0">
          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">Frontend</h4>
            <div className="flex flex-wrap justify-center">{frontEndTech}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">Backend</h4>
            <div className="flex flex-wrap justify-center">{backEndTech}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">Dev tools</h4>
            <div className="flex flex-wrap justify-center">{devTool}</div>
          </div>

          <div className="flex flex-col items-center justify-around col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 sm:rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis">Media</h4>
            <div className="flex flex-wrap justify-center">{media}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
