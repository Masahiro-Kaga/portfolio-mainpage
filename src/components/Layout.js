import React from "react";
import Navigation from "./Header/Navigation";
import Header from "./Header/Header";
import AboutContent from "./AboutContent";
import AboutMe from "./AboutMe";
import SkillSet from "./SkillSet";

const Layout = (props) => {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <AboutContent></AboutContent>
      <AboutMe></AboutMe>
      <SkillSet></SkillSet>
    </>
  );
};

export default Layout;
