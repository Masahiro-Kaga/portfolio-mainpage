import React, { useEffect, useState } from "react";
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
          <div className="flex flex-col md:px-3 text-center my-20">
            <div className="max-w-sm pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">What A Beautiful</span>
                <span className="block text-indigo-600 xl:inline">Life</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                I was born and raised in Hokkaido prefecture in Japan. I worked
                prefectual government over 11 years.
                <br />
                When I was 31 years old, I determined to persue my future dream
                which is to travel all over the world, then finally I am in
                Canada🇨🇦.
                <br />I already have experience as a web developer and would be
                happy to work with you.
              </p>
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
