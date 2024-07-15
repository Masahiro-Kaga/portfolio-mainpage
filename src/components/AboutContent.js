import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { Link } from "react-scroll";

const AboutContent = () => {
  const { language } = useContext( LanguageContext )

  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200">
        <p className="font-dosis font-bold text-4xl">About this site</p>
        <br />
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
        {language === 'en' ? 'I am delighted to present my comprehensive body of work. My portfolio is a reflection of my dedication to excellence in web development and a testament to my commitment to the evolving field of technology.' : '加賀正浩のポートフォリオウェブサイトへようこそ。ここでは、これまで私が取り組んできた個人プロジェクトや、エンジニアとしての経歴、持っているスキルセットなどをご紹介しています。' }
        </div>
        <br></br>
        <div className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center text-gray-700">
        {language === 'en' ? 'I invite you to explore my projects, which are a blend of creativity and technical expertise. For further insights into my professional journey and to connect with me, I encourage you to visit my LinkedIn profile. Your interest and time are greatly appreciated.' : 'ページの最後には、メッセージフォームも載せておりますので、興味を持っていただけましたら、ご連絡いただけますと幸いです。' }
        </div>
        <br></br>
        <div className="flex gap-2">
          <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition shadow text-white font-semibold">
            <a href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/" target="_blank" rel="noreferrer" className="px-4 py-2 block">
            {language === 'en' ? 'Visit LinkedIn' : 'LinkedInページへ' }
            </a>
          </button>
          <button className="mt-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition shadow text-white font-semibold">
            <Link to="project" smooth={true} className="px-4 py-2 block">
              {language === 'en' ? 'My Projects' : 'プロジェクト集へ' }
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
