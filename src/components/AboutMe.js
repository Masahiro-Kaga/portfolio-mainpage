import React from "react";
import Slider from "./UI/Slider";
// import { Document, Page } from "react-pdf";
// import Modal from "./UI/Modal";
// import { resumeDocuments } from "../utility";

// const pdfFile =
//   process.env.PUBLIC_URL + "/contents/resume_MasahiroKaga(20221228).pdf";

const AboutMe = ({ pageType = "job", styleType = "casual" }) => {
  // const [selectedImage, setSelectedImage] = useState(null);

  // const openModal = (imgSrc) => {
  //   setSelectedImage(imgSrc);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

  // useEffect(() => {
  //   if (selectedImage) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [selectedImage]);

  return (
    <section className="w-full min-h-screen md:flex px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <h2 className="text-4xl py-20 font-bold text-center font-dosis bg mb-16">About Me</h2>
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-around lg:gap-8">
          <div className="max-w-sm mx-auto lg:mx-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 overflow-hidden flex-shrink-0 mb-8 lg:mb-0">
            <Slider></Slider>
            <div className="p-5">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name : Masahiro Kaga
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hometown : Hokkaido, Japan
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Education : Langara College
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Major : Computer Science
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hobby : Snowboard
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:px-3 text-left flex-1 min-w-0">
            <div className="pb-6 space-y-8 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-12 mb-12 md:mt-8 md:mb-8 lg:text-left lg:mt-0 lg:mb-8">
                {styleType === "formal" ? (
                  <>
                    <span className="inline">Career</span>
                    <span className="text-indigo-600 inline ml-3">Timeline</span>
                  </>
                ) : (
                  <>
                    <span className="inline">My</span>
                    <span className="text-indigo-600 inline ml-3">Journey</span>
                  </>
                )}
              </h1>

              {styleType === "formal" ? (
                // Formal Timeline Style
                <div className="relative">
                  {/* Timeline Header */}

                  {/* Timeline Container */}
                  <div className="relative w-full">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 w-full">
                      {/* Government Career */}
                      <div className="relative flex items-start w-full">
                        <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full shadow-md"></div>
                        <div className="ml-16 w-full pr-4">
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold inline-block mb-2">
                            2002 - 2014
                          </div>
                          <div className="bg-transparent rounded-lg p-4 shadow-md">
                            <h3 className="font-bold text-gray-900 mb-1">
                              Hokkaido Prefectural Government
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Over a decade of dedicated service leading high-impact projects,
                              organizing cross-departmental teams, and delivering strategic
                              solutions for public services.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Language Study & Philippines */}
                      <div className="relative flex items-start w-full">
                        <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full shadow-md"></div>
                        <div className="ml-16 w-full pr-4">
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold inline-block mb-2">
                            2015 - 2018
                          </div>
                          <div className="bg-transparent rounded-lg p-4 shadow-md">
                            <h3 className="font-bold text-gray-900 mb-1">
                              Preparation for Being a Global Engineer
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Studied Engineering while working as a tour guide in the Philippines
                              and managing Airbnb properties to gain international experience.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="relative flex items-start w-full">
                        <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full shadow-md"></div>
                        <div className="ml-16 w-full pr-4">
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold inline-block mb-2">
                            2019 - 2021
                          </div>
                          <div className="bg-transparent rounded-lg p-4 shadow-md">
                            <h3 className="font-bold text-gray-900 mb-1">Langara College</h3>
                            <p className="text-gray-600 text-sm">
                              Enrolled in Computer Science Program focusing on software development,
                              data structures, algorithms, and web technologies.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Corporate & Freelance Development */}
                      <div className="relative flex items-start w-full">
                        <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full shadow-md"></div>
                        <div className="ml-16 w-full pr-4">
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold inline-block mb-2">
                            2021 - Present
                          </div>
                          <div className="bg-transparent rounded-lg p-4 shadow-md mb-4">
                            <h3 className="font-bold text-gray-900 mb-2">Corporate Developer</h3>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div>• Bittreo - Cryptocurrency Trading Platform</div>
                              <div>• Massive Sapporo - Corporate Website</div>
                            </div>
                          </div>
                          <div className="bg-transparent rounded-lg p-4 shadow-md">
                            <h3 className="font-bold text-gray-900 mb-2">Freelance Developer</h3>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div>• Amazon-related Vendor Marketing System</div>
                              <div>• Corporate Promotional Website & Application</div>
                              <div>• Real Estate Management Application PM</div>
                              <div>• Construction Industry 3D System</div>
                              <div>• ChatGPT API Bot & Image Generation System</div>
                              <div>• Community Website for Hokkaido Residents in Canada</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Casual Card Style (existing design)
                <>
                  {/* 政府での経験 */}
                  <div className="bg-slate-50 shadow-sm rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Government Career Foundation
                      </h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">
                      Over a decade of dedicated service with Hokkaido Prefectural Government,
                      leading high-impact projects, organizing cross-departmental teams, and
                      delivering strategic solutions that improved public services for thousands of
                      citizens.
                    </p>
                  </div>

                  {/* 世界への挑戦 */}
                  <div className="bg-gray-50 shadow-sm rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        From Hokkaido to the World
                      </h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">
                      Leveraging government experience, took the leap at 31 to explore the global
                      tech landscape. This journey led me through Australia and Philippines before
                      settling in Canada, where I enrolled in Langara College to study Computer
                      Science.
                    </p>
                  </div>

                  {/* 自社開発経験 */}
                  <div className="bg-purple-50 shadow-sm rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Corporate Development Experience
                      </h3>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <ul className="space-y-2 text-sm">
                        <li>
                          • <strong>Bittreo - Cryptocurrency Trading Platform</strong>
                        </li>
                        <li>
                          • <strong>Massive Sapporo - Corporate Website</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* フリーランス経験統合 */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 shadow-sm rounded-xl p-6">
                    <div className="flex items-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Freelance Development Journey
                      </h3>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Amazon Vendor Marketing System
                          </h4>
                          <p className="text-sm text-gray-600">E-commerce automation platform</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Corporate Promotional Website & App
                          </h4>
                          <p className="text-sm text-gray-600">Full-stack development project</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Real Estate Management Application PM
                          </h4>
                          <p className="text-sm text-gray-600">Project management & development</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            3D Construction Industry System
                          </h4>
                          <p className="text-sm text-gray-600">Advanced visualization platform</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            ChatGPT API Bot & Image Generation
                          </h4>
                          <p className="text-sm text-gray-600">AI integration & testing system</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white bg-opacity-60 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <div>
                          <h4 className="font-medium text-gray-800">Hokkaido Community Website</h4>
                          <p className="text-sm text-gray-600">
                            Community platform for Canadian residents
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <div className="flex justify-around m-auto max-w-sm sm:max-w-md lg:max-w-lg gap-2 wrap mt-5">
              {resumeDocuments.map((doc, index) => (
                <div key={index} className="text-center mb-3 relative">
                  <div
                    onClick={() => openModal(doc.src)}
                    className="cursor-pointer"
                  >
                    <img src={doc.src} alt="Click to view" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full px-4 py-2 cursor-pointer">
                      <span className="text-white font-semibold">
                        Check {doc.title}
                      </span>
                    </div>
                  </div>
                  <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition px-4 py-2 shadow text-white font-semibold">
                    <a href={doc.download} download={doc.download}>
                      Download PDF
                    </a>
                  </button>
                </div>
              ))}
              {selectedImage && (
                <Modal
                  isOpen={!!selectedImage}
                  closeModal={closeModal}
                  imgSrc={selectedImage}
                  altText="Selected document"
                />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
