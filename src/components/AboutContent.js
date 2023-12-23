import React from "react";
import { Link } from "react-scroll";

const AboutContent = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">About this site</p>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
        I am delighted to present my comprehensive body of work. My portfolio is a reflection of my dedication to excellence in web development and a testament to my commitment to the evolving field of technology.
        </div>
        <br></br>
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
        I invite you to explore my projects, which are a blend of creativity and technical expertise. For further insights into my professional journey and to connect with me, I encourage you to visit my LinkedIn profile. Your interest and time are greatly appreciated.
        </div>
        <br></br>
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
