import React, { useCallback, useEffect, useState } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./UI/Modal";
import { wordExperienceContents } from "../utility";
import { getSliderSettings, SectionTitle } from "../utils/commonUtils";

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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

  const sliderSettings = getSliderSettings(open);

  return (
    <section className="py-32 bg-gray-200" id="experiences">
      <SectionTitle className="bg">
        Work Experience
      </SectionTitle>
      <div className="flex justify-around m-auto max-w-sm sm:max-w-md lg:max-w-lg gap-2 wrap mt-5">
        {wordExperienceContents.map((doc, index) => (
          <div key={index} className="text-center mb-3">
            <div onClick={() => openModal(doc.src)} className="cursor-pointer relative group">
              <img src={doc.src} alt="Click to view" className="group-hover:opacity-40"/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full px-4 py-2 cursor-pointer">
                <span className="text-white font-semibold">
                  Expand {doc.title}
                </span>
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

      {/* --------Bittreo------- */}
      <div className="container max-w-6xl mx-auto my-48">
        <div className="flex justify-between items-center text-lg mt-20">
          <div className="ml-10 mr-10">
            <h1 className="text-7xl mt-2">Bittreo</h1>
            <div className="font-light my-2">
              Apr, 2022 - Current : Full Stack Developer
            </div>
            <p className="my-12 text-xl max-w-4xl w-full text-gray-600">
              Bittreo is a Vancouver based over-the-counter buy and sell
              cryptocurrency platform. The platform is solely used by the
              owners, and employees of Bittreo to expedite their daily business
              operations. Additionally, services and data structure in the
              platform conform with Fintrac regulations and provide in-depth
              support for BI reporting.
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
              The Bittreo platform incorporates core market functionalities from
              an online cryptocurrency exchange, Binance. Market orders based on
              customer variables and asset details are performed and displayed
              appropriately to improve the daily processes of a Bittreo platform
              user.
            </p>
            <p className="underline">
              Technology used for the development of Bittreo include Node,
              Express, MongoDB, Vue and AWS infrastructure including Route53,
              Code Deploy, ACM, EC2, ALB, and RDS.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Slick {...sliderSettings}>
            <li className="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/bittreo/login.png`}
                alt=""
              />
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

      <div className="my-20"></div>

      {/* Website  */}
      <div className="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div className="flex flex-wrap justify-between gap-6 mx-5">
          <div>
            <h1 className="text-4xl text-white">Vancouver Bitcoin Website</h1>
            <a
              href="https://vancouverbitcoin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="max-w-md min-w-full my-5 bg-gray-700 hover:bg-white hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Visit Website
              </button>
            </a>
          </div>
          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              Vancouver Bitcoin is a Wordpress website built for a crypto
              brokerage.
            </p>
            <p className="underline">
              The website utilizes WordPress with Elementor, HTML, CSS,
              Javascript, PHP, MariaDB, Docker, and Node hosted on an AWS.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Slick {...sliderSettings}>
            <li className="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-home.png`}
                alt=""
              />
              <div className="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                1. Vancouver Bitcoin Homepage
              </div>
            </li>
            <li className="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-blog.png`}
                alt=""
              />
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

      <div className="my-80"></div>

      {/* --------Massive Sapporo------- */}

      <div className="container max-w-6xl mx-auto my-48">
        <div className="flex justify-between items-center text-lg mt-20">
          <div className="ml-10 mr-10">
            <h1 className="text-7xl mt-2">Massive Sapporo</h1>
            <div className="font-light my-2">
              June, 2018 - May,2019 : Web Developer
            </div>
            <p className="my-12 text-xl max-w-4xl w-full text-gray-600">
              Massive Sapporo is the company that manages inbound and real
              estate business in Japan. Especially, they operates Vacation
              rentals(Airbnb), Unmanned hotels, Shared offices/houses, and
              Entertainment facilities called Ninja Dojo for overseas tourists.
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
            <a
              href="http://hokkaido-ninjado.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="max-w-md min-w-full my-5 bg-gray-700 hover:bg-white hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Visit Website
              </button>
            </a>
          </div>

          <div className="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              Hokkaido Ninjado is one part of entertainment facility. Decendants
              of Ninja teach people the history of Ninja. People can also
              experience Ninja training. They advertise Ninja atraction with
              Website and Airbnb platform.
            </p>
            <p className="underline">
              Technology used for the website is Wordpress, php. Also Adobe
              Premieor and Photoshop are used for contents.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Slick {...sliderSettings}>
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
      <div className="my-40"></div>
    </section>
  );
};

export default Experience;
