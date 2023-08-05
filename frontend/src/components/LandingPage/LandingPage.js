import React from "react";
import Navbar from "./Navbar";
import MainPoster from "./mainPoster";
import HomePosts from "./homePosts";
import { ToastContainer } from "react-toastify";

function LandingPage() {
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <MainPoster />
      <HomePosts />
    </>
  );
}

export default LandingPage;
