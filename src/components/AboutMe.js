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
        <div className="w-full flex flex-wrap items-center justify-around">
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
          <div className="flex flex-col md:px-3 text-left my-20">
            <div className="max-w-2xl pb-6 space-y-8 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
                <span className="block xl:inline">My</span>
                <span className="block text-indigo-600 xl:inline ml-3">Journey</span>
              </h1>

              {/* プロフィール紹介 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏔️</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    From Hokkaido to the World
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Born and raised in beautiful Hokkaido, Japan. Started my career with over a decade
                  of dedicated service in the prefectural government.
                </p>
              </div>

              {/* 転機 */}
              <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">✈️</span>
                  <h3 className="text-xl font-semibold text-gray-800">The Big Move</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  At 31, I took a leap of faith to explore the world. This international journey led
                  me to Canada, where I now call home.
                </p>
              </div>

              {/* 現在の活動 */}
              <div className="bg-green-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💻</span>
                  <h3 className="text-xl font-semibold text-gray-800">Web Development Passion</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With a solid background in web development, I bring:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Wealth of experience from diverse backgrounds
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unique perspective combining government and tech experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    International mindset and adaptability
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-indigo-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤝</span>
                  <h3 className="text-xl font-semibold text-gray-800">Let's Collaborate</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm eager to contribute my expertise to your projects and bring fresh perspectives
                  to your team. Ready to create something amazing together!
                </p>
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
