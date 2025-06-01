import React, { useCallback, useEffect, useState, useRef } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./UI/Modal";
import { wordExperienceContents } from "../utility";

const Experience = ({ pageType = "job" }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  // Freelanceモードでは"Cover Letter"と"Resume"を非表示にする
  const getFilteredDocuments = () => {
    if (pageType === "freelance") {
      const filtered = wordExperienceContents.filter(
        (doc) => !["Cover Letter", "Resume"].includes(doc.title)
      );
      console.log("🔧 Freelance mode: Hiding Cover Letter and Resume", {
        original: wordExperienceContents.length,
        filtered: filtered.length,
        hiddenItems: wordExperienceContents
          .filter((doc) => ["Cover Letter", "Resume"].includes(doc.title))
          .map((doc) => doc.title),
      });
      return filtered;
    }
    console.log("🔧 Job mode: Showing all documents", {
      total: wordExperienceContents.length,
    });
    return wordExperienceContents;
  };

  const filteredDocuments = getFilteredDocuments();

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // マウスホイール機能
  const handleWheel = useCallback((e, sliderRef) => {
    if (sliderRef.current) {
      // 横方向のスクロールまたは縦方向のスクロールを検出
      if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
        e.preventDefault();

        // スロットリング機能
        const now = Date.now();
        if (!sliderRef.current.lastWheelTime || now - sliderRef.current.lastWheelTime > 300) {
          sliderRef.current.lastWheelTime = now;

          // 右または下方向
          if (e.deltaX > 0 || e.deltaY > 0) {
            sliderRef.current.slickNext();
          }
          // 左または上方向
          else {
            sliderRef.current.slickPrev();
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setOpen(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, [resizeEvent]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: open ? 1 : 2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    initialSlide: 0,
  };

  return (
    <section className="py-32 bg-white" id="experiences">
      <h2 className="text-4xl font-bold text-center font-dosis bg mb-8">Work Experience</h2>
      <div className="flex justify-around m-auto max-w-sm sm:max-w-md lg:max-w-lg gap-2 wrap mt-5">
        {filteredDocuments.map((doc, index) => (
          <div key={index} className="text-center mb-3">
            <div onClick={() => openModal(doc.src)} className="cursor-pointer relative group">
              <img src={doc.src} alt="Click to view" className="group-hover:opacity-40" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full px-4 py-2 cursor-pointer">
                <span className="text-white font-semibold">Expand {doc.title}</span>
              </div>
            </div>
            <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition px-4 py-2 shadow text-white font-semibold">
              <a href={doc.download} download={doc.download}>
                Download PDF
              </a>
            </button>
          </div>
        ))}
        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            closeModal={closeModal}
            imgSrc={selectedImage}
            altText="Selected document"
          />
        )}
      </div>
      {/* --------Freelance------- */}
      <div className="container max-w-6xl mx-auto my-48">
        <div className="flex justify-between items-center text-lg mt-20">
          <div className="ml-10 mr-10">
            <h1 className="text-7xl mt-2">Freelance Projects</h1>
            <div className="font-light my-2">2024 - Present : Various Roles</div>
            <p className="my-12 text-xl max-w-4xl w-full text-gray-600">
              A diverse portfolio of freelance development projects spanning various industries and
              technologies. From e-commerce solutions to AI-powered applications, each project
              demonstrates adaptability and expertise across different technical stacks and business
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Freelance Projects List */}
      <div className="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-between gap-6 mx-5">
          <h1 className="text-4xl">Key Freelance Projects</h1>
          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Vendor Marketing System for Amazon-related Services
                </h3>
                <p className="text-lg">
                  Full-stack development of marketing automation platform for Amazon vendors with
                  data analytics and reporting capabilities.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Corporate Promotional Website and Application
                </h3>
                <p className="text-lg">
                  End-to-end development of corporate website with integrated web application for
                  client engagement and business operations.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Project Management for Major Real Estate Management Application
                </h3>
                <p className="text-lg">
                  Led project management and development coordination for comprehensive real estate
                  management platform with multi-user functionality.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  3D System in the Construction Industry
                </h3>
                <p className="text-lg">
                  Frontend development of 3D visualization system for construction project planning
                  and management with real-time rendering capabilities.
                </p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Bot and Image Generation Test System Using ChatGPT API
                </h3>
                <p className="text-lg">
                  AI integration development featuring automated bot interactions and image
                  generation using OpenAI's ChatGPT API with custom workflows.
                </p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Community Website for Hokkaido Residents Living in Canada
                </h3>
                <p className="text-lg">
                  WordPress-based community platform development with custom features for Japanese
                  expatriate community engagement and event management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20"></div>

      {/* --------Bittreo------- */}
      <div className="container max-w-6xl mx-auto my-48">
        <div className="flex justify-between items-center text-lg mt-20">
          <div className="ml-10 mr-10">
            <h1 className="text-7xl mt-2">Bittreo</h1>
            <div className="font-light my-2">Apr, 2022 - Sep, 2023 : Full Stack Developer</div>
            <p className="my-12 text-xl max-w-4xl w-full text-gray-600">
              Bittreo is a Vancouver based over-the-counter buy and sell cryptocurrency platform.
              The platform is solely used by the owners, and employees of Bittreo to expedite their
              daily business operations. Additionally, services and data structure in the platform
              conform with Fintrac regulations and provide in-depth support for BI reporting.
            </p>
            {/* <button className="max-w-md min-w-full my-5 bg-gray-700 hover:bg-transparent hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="https://bittreo.com/" target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </button> */}
          </div>
          <img
            className={`${open ? "hidden" : ""} max-w-lg`}
            alt=""
            src={`${process.env.PUBLIC_URL}/img/experience/bittreo/BITTREO.png`}
          />
        </div>
      </div>

      {/* Application  */}
      <div className="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-between gap-6 mx-5">
          <h1 className="text-4xl">Bittreo Application</h1>
          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              The Bittreo platform incorporates core market functionalities from an online
              cryptocurrency exchange, Binance. Market orders based on customer variables and asset
              details are performed and displayed appropriately to improve the daily processes of a
              Bittreo platform user.
            </p>
            <p className="underline">
              Technology used for the development of Bittreo include Node, Express, MongoDB, Vue and
              AWS infrastructure including Route53, Code Deploy, ACM, EC2, ALB, and RDS.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div onWheel={(e) => handleWheel(e, sliderRef1)}>
            <Slick ref={sliderRef1} {...sliderSettings}>
              <li className="mx-auto px-3">
                <img src={`${process.env.PUBLIC_URL}/img/experience/bittreo/login.png`} alt="" />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  1. Bittreo Login
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/bittreo/customer-management.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  2. Bittreo Customer Management
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/bittreo/customer-profile.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  3. Bittreo Customer Profile
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/bittreo/cash-management.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  4. Bittreo Cash Management
                </div>
              </li>
            </Slick>
          </div>
        </div>
      </div>

      <div className="my-20"></div>

      {/* Website  */}
      <div className="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-between gap-6 mx-5">
          {/* <div>
            <h1 className="text-4xl text-white">Vancouver Bitcoin Website</h1>
            <a href="https://vancouverbitcoin.com/" target="_blank" rel="noreferrer">
              <button className="max-w-md min-w-full my-5 bg-gray-700 hover:bg-white hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Visit Website
              </button>
            </a>
          </div> */}
          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <p>Vancouver Bitcoin is a Wordpress website built for a crypto brokerage.</p>
            <p className="underline">
              The website utilizes WordPress with Elementor, HTML, CSS, Javascript, PHP, MariaDB,
              Docker, and Node hosted on an AWS.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div onWheel={(e) => handleWheel(e, sliderRef2)}>
            <Slick ref={sliderRef2} {...sliderSettings}>
              <li className="mx-auto px-3">
                <img src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-home.png`} alt="" />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  1. Vancouver Bitcoin Homepage
                </div>
              </li>
              <li className="mx-auto px-3">
                <img src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-blog.png`} alt="" />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  2. Vancouver Bitcoin Blog
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-secondary-page.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  3. Vancouver Bitcoin OTC
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-ledger-template.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  4. Vancouver Bitcoin Ledger
                </div>
              </li>
            </Slick>
          </div>
        </div>
      </div>

      <div className="my-80"></div>

      {/* --------Massive Sapporo------- */}

      <div className="container max-w-6xl mx-auto my-48">
        <div className="flex justify-between items-center text-lg mt-20">
          <div className="ml-10 mr-10">
            <h1 className="text-7xl mt-2">Massive Sapporo</h1>
            <div className="font-light my-2">June, 2018 - May,2019 : Web Developer</div>
            <p className="my-12 text-xl max-w-4xl w-full text-gray-600">
              Massive Sapporo is the company that manages inbound and real estate business in Japan.
              Especially, they operates Vacation rentals(Airbnb), Unmanned hotels, Shared
              offices/houses, and Entertainment facilities called Ninja Dojo for overseas tourists.
            </p>
            {/* <button className="max-w-md min-w-full my-5 bg-gray-700 hover:bg-transparent hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://vancouverbitcoin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </button> */}
          </div>
          <img
            className={`${open ? "hidden" : ""} max-w-lg my-14 mx-4`}
            alt=""
            src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/logo-f.svg`}
          />
        </div>
      </div>

      {/* Website  */}
      <div className="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-between gap-6 mx-5">
          <div>
            <h1 className="text-4xl">NinjaDo Website</h1>
          </div>

          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              Hokkaido Ninjado is one part of entertainment facility. Decendants of Ninja teach
              people the history of Ninja. People can also experience Ninja training. They advertise
              Ninja atraction with Website and Airbnb platform.
            </p>
            <p className="underline">
              Technology used for the website is Wordpress, php. Also Adobe Premieor and Photoshop
              are used for contents.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div onWheel={(e) => handleWheel(e, sliderRef3)}>
            <Slick ref={sliderRef3} {...sliderSettings}>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-home.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  1. NinjaDo Home
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-application.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  2. NinjaDo Application Form
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-location.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  3. NinjaDo Location
                </div>
              </li>
              <li className="mx-auto px-3">
                <img
                  src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-photogallery.png`}
                  alt=""
                />
                <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                  4. NinjaDo Photo Gallery
                </div>
              </li>
            </Slick>
          </div>
        </div>
      </div>
      <div className="my-40"></div>
    </section>
  );
};

export default Experience;
