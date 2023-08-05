import React from "react";
// import { FormControl, InputGroup } from "react-bootstrap";
import "./mainPoster.css";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div
      className="mainPoster bg-zinc-300"
      style={{
        textAlign: "start",
       // backgroundColor: "#fddc01",
      //  backgroundImage: `url(https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/home-banner-background-1.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "100%",
        paddingTop: "57px",
        marginTop: "-30px",
        width: "100%",
      }}
    >
      <div className="mainPoster1">
        <div className="mainPosterleft">
          <h1 className="text-[50px] md:text-[75px] lg:text-[100px] font-[500]">
            Stay Curious.
          </h1>
          <p className="text-[20px]">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="px-[30px] py-[5px] my-[20px] font-bold rounded-[20px] bg-black text-white text-[20px]">
           <Link to='/home'>Start reading</Link> 
          </button>
        </div>
        <div className="mainPosterright">
          <img
            className="mainPosterImg"
            src="https://findbestcourses.com/wp-content/uploads/2022/08/Blogging.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
