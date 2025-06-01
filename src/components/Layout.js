import React, { useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";
// import Footer from "./Footer";
import Header from "./Header/Header";
import Navigation from "./Header/Navigation";
import SkillSet from "./SkillSet";
import SuccessModal from "./UI/SuccessModal";
import Projects from "./Projects";
import LoadingScreen from "./UI/LoadingScreen";

// Image preloading configuration
const IMAGES_TO_PRELOAD = [
  "/img/background_image.jpg",
  "/img/myPhoto/mypic1.JPEG",
  "/img/myPhoto/mypic2.JPEG",
  "/img/myPhoto/mypic3.JPEG",
  "/img/stackicons/react.svg",
  "/img/stackicons/javascript.svg",
  "/img/stackicons/html-5.svg",
  "/img/stackicons/css-3.svg",
  "/img/stackicons/nodejs.svg",
  "/img/stackicons/python.svg",
];

// Loading configuration
const LOADING_CONFIG = {
  FADE_OUT_DELAY: 800,
  FADE_OUT_DURATION: 1500,
  MAX_LOADING_TIME: 4000,
};

// Main page components in order
const PageComponent = ({ children }) => <div className="content-fadein">{children}</div>;

const Layout = () => {
  const [sentComment, setSentComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // ページタイプとスタイルの状態管理
  const [pageType, setPageType] = useState("freelance"); // 'job' or 'freelance'
  const [styleType, setStyleType] = useState("casual"); // 'formal' or 'casual'

  useEffect(() => {
    if (localStorage.getItem("sent")) {
      setSentComment(true);
    }
    localStorage.clear();

    // Image preloading with configuration
    let loadedImages = 0;
    const totalImages = IMAGES_TO_PRELOAD.length;

    const handleImageLoad = () => {
      loadedImages++;

      if (loadedImages === totalImages) {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => setIsLoading(false), LOADING_CONFIG.FADE_OUT_DURATION);
        }, LOADING_CONFIG.FADE_OUT_DELAY);
      }
    };

    const preloadImages = () => {
      IMAGES_TO_PRELOAD.forEach((src) => {
        const img = new Image();
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // Handle errors the same way
        img.src = src;
      });
    };

    // Start image preloading
    preloadImages();

    // Fallback: maximum loading time
    const maxLoadingTimer = setTimeout(() => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), LOADING_CONFIG.FADE_OUT_DURATION);
      }, LOADING_CONFIG.FADE_OUT_DELAY);
    }, LOADING_CONFIG.MAX_LOADING_TIME);

    return () => {
      clearTimeout(maxLoadingTimer);
    };
  }, []);

  const closeModalHandler = () => {
    setSentComment(false);
  };

  // ページタイプ切り替えハンドラー
  const handlePageTypeChange = (type) => {
    setPageType(type);
    console.log("Page type changed to:", type);
  };

  // スタイルタイプ切り替えハンドラー
  const handleStyleTypeChange = (type) => {
    setStyleType(type);
    console.log("Style type changed to:", type);
  };

  return (
    <>
      {/* デバッグ用スイッチ - 右上に非表示で配置 */}
      <div
        className="fixed top-4 right-4 z-[9999] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border-2 border-gray-300"
        style={{ visibility: "hidden" }}
        id="debug-switches"
      >
        <div className="text-xs font-bold text-gray-800 mb-2">Debug Controls</div>

        {/* ページタイプ切り替え */}
        <div className="mb-3">
          <div className="text-xs text-gray-600 mb-1">Page Type:</div>
          <div className="flex gap-1">
            <button
              onClick={() => handlePageTypeChange("job")}
              className={`px-2 py-1 text-xs rounded ${
                pageType === "job"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Job
            </button>
            <button
              onClick={() => handlePageTypeChange("freelance")}
              className={`px-2 py-1 text-xs rounded ${
                pageType === "freelance"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Freelance
            </button>
          </div>
        </div>

        {/* スタイルタイプ切り替え */}
        <div>
          <div className="text-xs text-gray-600 mb-1">Style Type:</div>
          <div className="flex gap-1">
            <button
              onClick={() => handleStyleTypeChange("formal")}
              className={`px-2 py-1 text-xs rounded ${
                styleType === "formal"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Formal
            </button>
            <button
              onClick={() => handleStyleTypeChange("casual")}
              className={`px-2 py-1 text-xs rounded ${
                styleType === "casual"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Casual
            </button>
          </div>
        </div>

        {/* 現在の設定表示 */}
        <div className="mt-3 pt-2 border-t border-gray-300">
          <div className="text-xs text-gray-600">
            Current: {pageType} + {styleType}
          </div>
        </div>
      </div>

      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
      {!isLoading && (
        <PageComponent>
          {sentComment && <SuccessModal onClose={closeModalHandler} />}
          <Navigation />
          <Header />
          <AboutContent />
          <AboutMe />
          <Experience />
          <SkillSet />
          <Projects />
          <Contact />
        </PageComponent>
      )}
    </>
  );
};

export default Layout;
