import React from "react";
import Navbar from "./Navbar";
import MainPoster from "./mainPoster";
import HomePosts from "./homePosts";
import NavbarValidated from "./NavbarValidated";

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* <NavbarValidated /> */}
      <MainPoster />
      <HomePosts />
    </>
  );
}

export default LandingPage;
