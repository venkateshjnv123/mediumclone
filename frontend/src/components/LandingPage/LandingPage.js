import React from "react";
import Navbar from "./Navbar";
import MainPoster from "./mainPoster";
import HomePosts from "./homePosts";
import { ToastContainer } from "react-toastify";
import NavbarValidated from "./NavbarValidated";

function LandingPage() {
  return (
    <>
    <ToastContainer/>
      <Navbar />
      {/* <NavbarValidated /> */}
      <MainPoster />
      <HomePosts />
    </>
  );
}

export default LandingPage;
