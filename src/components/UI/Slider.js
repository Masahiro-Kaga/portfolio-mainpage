import React, { useState, useEffect, useRef } from "react";

const featuredProducts = [
  "/img/myPhoto/mypic1.JPEG",
  "/img/myPhoto/mypic2.JPEG",
  "/img/myPhoto/mypic3.JPEG",
  "/img/myPhoto/mypic4.JPEG",
  "/img/myPhoto/mypic5.JPEG",
  "/img/myPhoto/mypic6.JPEG",
  "/img/myPhoto/mypic7.JPEG",
  "/img/myPhoto/mypic8.JPEG",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("animate-fadeAnim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("animate-fadeAnim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("animate-fadeAnim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt=""/>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <h1>←</h1>
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <h1>→</h1>
        </button>
      </div>
    </div>
  );
}