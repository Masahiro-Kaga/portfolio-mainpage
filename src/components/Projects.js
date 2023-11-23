import React from "react";

import { portfolioContents } from "../utility";

const Projects = () => {
  return (
    <section className="py-32 bg-gray-200" id="project">
      <div className="container max-w-6xl mx-auto">
        <p className="font-dosis font-bold text-4xl text-center py-20">
          Projects
        </p>
        <p className="my-5 text-lg text-center text-gray-600">
          Please check out my individual works.
        </p>
        <div className="border-2 rounded-lg mx-10">
          <p className="mt-2 text-lg text-center text-gray-600 italic font-bold">
            NOTE:THERE ARE TWO BUTTONS in each boxes.
          </p>
          <div className="mt-2 text-lg text-center text-gray-600">
            <p>You can go to portpholio pages with clicking</p>
            <div
              href="https://portfolio-blog-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-500 rounded-md"
            >
              Go to Page
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="mt-2">Also check Github pages with clicking</p>
            <div className="my-2 bg-white rounded-lg w-10 h-10 mx-auto animate-pulse">
              <img src="img/github-icon.svg" alt="Github code page" />
            </div>
          </div>
        </div>

        {/* Stand out AI App Portfolio------------------------------------------------------------- */}

        <div
          className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
          id="AIapp"
        >
          <div className="relative flex flex-col items-center justify-between col-span-12 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <a
                href="https://mkportfolio.link/"
                target="_blank"
                rel="noreferrer"
                className="relative group block"
              >
                <img
                  className="rounded-t-lg group-hover:opacity-20"
                  src="img/work/gif/aiapp.gif"
                  alt="AI app with React MERN stack"
                />
                <span className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold">
                  Go to Page
                </span>
              </a>
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  <span className="blink text-red-500"> NEW! </span>
                  AI Play Ground App
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>MERN, Redux, AWS, Typescript, MUI
                  {/* ,Authentication */}
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://mkportfolio.link/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Go to Page
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <a
                    href="https://github.com/Masahiro-Kaga/gpt-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white rounded-lg w-10 h-10 animate-pulse">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Portfolio Contents------------------------------------------------------------- */}
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {portfolioContents.map((content) => {
            return (
              <div
              key={content.title}
              className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl"
            >
              <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
                <a
                  href={content.pageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group block"
                >
                  <img
                    className="rounded-t-lg group-hover:opacity-20"
                    src={content.imageUrl}
                    alt={content.imageAlt}
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold">
                    Go to Page
                  </span>
                </a>
                <div className="p-5 bg-gray-800 rounded-b-xl">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {content.isNew && <span className="blink text-red-500"> NEW! </span>}
                    {content.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-400">
                    Key features :<br></br>
                    {content.keyFeatures}
                    {/* ,Authentication */}
                  </p>
                  <div className="relative flex flex-row justify-between">
                    <div>
                      <a
                        href={content.pageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Go to Page
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    {content.githubUrl && (
                      <a
                        href="https://github.com/Masahiro-Kaga/practiceFour"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="bg-white rounded-lg w-10 h-10 animate-pulse">
                          <img src="img/github-icon.svg" alt="Github code page" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
