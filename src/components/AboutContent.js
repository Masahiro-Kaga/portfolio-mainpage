import React from "react";
import Button from "./UI/Button";
import { externalLinkProps } from "../utils/commonUtils";

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
          <Button 
            href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/"
            variant="primary"
            {...externalLinkProps}
          >
            Visit LinkedIn
          </Button>
          <Button 
            onClick={() => {
              const element = document.getElementById('project');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="primary"
          >
            My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
