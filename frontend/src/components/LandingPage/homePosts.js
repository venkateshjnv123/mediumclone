import React from "react";
import "./homePosts.css";

function homePosts() {
  return (
    <div className="my-[30px]">
      <div className="filterDiv ">
        <span className="filterHomeBtn filterHomeBtnL bg-slate-200 hover:bg-slate-700 hover:text-white w-full">
          Trending
        </span>
        <span className="filterHomeBtn bg-slate-200 hover:bg-slate-700 hover:text-white">
          Recommended
        </span>
        <span className="filterHomeBtn filterHomeBtnR bg-slate-200 hover:bg-slate-700 hover:text-white">
          Most Liked
        </span>
      </div>

      <div className="homePostsDiv my-[50px]">
        <div className="homePosts flex justify-start">
          <div className="postNumbering">
            <span>01</span>
          </div>
          <div>
            <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgHomeAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div
                className="pl-[15px]"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h6>John Abraham</h6>
              </div>
            </div>
            <div
              className="font-bold my-[10px]"
              style={{ width: "fit-content" }}
            >
              <h6 className="max-w-[500px]">
                Oppenheimer Isn't a Story About the Atomic Bomb, It's About
                Ourselves Oppenheimer Isn't a Story About the Atomic Bomb, It's
                About Ourselves Oppenheimer Isn't a Story About the Atomic Bomb,
                It's About Ourselves
              </h6>
            </div>
            <div
              className="my-[10px]"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Aug 8</span>
              <span className="dot"></span>
              <span>10 min read</span>
              <span className="dot"></span>
              <span className="homePostTag">Science</span>
            </div>
          </div>
        </div>

        <div className="homePosts flex justify-start">
          <div className="postNumbering">
            <span>02</span>
          </div>
          <div>
            <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgHomeAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div
                className="pl-[15px]"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h6>John Abraham</h6>
              </div>
            </div>
            <div className="font-bold my-[10px]">
              <h6 className="max-w-[500px]">
                Oppenheimer Isn't a Story About the Atomic Bomb, It's About
                Ourselves
              </h6>
            </div>
            <div
              className="my-[10px]"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Aug 8</span>
              <span className="dot"></span>
              <span>10 min read</span>
              <span className="dot"></span>
              <span className="homePostTag">Science</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homePostsDiv my-[50px]">
        <div className="homePosts flex justify-start">
          <div className="postNumbering">
            <span>03</span>
          </div>
          <div>
            <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgHomeAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div
                className="pl-[15px]"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h6>John Abraham</h6>
              </div>
            </div>
            <div className="font-bold my-[10px]">
              <h6 className="max-w-[500px]">
                Oppenheimer Isn't a Story About the Atomic Bomb, It's About
                Ourselves
              </h6>
            </div>
            <div
              className="my-[10px]"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Aug 8</span>
              <span className="dot"></span>
              <span>10 min read</span>
              <span className="dot"></span>
              <span className="homePostTag">Science</span>
            </div>
          </div>
        </div>

        <div className="homePosts flex justify-start">
          <div className="postNumbering">
            <span>04</span>
          </div>
          <div>
            <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgHomeAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div
                className="pl-[15px]"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h6>John Abraham</h6>
              </div>
            </div>
            <div className="font-bold my-[10px]">
              <h6 className="max-w-[500px]">
                Oppenheimer Isn't a Story About the Atomic Bomb, It's About
                Ourselves
              </h6>
            </div>
            <div
              className="my-[10px]"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Aug 8</span>
              <span className="dot"></span>
              <span>10 min read</span>
              <span className="dot"></span>
              <span className="homePostTag">Science</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePosts;
