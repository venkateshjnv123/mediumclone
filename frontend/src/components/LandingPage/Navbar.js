import React, { useState } from "react";
import "./navbar.css";
import "./footermob.css";
import logo from "../Logos/logo.svg";
import happyface from "../Logos/happyface.svg";
import navToggleIcon from "../Logos/navToggleIcon.svg";
import rightarrow from "../Logos/rightarrow.svg";
import downCopyArrow from "../Logos/downCopyArrow.svg";
import navToggleCross from "../Logos/navToggleCross.svg";
import whatsappIcon from "../Logos/whatsappIcon.svg";

export default function Navbar() {
  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".nav").classList.add("navBarScroll");
    } else {
      document.querySelector(".nav").classList.remove("navBarScroll");
    }
  };

  // window.onscroll = () => {
  //   if (window.scrollY > 0) {
  //     document.getElementById("navbarmain").style.backgroundColor = "#ffffff";
  //   } else {
  //     document.getElementById("navbarmain").style.backgroundColor = "#fddc00";
  //   }
  // };

  // window.onscroll = () => {
  //   if (window.scrollY > 300) {
  //     document.getElementById("whatsappIcon").style.display = "block";
  //   } else {
  //     document.getElementById("whatsappIcon").style.display = "none";
  //   }
  // };

  const [bar, setbar] = useState(true);
  const [cross, setcross] = useState(false);

  const [sideBar, setsideBar] = useState(false);

  return (
    <div className="nav navBarScroll">
      <div id="navbarmain" className="navBarr">
        <button
          className="navbar-toggler navIconToggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setsideBar(!sideBar);
            setbar(!bar);
            setcross(!cross);
          }}
        >
          <span className="navbar-toggler-icon">
            {bar && (
              <img src={navToggleIcon} alt="=" style={{ width: "20px" }} />
            )}
            {cross && (
              <img src={navToggleCross} alt="X" style={{ width: "20px" }} />
            )}
          </span>
        </button>
        <div role="button" className="logoimage">
          <img src={logo} alt="cogoport logo" />
        </div>
        <div className="loginbtnsdiv">
          <ul className="loginbuttons">
            <li className="nav-btn">
              {/* <img src={happyface} alt="happyface" /> */}
              login
            </li>
            <li className="signinbtn">
              <button className="signupbtn"> Sign Up</button>
            </li>
          </ul>
        </div>
      </div>

      {/* sidebar */}
      {sideBar && (
        <div className="footMob navMob">
          <div className="footDrop">
            <button className="footButton">
              <h4 className="footleftText">Write</h4>
            </button>
          </div>
          <div className="footDrop">
            <button className="footButton">
              <h4 className="footleftText">Signin</h4>
            </button>
          </div>
          <div className="footDrop" style={{ paddingBottom: "20px" }}>
            <button className="footButton">
              <h4 className="signupbtn">Sign Up</h4>
            </button>
          </div>

          <div className="loginbtnsdiv loginbtnsdiv2">
            <ul className="loginbuttons loginbtns2">
              <li className="signinbtn">
                <button className="signupbtn"> Sign Up</button>
              </li>
              <li className="nav-btn">
                <img src={happyface} alt="happyface" />
                login
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* sidebar ends */}
    </div>
  );
}
