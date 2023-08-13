import React , {useEffect} from "react";
import Navbar from "./Navbar";
import MainPoster from "./mainPoster";
import HomePosts from "./homePosts";
import { ToastContainer } from "react-toastify";
import NavbarValidated from "./NavbarValidated";

function LandingPage() {

  useEffect(() => {
    fetch("https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/current_user", {
          method: 'GET',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }, 
        })
        .then(response => response.json())
            .then(json => {  console.log(json); })
}, [])
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
