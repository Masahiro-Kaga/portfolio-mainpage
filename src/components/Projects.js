import React from "react";
import { portfolioContents } from "../utility";
import Button from "./UI/Button";
import { SectionTitle, ArrowRightIcon, externalLinkProps } from "../utils/commonUtils";

const Projects = () => {
  return (
    <section className="py-32 bg-gray-200" id="project">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle>
          Projects
        </SectionTitle>
        <p className="my-5 text-lg text-center text-gray-600">
          Please check out my individual works.
        </p>
        <div className="border-2 rounded-lg mx-10">
          <p className="mt-2 text-lg text-center text-gray-600 italic font-bold">
            NOTE:THERE ARE TWO BUTTONS in each boxes.
          </p>
          <div className="mt-2 text-lg text-center text-gray-600">
            <p>You can go to portpholio pages with clicking</p>
            <Button variant="secondary" size="sm" className="mt-2">
              Go to Page
              <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
            </Button>
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
                  <Button 
                    href="https://mkportfolio.link/"
                    variant="primary"
                    size="sm"
                    {...externalLinkProps}
                  >
                    Go to Page
                    <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
                  </Button>
                  <a
                    href="https://github.com/Masahiro-Kaga/gpt-app"
                    {...externalLinkProps}
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
                    <Button 
                      href={content.pageUrl}
                      variant="primary"
                      size="sm"
                      {...externalLinkProps}
                    >
                      Go to Page
                      <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
                    </Button>
                    {content.githubUrl && (
                      <a
                        href={content.githubUrl}
                        {...externalLinkProps}
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
