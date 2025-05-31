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
  '/img/background_image.jpg',
  '/img/myPhoto/mypic1.JPEG',
  '/img/myPhoto/mypic2.JPEG',
  '/img/myPhoto/mypic3.JPEG',
  '/img/stackicons/react.svg',
  '/img/stackicons/javascript.svg',
  '/img/stackicons/html-5.svg',
  '/img/stackicons/css-3.svg',
  '/img/stackicons/nodejs.svg',
  '/img/stackicons/python.svg',
];

// Loading configuration
const LOADING_CONFIG = {
  FADE_OUT_DELAY: 800,
  FADE_OUT_DURATION: 1500,
  MAX_LOADING_TIME: 4000,
};

// Main page components in order
const PageComponent = ({ children }) => (
  <div className="content-fadein">
    {children}
  </div>
);

const Layout = () => {
  
  const [ sentComment , setSentComment ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("sent")){
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
  },[])

  const closeModalHandler = () => {
    
    setSentComment(false);
  };

  return (
    <>
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
