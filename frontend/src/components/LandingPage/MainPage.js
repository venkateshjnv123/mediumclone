import React from "react";
import Navbar from "./Navbar";
import MainPoster from "./mainPoster";
import HomePosts from "./homePosts";
import PostsPage from "./postsPage";

function MainPage() {
  return (
    <>
      <Navbar />
      <MainPoster />
      <HomePosts />
     {/* <PostsPage />  */}
    </>
  );
}

export default MainPage;
