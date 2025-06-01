import React from "react";
import Slider from "./UI/Slider";
// import { Document, Page } from "react-pdf";
// import Modal from "./UI/Modal";
// import { wordExperienceContents } from "../utility";

// const pdfFile =
//   process.env.PUBLIC_URL + "/contents/resume_MasahiroKaga(20221228).pdf";

const AboutMe = () => {
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
        <div className="w-full flex flex-wrap items-start justify-around">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 overflow-hidden">
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
          <div className="flex flex-col md:px-3 text-left mt-0">
            <div className="max-w-2xl pb-6 space-y-8 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
                <span className="block xl:inline">My</span>
                <span className="block text-indigo-600 xl:inline ml-3">Journey</span>
              </h1>

              {/* 政府での経験 */}
              <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Government Career Foundation
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Over a decade of dedicated service with Hokkaido Prefectural Government, leading
                  high-impact projects, organizing cross-departmental teams, and delivering
                  strategic solutions that improved public services for thousands of citizens.
                </p>
              </div>

              {/* 世界への挑戦 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    From Hokkaido to the World
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging government experience, took the leap at 31 to explore the global tech
                  landscape. This journey led me through Australia and Philippines before settling
                  in Canada, where I enrolled in Langara College to study Computer Science.
                </p>
              </div>

              {/* 自社開発経験 */}
              <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Corporate Development Experience
                  </h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <ul className="space-y-2 text-sm">
                    <li>
                      •{" "}
                      <strong>
                        Bittreo - Cryptocurrency Trading Platform
                      </strong>
                    </li>
                    <li>
                      • <strong>Massive Sapporo - Corporate Website</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* フリーランス経験統合 */}
              <div className="bg-green-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Freelance Development Experience
                  </h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <ul className="space-y-2 text-sm">
                    <li>
                      •{" "}
                      <strong>
                        Vendor Marketing System for Amazon-related Services
                      </strong>
                    </li>
                    <li>
                      •{" "}
                      <strong>
                        Development of Corporate Promotional Website and Application
                        Developer
                      </strong>
                    </li>
                    <li>
                      •{" "}
                      <strong>
                        Project Management for a Major Real Estate Management Application
                      </strong>
                    </li>
                    <li>
                      • <strong>3D System in the Construction Industry</strong>
                    </li>
                    <li>
                      •{" "}
                      <strong>
                        Bot and Image Generation Test System Using the ChatGPT API
                      </strong>
                    </li>
                    <li>
                      •{" "}
                      <strong>
                        Community Website for Hokkaido Residents Living in Canada
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-around m-auto max-w-sm sm:max-w-md lg:max-w-lg gap-2 wrap mt-5">
              {wordExperienceContents.map((doc, index) => (
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
