import React from "react";
import portfolioData from "../utility";

const SkillSet = ({ pageType = "job", styleType = "casual" }) => {
  // フォーマル用のスキルマッピング関数（2列レイアウト用）
  const createSkillGrid = (techArray, isDark = true) => {
    // クラウドサービスの詳細情報
    const cloudServiceDetails = {
      AWS: [
        "EC2",
        "S3",
        "RDS", 
        "Lambda",
        "CloudFront",
        "Route 53",
        "IAM",
        "VPC",
        "ALB",
        "ECS/EKS",
        "CloudWatch"
      ],
      GCP: [
        "Vertex AI",
        "Google ADK",
        "Compute Engine",
        "Cloud Storage",
        "Cloud SQL",
        "Cloud Run",
        "App Engine",
        "Cloud CDN",
        "Cloud DNS"
      ]
    };

    return (
      <div className="w-full">
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
        
        {/* クラウドサービスの場合は詳細情報を表示 */}
        {techArray === portfolioData.stack.tech_cloud && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              {techArray.map((skill, index) => {
                const details = cloudServiceDetails[skill.alt];
                if (!details) return null;
                
                return (
                  <div key={`details-${skill.alt}-${index}`} className="border-t border-gray-200 pt-4">
                    <ul className="space-y-1 text-xs">
                      {details.map((service, serviceIndex) => (
                        <li 
                          key={serviceIndex} 
                          className={`${isDark ? "text-gray-300" : "text-gray-600"} flex items-center`}
                        >
                          <span className="mr-2">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // カジュアルデザイン用のスキルマッピング関数（元の構造）
  const createCasualSkillGrid = (techArray) => {
    return techArray.map((images, index) => {
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
  };

  // カジュアルなデザインのレンダリング
  const renderCasualDesign = () => {
    const aiTechCasual = createCasualSkillGrid(portfolioData.stack.tech_ai);
    const frontEndTechCasual = createCasualSkillGrid(portfolioData.stack.tech_frontend);
    const backEndTechCasual = createCasualSkillGrid(portfolioData.stack.tech_backend);
    const cloudTechCasual = createCasualSkillGrid(portfolioData.stack.tech_cloud);
    const devToolCasual = createCasualSkillGrid(portfolioData.stack.tech_devtool);
    const mediaCasual = createCasualSkillGrid(portfolioData.stack.tech_media);

    return (
      <>
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
              <p>Bronze</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mt-10 sm:grid-cols-8 px-2">
          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              AI Tools
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{aiTechCasual}</div>
          </div>

          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              Frontend
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{frontEndTechCasual}</div>
          </div>

          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              Backend
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{backEndTechCasual}</div>
          </div>

          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              Cloud Services
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{cloudTechCasual}</div>
          </div>

          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              Dev tools
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{devToolCasual}</div>
          </div>

          <div className="flex flex-col col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-800 rounded-xl">
            <h4 className="text-[2rem] font-medium text-white font-dosis text-center">
              Media & Design
            </h4>
            <div className="flex flex-wrap justify-center items-center flex-1">{mediaCasual}</div>
          </div>
        </div>
      </>
    );
  };

  // フォーマルなデザインのレンダリング
  const renderFormalDesign = () => (
    <>
      <div className="max-w-6xl mx-2">
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
    <section className="py-32 bg-gray-100" id="skills">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl py-20 font-bold text-center font-dosis">
          Tech Stack
        </h2>
        {styleType === "formal" ? renderFormalDesign() : renderCasualDesign()}
      </div>
    </section>
  );
};

export default SkillSet;
