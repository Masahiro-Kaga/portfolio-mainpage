import React, { useState } from "react";

const Works = () => {
  const [loadedDaiaryImage, setLoadedDaiaryImage] = useState(false);
  const [loadedECImage, setLoadedECImage] = useState(false);
  console.log(`Load status: DairyApp[${loadedDaiaryImage}] , ECWebapp[${loadedECImage}]`);

  return (
    <section className="py-32 bg-white" id="works">
      <div className="container max-w-6xl mx-auto">
        <p className="font-dosis font-bold text-4xl text-center my-20">Works</p>
        <p className="mt-2 text-lg text-center text-gray-600">
          Please check out my list of awesome works below.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

          {/* Portfolio 3------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/gif/blogapp.gif"
                alt="Blog App with Next.js"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Blog App
                </h5>

                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>NextJS ,EmotionCSS
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://portfolio-blog-app.vercel.app/"
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
                    href="https://github.com/Masahiro-Kaga/portfolio-blog-app"
                    target="_blank"
                    rel="noreferrer"
                    color="white"
                  >
                    <div className="bg-white rounded-lg w-10 h-10">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio 2------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/jpg/diaryapp.jpg"
                alt="Diary app with React MERN stack"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Diary app
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>MERN, Redux, Axios, Cloudinary
                  {/* ,Authentication */}
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://note-app-masamern.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {loadedDaiaryImage ? "Go to Page" : "Loading"}
                      <figure className="hidden">
                        <img src="https://note-app-masamern.herokuapp.com/diarylogo_navbar.png" alt="wakeking up heroku" onLoad={()=>setLoadedDaiaryImage(true)}/>
                      </figure>
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
                    href="https://github.com/Masahiro-Kaga/practiceFour"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white rounded-lg w-10 h-10">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Portfolio 1------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/gif/shootinggame.gif"
                alt="javascript shooting game"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Shooting game
                </h5>

                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>VanilaJS, Canvas
                </p>
                <div className="flex flex-row justify-between">
                  <div>
                    <a
                      href="https://masahiro-kaga.github.io/portfolio-santa-shooting/"
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
                    href="https://github.com/Masahiro-Kaga/portfolio_SantaShooting"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white rounded-lg w-10 h-10 ">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio 4------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/gif/ecommerce.gif"
                alt="Ecommerce website with MERN stack"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  ECommerce website
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>MERN, FetchAPI, MUI, CI/CD,
                  Authentication
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://masaecwebsite.netlify.app/viewActiveProducts"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {loadedECImage ? "Go to Page" : "Loading"}
                      <figure className="hidden">
                        <img src="https://masaecwebsite.netlify.app/images/product_icon.png" alt="wakeking up heroku" onLoad={()=>setLoadedECImage(true)}/>
                      </figure>
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
                  <div className="flex">
                    <a
                      href="https://github.com/Masahiro-Kaga/portfolio-ECwebsite-clientside"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-white rounded-lg w-auto h-8 flex mr-1">
                        <p className="text-[13px] text-center self-center ml-1 leading-3">
                          Client<br></br>Side
                        </p>
                        <img src="img/github-icon.svg" alt="Github code page" />
                      </div>
                    </a>
                    <a
                      href="https://github.com/Masahiro-Kaga/portfolio-ECwebsite-serverside"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-white rounded-lg w-auto h-8 flex ml-1">
                        <p className="text-[13px] text-center self-center ml-1 leading-3">
                          Server<br></br>Side
                        </p>
                        <img src="img/github-icon.svg" alt="Github code page" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio 5------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/gif/mainpage.gif"
                alt="Portfolio main page"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Main Portfolio Page
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>React, TailwindCSS, Netlify Form
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://masaportfolio.netlify.app/"
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
                    href="https://github.com/Masahiro-Kaga/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white rounded-lg w-10 h-10">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio 6------------------------------------------------------------- */}

          <div className="relative flex flex-col items-center justify-between col-span-4 space-y-4 my-10 overflow-hidden rounded-xl">
            <div className="max-w-sm rounded-lg border border-gray-200 shadow-md flex-grow">
              <img
                className="rounded-t-lg"
                src="img/work/gif/proto_portfolio.gif"
                alt="Portfolio proto"
              />
              <div className="p-5 bg-gray-800 rounded-b-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  [Proto]Portfolio toppage
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Key features :<br></br>Bootstrap, VanilaJS
                </p>
                <div className="relative flex flex-row justify-between">
                  <div>
                    <a
                      href="https://masahiro-kaga.github.io/portfolio-mainpage-proto/"
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
                    href="https://github.com/Masahiro-Kaga/portfolio-mainpage-proto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white rounded-lg w-10 h-10">
                      <img src="img/github-icon.svg" alt="Github code page" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
