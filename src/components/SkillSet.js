import React from "react";
import portfolioData from "../utility";
import { SkillIcon, SectionTitle } from "../utils/commonUtils";

const SkillSet = ({ pageType = "job", styleType = "casual" }) => {
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

  const frontEndTech = createSkillList(portfolioData.stack.tech_frontend);
  const backEndTech = createSkillList(portfolioData.stack.tech_backend);
  const devTool = createSkillList(portfolioData.stack.tech_devtool);
  const media = createSkillList(portfolioData.stack.tech_media);

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

  // プロフェッショナル用のシンプルなスキルリストアイテム
  const ProfessionalSkillItem = ({ skillName }) => {
    return (
      <div className="mb-2">
        <span className="text-gray-700 font-medium">{skillName}</span>
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
    </>
  );

  // フォーマルなデザインのレンダリング
  const renderFormalDesign = () => (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {/* Frontend Skills */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
              Frontend Development
            </h3>
            <div className="space-y-3">
              <ProfessionalSkillItem skillName="React.js" />
              <ProfessionalSkillItem skillName="JavaScript" />
              <ProfessionalSkillItem skillName="TypeScript" />
              <ProfessionalSkillItem skillName="HTML5" />
              <ProfessionalSkillItem skillName="CSS3" />
              <ProfessionalSkillItem skillName="Tailwind CSS" />
              <ProfessionalSkillItem skillName="Bootstrap" />
              <ProfessionalSkillItem skillName="Vue.js" />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-600 pb-2">
              Backend Development
            </h3>
            <div className="space-y-3">
              <ProfessionalSkillItem skillName="Node.js" />
              <ProfessionalSkillItem skillName="Express.js" />
              <ProfessionalSkillItem skillName="Python" />
              <ProfessionalSkillItem skillName="Django" />
              <ProfessionalSkillItem skillName="MySQL" />
              <ProfessionalSkillItem skillName="PostgreSQL" />
              <ProfessionalSkillItem skillName="MongoDB" />
              <ProfessionalSkillItem skillName="RESTful API" />
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-600 pb-2">
              Development Tools
            </h3>
            <div className="space-y-3">
              <ProfessionalSkillItem skillName="Git" />
              <ProfessionalSkillItem skillName="GitHub" />
              <ProfessionalSkillItem skillName="Docker" />
              <ProfessionalSkillItem skillName="AWS" />
              <ProfessionalSkillItem skillName="VS Code" />
              <ProfessionalSkillItem skillName="Postman" />
              <ProfessionalSkillItem skillName="Figma" />
              <ProfessionalSkillItem skillName="Slack" />
            </div>
          </div>

          {/* Media & Design */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-pink-600 pb-2">
              Media & Design
            </h3>
            <div className="space-y-3">
              <ProfessionalSkillItem skillName="Adobe Photoshop" />
              <ProfessionalSkillItem skillName="Adobe Premiere Pro" />
              <ProfessionalSkillItem skillName="Adobe Audition" />
              <ProfessionalSkillItem skillName="Blender" />
              <ProfessionalSkillItem skillName="UI/UX Design" />
              <ProfessionalSkillItem skillName="Figma" />
              <ProfessionalSkillItem skillName="Adobe XD" />
              <ProfessionalSkillItem skillName="Canva" />
            </div>
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
