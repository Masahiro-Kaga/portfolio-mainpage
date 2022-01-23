import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import content from "../../content";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDropdownHandler = (event) => {
    event.preventDefault();
    let element = document.getElementById("hiddenClass");
    element.classList.toggle("hidden");
    setIsOpenMenu(!isOpenMenu);
    console.log(isOpenMenu);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white font-dosis">
              {content.nav.logo}
            </span>
          </a>
          <div className="relative">
            <button
              type="button"
              className="md:hidden text-gray-500 w-10 h-10 relative rounded-lg focus:outline-none bg-slate-500"
              onClick={toggleDropdownHandler}
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto">
                <span
                  aria-hidden="true"
                  className={`block relative h-0.5 w-5 bg-slate-200 transform transition duration-500 ease-in-out ${
                    isOpenMenu ? "opacity-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block relative  h-0.5 w-5 bg-slate-200 transform transition duration-500 ease-in-out ${
                    isOpenMenu ? "opacity-1" : ""
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block relative  h-0.5 w-5 bg-slate-200 transform  transition duration-500 ease-in-out ${
                    isOpenMenu ? "opacity-0" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
            <ul
              id="hiddenClass"
              className=" min-w-max absolute right-0 text-base z-50 float-right py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
