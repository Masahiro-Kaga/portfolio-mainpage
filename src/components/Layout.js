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

const Layout = () => {
  
  const [ sentComment , setSentComment ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("sent")){
      setSentComment(true);
    }
    localStorage.clear();

    // 画像のプリロード
    const imagesToPreload = [
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
      // 他の重要な画像も追加可能
    ];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    const preloadImages = () => {
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          
          if (loadedImages === totalImages) {
            // 完了後、少し待ってからフェードアウト開始
            setTimeout(() => {
              setIsFadingOut(true);
              // フェードアウトアニメーション完了後にローディング画面を非表示
              setTimeout(() => setIsLoading(false), 1500);
            }, 800);
          }
        };
        img.onerror = () => {
          loadedImages++;
          
          if (loadedImages === totalImages) {
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(() => setIsLoading(false), 1500);
            }, 800);
          }
        };
        img.src = src;
      });
    };
    
    // 画像のプリロード開始
    preloadImages();

    // フォールバック: 最大4秒でローディング完了
    const maxLoadingTime = setTimeout(() => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), 1500);
      }, 800);
    }, 4000);

    return () => {
      clearTimeout(maxLoadingTime);
    };
  },[])

  const closeModalHandler = () => {
    
    setSentComment(false);
  };

  return (
    <>
    {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
    {!isLoading && (
      <div className="content-fadein">
        {/* {localStorage.getItem("sent") && <SuccessModal onClose={closeModalHandler}></SuccessModal>} */}
        {sentComment && <SuccessModal onClose={closeModalHandler}></SuccessModal>}
        <Navigation></Navigation>
        <Header></Header>
        <AboutContent></AboutContent>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <SkillSet></SkillSet>
        <Projects></Projects>
        <Contact></Contact>
        {/* <Footer></Footer> */}
      </div>
    )}
    </>
  );
};

export default Layout;
