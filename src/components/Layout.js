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
      <Experience></Experience>
      <SkillSet></SkillSet>
      <Projects></Projects>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;
