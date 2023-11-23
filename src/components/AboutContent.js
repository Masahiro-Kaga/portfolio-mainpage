import React from "react";
import { Link } from "react-scroll";

const AboutContent = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">About this site</p>
        <br />
        <p className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          Thank you for your visit. Here is Masa's portfolio website. I showcase
          my masterpieces <Link to="project" smooth={true} className="text-blue-500 underline cursor-pointer">(AI App and so on)</Link> and my skill sets.I would like you to know more about
          me. Please be my guest and take your time. More details and contact me, please visit my LinkedIn.
        </p>
        <div className="flex gap-2">
          <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition shadow text-white font-semibold">
            <a href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/" target="_blank" rel="noreferrer" className="px-4 py-2 block">
              Visit LinkedIn
            </a>
          </button>
          <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition shadow text-white font-semibold">
            <Link to="project" smooth={true} className="px-4 py-2 block">
              My Projects
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
