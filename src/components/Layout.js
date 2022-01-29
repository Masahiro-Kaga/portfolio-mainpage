import React from "react";
import Navigation from "./Header/Navigation";
import Header from "./Header/Header";
import AboutContent from "./AboutContent";
import AboutMe from "./AboutMe";
import SkillSet from "./SkillSet";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navigation></Navigation>
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
