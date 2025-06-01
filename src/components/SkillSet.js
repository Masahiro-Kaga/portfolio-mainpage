import React from "react";
import portfolioData from "../utility";
import { SectionTitle } from "../utils/commonUtils";

const SkillSet = ({ pageType = "job", styleType = "casual" }) => {
  // 共通のスキルマッピング関数（2列レイアウト用）
  const createSkillGrid = (techArray, isDark = true) => {
    return (
      <div className="grid grid-cols-2 gap-4 w-full">
        {techArray.map((skill, index) => (
          <div
            key={`${skill.alt}-${index}`}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-opacity-80 transition-colors"
          >
            <img src={skill.img} alt={skill.alt} className="w-8 h-8 object-contain flex-shrink-0" />
            <span
              className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-700"} truncate`}
            >
              {skill.alt}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const frontEndTech = createSkillGrid(portfolioData.stack.tech_frontend, true);
  const backEndTech = createSkillGrid(portfolioData.stack.tech_backend, true);
  const devTool = createSkillGrid(portfolioData.stack.tech_devtool, true);
  const media = createSkillGrid(portfolioData.stack.tech_media, true);
  const cloudTech = createSkillGrid(portfolioData.stack.tech_cloud, true);
  const aiTech = createSkillGrid(portfolioData.stack.tech_ai, true);

  // レベルインジケーター用の共通コンポーネント（カジュアル用）
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

  // カジュアルなデザインのレンダリング
  const renderCasualDesign = () => (
    <>
      <div className="my-40 flex flex-col lg:flex-row flex-wrap justify-center items-center ">
        <LevelIndicator level={100} levelName="Super Saiyan" levelRange="75 ~ 100" />
        <LevelIndicator level={75} levelName="Gold" levelRange="50 ~ 74" />
        <LevelIndicator level={50} levelName="Silver" levelRange="25 ~ 49" />
        <LevelIndicator level={25} levelName="Bronze" levelRange="0 ~ 24" />
      </div>

      <div className="grid gap-8 mt-10 sm:grid-cols-8 sm:px-8 xl:px-0">
        <div className="flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">AI Tools</h4>
          <div className="w-full">{aiTech}</div>
        </div>

        <div className="flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">Frontend</h4>
          <div className="w-full">{frontEndTech}</div>
        </div>

        <div className="flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">Backend</h4>
          <div className="w-full">{backEndTech}</div>
        </div>

        <div className="flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">Cloud Services</h4>
          <div className="w-full">{cloudTech}</div>
        </div>

        <div className="flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">Dev tools</h4>
          <div className="w-full">{devTool}</div>
        </div>

        <div className="flex flex-col items-center justify-start col-span-8 px-8 py-12 space-y-6 overflow-hidden bg-gray-800 sm:rounded-xl">
          <h4 className="text-[2rem] font-medium text-white font-dosis">Media & Design</h4>
          <div className="w-full">{media}</div>
        </div>
      </div>
    </>
  );

  // フォーマルなデザインのレンダリング
  const renderFormalDesign = () => (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Tools */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-600 pb-2">
              AI Tools
            </h3>
            <div className="w-full">{createSkillGrid(portfolioData.stack.tech_ai, false)}</div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
              Frontend Development
            </h3>
            <div className="w-full">
              {createSkillGrid(portfolioData.stack.tech_frontend, false)}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-600 pb-2">
              Backend Development
            </h3>
            <div className="w-full">{createSkillGrid(portfolioData.stack.tech_backend, false)}</div>
          </div>

          {/* Cloud Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-600 pb-2">
              Cloud Services
            </h3>
            <div className="w-full">{createSkillGrid(portfolioData.stack.tech_cloud, false)}</div>
          </div>

          {/* Development Tools */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-600 pb-2">
              Development Tools
            </h3>
            <div className="w-full">{createSkillGrid(portfolioData.stack.tech_devtool, false)}</div>
          </div>

          {/* Media & Design */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-pink-600 pb-2">
              Media & Design
            </h3>
            <div className="w-full">{createSkillGrid(portfolioData.stack.tech_media, false)}</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="py-32 bg-gray-200" id="skills">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle>Skillset</SectionTitle>
        {styleType === "formal" ? renderFormalDesign() : renderCasualDesign()}
      </div>
    </section>
  );
};

export default SkillSet;
