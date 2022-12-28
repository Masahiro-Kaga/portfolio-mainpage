import React, { useCallback, useEffect, useState } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillSet = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setOpen(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: open ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    arrows: false,
  };

  return (
    <section className="py-32 bg-gray-200" id="experiences">
      <h2 className="text-4xl py-20 font-bold text-center font-dosis bg">
        Work Experience
      </h2>

      {/* --------Bittreo------- */}
      <div className="container max-w-6xl mx-auto my-48">
        <div class="flex justify-between items-center text-lg mt-20">
          <div class="ml-10 mr-10">
            <h1 class="text-7xl mt-2">Bittreo</h1>
            <div class="font-light my-2">Apr, 2022 - Current : Full Stack Developer</div>
            <p class="my-12 text-xl max-w-4xl w-full text-gray-600">
              Bittreo is a Vancouver based over-the-counter buy and sell
              cryptocurrency platform. The platform is solely used by the
              owners, and employees of Bittreo to expedite their daily business
              operations. Additionally, services and data structure in the
              platform conform with Fintrac regulations and provide in-depth
              support for BI reporting.
            </p>
            {/* <button class="max-w-md min-w-full my-5 bg-gray-700 hover:bg-transparent hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="https://bittreo.com/" target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </button> */}
          </div>
          <img
            class={`${open ? "hidden" : ""} max-w-lg`}
            alt=""
            src={`${process.env.PUBLIC_URL}/img/experience/bittreo/BITTREO.png`}
          />
        </div>
      </div>

      {/* Application  */}
      <div class="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div class="flex flex-wrap justify-between gap-6 mx-5">
          <h1 class="text-4xl">Bittreo Application</h1>
          <div class="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              The Bittreo platform incorporates core market functionalities from
              an online cryptocurrency exchange, Binance. Market orders based on
              customer variables and asset details are performed and displayed
              appropriately to improve the daily processes of a Bittreo platform
              user.
            </p>
            <p class="underline">
              Technology used for the development of Bittreo include Node,
              Express, MongoDB, Vue and AWS infrastructure including Route53,
              Code Deploy, ACM, EC2, ALB, and RDS.
            </p>
          </div>
        </div>
        <div class="mt-16">
          <Slick {...sliderSettings}>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/bittreo/login.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                1. Bittreo Login
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/bittreo/customer-management.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                2. Bittreo Customer Management
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/bittreo/customer-profile.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                3. Bittreo Customer Profile
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/bittreo/cash-management.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                4. Bittreo Cash Management
              </div>
            </li>
          </Slick>
        </div>
      </div>

      <div class="my-20"></div>
     
      {/* Website  */}
      <div class="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div class="flex flex-wrap justify-between gap-6 mx-5">
          <div>
            <h1 class="text-4xl text-white">Vancouver Bitcoin Website</h1>
            <button class="max-w-md min-w-full my-5 bg-gray-700 hover:bg-white hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://vancouverbitcoin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </button>
          </div>
          <div class="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              Vancouver Bitcoin is a Wordpress website built for a crypto
              brokerage.
            </p>
            <p class="underline">
              The website utilizes WordPress with Elementor, HTML, CSS, Javascript,
              PHP, MariaDB, Docker, and Node hosted on an AWS.
            </p>
          </div>
        </div>
        <div class="mt-16">
          <Slick {...sliderSettings}>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-home.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                1. Vancouver Bitcoin Homepage
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-blog.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                2. Vancouver Bitcoin Blog
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-secondary-page.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                3. Vancouver Bitcoin OTC
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/vb/vb-ledger-template.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                4. Vancouver Bitcoin Ledger
              </div>
            </li>
          </Slick>
        </div>
      </div>

      <div class="my-80"></div>

      {/* --------Massive Sapporo------- */}

      <div className="container max-w-6xl mx-auto my-48">
        <div class="flex justify-between items-center text-lg mt-20">
          <div class="ml-10 mr-10">
            <h1 class="text-7xl mt-2">Massive Sapporo</h1>
            <div class="font-light my-2">June, 2018 - May,2019 : Web Developer</div>
            <p class="my-12 text-xl max-w-4xl w-full text-gray-600">
              Massive Sapporo is the company that manages inbound and real
              estate business in Japan. Especially, they operates Vacation
              rentals(Airbnb), Unmanned hotels, Shared offices/houses, and
              Entertainment facilities called Ninja Dojo for overseas tourists.
            </p>
            {/* <button class="max-w-md min-w-full my-5 bg-gray-700 hover:bg-transparent hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
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
            class={`${open ? "hidden" : ""} max-w-lg my-14 mx-4`}
            alt=""
            src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/logo-f.svg`}
          />
        </div>
      </div>

      {/* Website  */}
      <div class="bg-gray-600 py-20 md:mx-10 text-white border-8 border-gray-300 rounded-lg">
        <div class="flex flex-wrap justify-between gap-6 mx-5">
          <div>
            <h1 class="text-4xl">NinjaDo Website</h1>
            <button class="max-w-md min-w-full my-5 bg-gray-700 hover:bg-white hover:text-gray-700 border-2 hover:border-gray-700 text-white font-bold py-2 px-4 rounded-full">
              <a
                href="http://hokkaido-ninjado.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </button>
          </div>

          <div class="max-w-5xl flex flex-col gap-6 text-xl">
            <p>
              Hokkaido Ninjado is one part of entertainment facility. Decendants of Ninja teach people the history of Ninja. People can also experience Ninja training. They advertise Ninja atraction with Website and Airbnb platform. 
            </p>
            <p class="underline">
              Technology used for the website is Wordpress, php. Also Adobe Premieor and Photoshop are used for contents.
            </p>
          </div>
        </div>
        <div class="mt-16">
          <Slick {...sliderSettings}>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-home.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                1. NinjaDo Home
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-application.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                2. NinjaDo Application Form
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-location.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                3. NinjaDo Location
              </div>
            </li>
            <li class="mx-auto px-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/experience/massive_sapporo/ninja-photogallery.png`}
                alt=""
              />
              <div class="font-light text-lg border-t border-white 'inline-block' mt-2 pt-3">
                4. NinjaDo Photo Gallery
              </div>
            </li>
          </Slick>
        </div>
      </div>
      <div class="my-40"></div>
    </section>
  );
};

export default SkillSet;
