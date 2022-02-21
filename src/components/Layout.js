import React, { useState } from "react";
import AboutContent from "./AboutContent";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header/Header";
import Navigation from "./Header/Navigation";
import SkillSet from "./SkillSet";
import SuccessModal from "./UI/SuccessModal";
import Works from "./Works";

const Layout = (props) => {
  
  const [ clearLocalStorage , setClearLocalStorage ] = useState(true);

  const closeModalHandler = () => {
    localStorage.clear();
    setClearLocalStorage(true);
  };
  return (
    <>
    {localStorage.getItem("sent") && <SuccessModal onClose={closeModalHandler}></SuccessModal>}
    {/* {!clearLocalStorage && <SuccessModal onClose={closeModalHandler}></SuccessModal>} */}
      <Navigation></Navigation>
      <figure>
        <img src="https://note-app-masamern.herokuapp.com/mini.png" alt="wakeking" />
      </figure>
      <Header></Header>
      <AboutContent></AboutContent>
      <AboutMe></AboutMe>
      <SkillSet></SkillSet>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Layout;
