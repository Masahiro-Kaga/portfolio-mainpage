import React from "react";
import Button from "./UI/Button";

const AboutContent = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">What Drives Me</p>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          I specialize in modern Web Development & Cloud Engineering, and take pride in crafting
          responsive and scalable solutions.
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
          I'm always excited to discuss new opportunities and explore how we can work together. Feel
          free to reach out - I'd love to hear about your projects and ideas.
        </div>{" "}
        <br></br>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="primary"
          >
            Contact Info
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
