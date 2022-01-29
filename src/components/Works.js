import React from "react";

const Works = () => {
  return (
    <section class="py-20 bg-white">
      <div class="container max-w-6xl mx-auto">
        <p className="font-dosis font-bold text-4xl text-center my-20">
          Works
        </p>
        <p class="mt-2 text-lg text-center text-gray-600">
          Please check out our list of awesome work below.
        </p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div class="relative flex flex-col items-center justify-between col-span-4 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="img/work/work1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
{/* ------------------------------------------------------------- */}
          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 8a3 3 0 0 1 0 6"></path>
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Notifications</h4>
            <p class="text-base text-center text-gray-500">
              Send out notifications to all your customers to keep them engaged.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
                <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Bundles</h4>
            <p class="text-base text-center text-gray-500">
              High-quality bundles of awesome tools to help you out.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l3 3l-3 3"></path>
                <line x1="13" y1="15" x2="16" y2="15"></line>
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Developer Tools</h4>
            <p class="text-base text-center text-gray-500">
              Developer tools to help grow your application and keep it
              up-to-date.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="9.5" y1="11" x2="9.51" y2="11"></line>
                <line x1="14.5" y1="11" x2="14.51" y2="11"></line>
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Building Blocks</h4>
            <p class="text-base text-center text-gray-500">
              The right kind of building blocks to take your company to the next
              level.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="15" y1="5" x2="15" y2="7"></line>
                <line x1="15" y1="11" x2="15" y2="13"></line>
                <line x1="15" y1="17" x2="15" y2="19"></line>
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Coupons</h4>
            <p class="text-base text-center text-gray-500">
              Coupons system to provide special offers and discounts for your
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
