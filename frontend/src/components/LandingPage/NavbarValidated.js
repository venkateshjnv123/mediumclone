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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function NavbarValidated() {
  const [bar, setbar] = useState(true);
  const [cross, setcross] = useState(false);

  const [sideBar, setsideBar] = useState(false);

  const handlelogout = () => {
    toast.warning("logged out successfully");
    localStorage.removeItem("jwtToken");
  }

  return (
    <div className="nav navBarScroll">
      <div id="navbarmain" className="navBarr bg-gray-300">
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
              <img src={navToggleIcon} alt="=" style={{ width: "15px" }} />
            )}
            {cross && (
              <img src={navToggleCross} alt="X" style={{ width: "15px" }} />
            )}
          </span>
        </button>
        <div role="button" className="logoimage">
          <h2 className="font-[700] text-[20px]">Medium Blog App</h2>
        </div>
        <div className="loginbtnsdiv">
          <ul className="loginbuttons">
            <Link to="/add">
              <li className="nav-btn">
                {/* <img src={happyface} alt="happyface" /> */}
                Write
              </li>
            </Link>
              <Link to="/home">
            <li className="nav-btn">
                {/* <img src={happyface} alt="happyface" /> */}
                Home
              </li>
              </Link>
            <Link to="/profile">
              <li className="nav-btn">
               Profile
              </li>
            </Link>
            <Link to="/membership">
              <li className="nav-btn">
               Upgrade
              </li>
            </Link>
            <button className="signupbtn" onClick={handlelogout}>Logout</button>
           
          </ul>
        </div>
      </div>

      {/* sidebar */}
      {sideBar && (
        <div className="footMob navMob">
          <div className="footDrop">
            <Link to="/add">
              <button className="footButton">
                <h4 className="footleftText">Write</h4>
              </button>
            </Link>
            {/* <Link to="/mydrafts">
            <button className="footButton">
                <h4 className="footleftText">Drafts</h4>
              </button>
              </Link>
            <Link to="/myposts">
            <button className="footButton">
                <h4 className="footleftText">My Posts</h4>
              </button>
              </Link> */}
              <Link to="/home">
            <button className="footButton">
                <h4 className="footleftText">Home</h4>
              </button>
              </Link>
          </div>
          <div className="footDrop" style={{ paddingBottom: "20px" }}>
            <Link to="/profile">
              <button className="footButton">
                <h4 className="signupbtn">Profile</h4>
              </button>
            </Link>
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
