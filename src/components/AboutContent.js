import React from "react";
import Button from "./UI/Button";
import { externalLinkProps } from "../utils/commonUtils";

const AboutContent = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">Introduction</p>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          Thank you for visiting my portfolio. I specialize in modern web development and take pride
          in crafting <span className="font-semibold">responsive</span> and{" "}
          <span className="font-semibold">scalable</span> solutions.
        </div>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          I'm currently exploring{" "}
          <span className="font-semibold">AI-powered development workflows</span> and building
          cross-platform applications using{" "}
          <span className="font-semibold">Model Context Protocol (MCP)</span>. My work focuses on
          optimizing <span className="font-semibold">development efficiency</span> and reinforcing{" "}
          <span className="font-semibold">security best practices</span>.
        </div>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          I invite you to explore my projects. For more about my experience or to connect, please
          visit my LinkedIn profile.
        </div>{" "}
        <br></br>
        <div className="flex gap-2">
          <Button
            href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/"
            variant="primary"
            {...externalLinkProps}
          >
            Visit LinkedIn
          </Button>
          {/* <Button 
            onClick={() => {
              const element = document.getElementById('project');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="primary"
          >
            My Projects
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
