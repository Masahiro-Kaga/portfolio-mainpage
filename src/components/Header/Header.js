import React, { useRef, useState } from "react";
import Typical from "react-typical";
import portfolioData from "../../utility";

const Header = ({ onNameClick }) => {
  const pressTimerRef = useRef(null);
  const clickTimerRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);

  // PC用: 3回クリック機能
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // 既存のタイマーをクリア
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    // 3回クリックで発動
    if (newCount >= 3) {
      if (onNameClick) onNameClick();
      setClickCount(0);
    } else {
      // 2秒後にクリックカウントをリセット
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 2000);
    }
  };

  // モバイル用: 長押し機能
  const handleTouchStart = () => {
    pressTimerRef.current = setTimeout(() => {
      if (onNameClick) onNameClick();
    }, 2000); // 2秒間の長タップ
  };

  const handleTouchEnd = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };
  return (
    <div
      style={{ backgroundImage: `url("img/background_image.jpg")` }}
      className="h-screen w-full bg-center bg-cover bg-no-repeat"
    >
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <Typical
          steps={portfolioData.header.typical}
          loop={Infinity}
          className="text-white"
          wrapper="div"
        />
        <br />
        <h1 className="text-white text-2xl">{portfolioData.header.type}</h1>
        <h1
          className="text-white text-5xl select-none"
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ userSelect: "none" }}
        >
          {portfolioData.header.name}
        </h1>
      </div>
    </div>
  );
};

export default Header;

// import { LazyLoadImage } from "react-lazy-load-image-component";
// <LazyLoadImage src={content.header.img}/>
// <LazyLoadImage src={`${process.env.PUBLIC_URL}/img/background_image.jpg`}>
// </LazyLoadImage>
