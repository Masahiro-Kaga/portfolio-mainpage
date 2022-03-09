import React, { useState, useEffect } from "react";
import { animateScroll, Link } from "react-scroll";
import content from "../../content";
import "./Navigation.css";

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDropdownHandler = (event) => {
    event.preventDefault();
    setIsOpenMenu(!isOpenMenu);
  };

  const scrolledWindow = () => {
    const element = document.getElementById("navbar");
    if (window.scrollY > 500) {
      element.classList.add("bg-gray-800");
    } else {
      element.classList.remove("bg-gray-800");
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      // event.preventDefault();
      event.stopPropagation();
      if (
        (!event.target.closest("#dropdownButton") &&
          !event.target.closest("#dropdownMenuButton") &&
          !isOpenMenu) ||
        event.target.closest("#dropdownMenuButton li")
      ) {
        setIsOpenMenu(false);
      }
    });
  }, [isOpenMenu]);

  window.addEventListener("scroll", scrolledWindow);

  return (
    <div style={{ background: "#white" }}>
      <nav
        className="px-10 sm:px-20 py-5 fixed top-0 left-0 w-full transition-colors duration-1000 z-50"
        id="navbar"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <button onClick={animateScroll.scrollToTop} className="flex">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white font-dosis">
              {content.nav.logo}
            </span>
            <span className="h-2 w-2 bg-sky-500 inline-block rounded-full self-end"></span>
          </button>
          <div className="relative">
            <button
              type="button"
              className="md:hidden text-gray-500 w-10 h-10 relative rounded-lg focus:outline-none bg-gray-800 border-2"
              onClick={toggleDropdownHandler}
              id="dropdownButton"
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
              className={`md:hidden min-w-max absolute left-0 text-base z-50 py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none bg-gray-800 ${
                !isOpenMenu ? "translate-x-52" : "transition-x-0"
              } ease-in-out duration-300`}
              aria-labelledby="dropdownMenuButton"
              id="dropdownMenuButton"
            >
              <li>
                <Link
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600 cursor-pointer"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skillset
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600 cursor-pointer"
                  activeClass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 cursor-pointer"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-700 rounded-xl cursor-pointer"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skillset
                </Link>
              </li>

              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-700 rounded-xl cursor-pointer"
                  activeClass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-700 rounded-xl cursor-pointer"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>

              {/* {content.nav.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-700 rounded-xl"
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
