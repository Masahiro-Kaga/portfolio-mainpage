import React from "react";
import Typical from "react-typical";
import content from "../../content";

const Header = () => {
  
  return (
    <div
      style={{ backgroundImage: `url("img/background_image.jpg")` }}
      className="min-h-screen w-full bg-center bg-cover bg-fixed"
    >
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <Typical
          steps={content.header.typical}
          loop={Infinity}
          className="text-white"
          wrapper="div"
        />
        <br />
        <h1 className=" text-white text-3xl">{content.header.text[0]}</h1>
      </div>
    </div>
  );
};

export default Header;

// import { LazyLoadImage } from "react-lazy-load-image-component";
// <LazyLoadImage src={content.header.img}/>
// <LazyLoadImage src={`${process.env.PUBLIC_URL}/img/background_image.jpg`}>
// </LazyLoadImage>

