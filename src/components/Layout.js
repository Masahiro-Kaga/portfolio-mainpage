import React from "react";
import Navigation from "./Header/Navigation";
import Header from "./Header/Header";
import AboutContent from "./AboutContent";

const Layout = (props) => {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <AboutContent></AboutContent>
    </>
  );
};

export default Layout;
