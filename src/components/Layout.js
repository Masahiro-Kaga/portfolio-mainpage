import React, { useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
// import Footer from "./Footer";
import Header from "./Header/Header";
import Navigation from "./Header/Navigation";
import SkillSet from "./SkillSet";
import SuccessModal from "./UI/SuccessModal";
import Works from "./Works";

const Layout = () => {
  
  const [ sentComment , setSentComment ] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("sent")){
      setSentComment(true);
    }
    localStorage.clear();
  },[])

  const closeModalHandler = () => {
    
    setSentComment(false);
  };

  return (
    <>
    {/* {localStorage.getItem("sent") && <SuccessModal onClose={closeModalHandler}></SuccessModal>} */}
    {sentComment && <SuccessModal onClose={closeModalHandler}></SuccessModal>}
      <Navigation></Navigation>
      <Header></Header>
      <AboutContent></AboutContent>
      <AboutMe></AboutMe>
      <SkillSet></SkillSet>
      <Works></Works>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;
