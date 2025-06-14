import Button from "./UI/Button";
import { externalLinkProps } from "../utils/commonUtils";

const AboutContent = ({ pageType = "job" }) => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">Riding the NEW TECH Wave</p>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          I deliver cutting-edge Web Development & Cloud Engineering solutions that drive real business results. 
          Transforming complex requirements into efficient, scalable applications.
        </div>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          Specializing in{" "}
          <span className="font-semibold">AI integration</span>{" "}
          and{" "}
          <span className="font-semibold">intelligent automation</span> to build 
          next-generation applications that give your business a competitive edge.
        </div>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
          Ready to accelerate your project with proven AI expertise? 
          Let's discuss how we can exceed your expectations.
        </div>

        {/* スペースを増やしてボタンを配置 */}
        <div className="mt-12">
          <div className="flex gap-2">
            {/* Freelanceモードの場合はContact Infoボタンのみ表示 */}
            {pageType === "freelance" && (
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="primary"
              >
                Contact Info
              </Button>
            )}

            {/* Jobモードの場合はVisit LinkedInボタンのみ表示 */}
            {pageType === "job" && (
              <Button
                href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/"
                variant="primary"
                {...externalLinkProps}
              >
                Visit LinkedIn
              </Button>
            )}

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
    </div>
  );
};

export default AboutContent;
