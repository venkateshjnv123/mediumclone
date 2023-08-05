import React, { Component, useEffect, useState } from "react";
import Navbar from "./Navbar";
import HorizontalScroll from "react-scroll-horizontal";
import "./mainpage.css";
import TabContent from "./TabContent";
import { Link, useNavigate } from "react-router-dom";
import MembershipModal from "../Membership/TakeMembership";
import { useDispatch, useSelector } from "react-redux";
import { setviewValue } from "../redux/reduxslice";
import { current } from "@reduxjs/toolkit";

const Datacards = ({ blogsdata }) => {
  return (
    <>
      {blogsdata.map((blog) => (
        
        <div className="md:w-[90%] md:mx-auto md:w-90 border-b p-4 mb-4 hover:bg-gray-200 rounded-2xl active:bg-gray-200">
          <div >
            <h3 className="text-xl mb-2 font-[700] cursor-pointer">{blog.title}</h3>
          </div>
          {/* Author Name */}
          <div className="flex text-lg font-bold mb-2 text-[15px]">
            {blog.author}
            <span className="dot relative top-[13px]"></span>
            <span className="text-gray-400 text-sm ml-2 relative top-[4px]">
              {blog.date}
            </span>
          </div>

          {/* Content */}

          <div className="flex flex-wrap gap-2">
            {blog.categories.map((category) => (
              <div className=" tagsPostsBtn cursor-pointer">{category}</div>
            ))}

            {/* Add more categories as needed */}
          </div>

          {/* Image */}
          <div className="textImgMobDiv flex justify-between items-center mb-4 ">
            <p className="w-full md:w-3/5 text-gray-700 mb-4 overflow-hidden line-clamp-3 pt-[15px]">
              {blog.data}
            </p>
            <div className="w-full md:w-1/5 pt-[25px] md:pt-[0px]">
              <img
                src={blog.image}
                alt="Placeholder"
                className="mx-auto max-w-[140px] w-32 h-32 rounded-md object-cover"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>{blog.likes}</span>
              </div>
            </div>
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>{blog.views}</span>
              </div>
            </div>
          </div>

          {/* Categories */}
       
        </div>
        
      ))}
    </>
  );
};

function HomePage() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [authorName, setAuthorName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [likesCommentsOrder, setLikesCommentsOrder] = useState("high");
  const [membershipmodal, setmembershipmodal] = useState(false);
  const blogsdata = [
    {
      title: "Stop Using React Native Async Storage",
      subtitle:
        "A Comparison of React Native MMKV and React Native Async Storage",
      data: "For quite some time, React Native Async Storage has been the go-to option for storing data in React Native applications. However, the introduction of React-Native MMKV presents developers with a more efficient and advanced choice.MMKV, originally designed as an efficient, small, and user-friendly mobile key-value storage framework for the WeChat app. It brings its fast, direct bindings to the native C++ library to the React Native platform through a simple JavaScript API. React-Native MMKV is now a prominent option for data storage in React Native applications. One of the key advantages of React-Native MMKV is its performance. With everything written in C++, it is ~30x faster than AsyncStorage. Furthermore, it also provides encryption support, making it a secure storage solution for your app. The use of JSI instead of the “old” Bridge further enhances its speed and efficiency.",
      author: "Mike",
      image: "https://miro.medium.com/v2/resize:fit:1100/0*f5FAc401uPezI6pa",
      categories: ["frontend", "software", "frontend"],
      date: "12/27/2006",
      likes: 24,
      views: 30,
    },
    {
      title: "Stop Using React Native Async Storage",
      subtitle:
        "A Comparison of React Native MMKV and React Native Async Storage",
      data: "For quite some time, React Native Async Storage has been the go-to option for storing data in React Native applications. However, the introduction of React-Native MMKV presents developers with a more efficient and advanced choice.MMKV, originally designed as an efficient, small, and user-friendly mobile key-value storage framework for the WeChat app. It brings its fast, direct bindings to the native C++ library to the React Native platform through a simple JavaScript API. React-Native MMKV is now a prominent option for data storage in React Native applications. One of the key advantages of React-Native MMKV is its performance. With everything written in C++, it is ~30x faster than AsyncStorage. Furthermore, it also provides encryption support, making it a secure storage solution for your app. The use of JSI instead of the “old” Bridge further enhances its speed and efficiency.",
      author: "venkatesh",
      image: "https://miro.medium.com/v2/resize:fit:1100/0*f5FAc401uPezI6pa",
      categories: ["java", "software", "frontend"],
      date: "12/27/2023",
      likes: 200,
      views: 400,
    },
    {
      title: "Stop Using React Native Async Storage",
      subtitle:
        "A Comparison of React Native MMKV and React Native Async Storage",
      data: "For quite some time, React Native Async Storage has been the go-to option for storing data in React Native applications. However, the introduction of React-Native MMKV presents developers with a more efficient and advanced choice.MMKV, originally designed as an efficient, small, and user-friendly mobile key-value storage framework for the WeChat app. It brings its fast, direct bindings to the native C++ library to the React Native platform through a simple JavaScript API. React-Native MMKV is now a prominent option for data storage in React Native applications. One of the key advantages of React-Native MMKV is its performance. With everything written in C++, it is ~30x faster than AsyncStorage. Furthermore, it also provides encryption support, making it a secure storage solution for your app. The use of JSI instead of the “old” Bridge further enhances its speed and efficiency.",
      author: "syam kumar",
      image: "https://miro.medium.com/v2/resize:fit:1100/0*f5FAc401uPezI6pa",
      categories: ["react", "software", "frontend"],
      date: "12/27/2010",
      likes: 60,
      views: 99,
    },
  ];
  const [poststoshow, setpoststoshow] = useState(blogsdata);
  const handlemembershipclose = () => {
    setmembershipmodal(false);
  }

  const getFilteredPosts = () => {
    let filteredPosts = blogsdata;

    if (authorName) {
      filteredPosts = filteredPosts.filter((post) =>
        post.author.toLowerCase().includes(authorName.toLowerCase())
      );
    }

    // Sort by date
    if (startDate && endDate) {
      filteredPosts = filteredPosts.filter((post) => {
        const postDate = new Date(post.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return postDate >= start && postDate <= end;
      });
    }

    // Sort by likes/comments
    if (likesCommentsOrder === "high") {
      filteredPosts.sort((a, b) => b.likes - a.likes);
    } else if (likesCommentsOrder === "low") {
      filteredPosts.sort((a, b) => a.likes - b.likes);
    } else if (likesCommentsOrder === "comments_high") {
      filteredPosts.sort((a, b) => b.comments - a.comments);
    } else if (likesCommentsOrder === "comments_low") {
      filteredPosts.sort((a, b) => a.comments - b.comments);
    }

    setpoststoshow(filteredPosts);
  };

  const fetchapi = async () => {
    const url = "https://medium2.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "de0ca2eba2msh61c7217b5c37ebdp16228fjsnddac264565f5",
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const views = useSelector((state) => state.views.value);
  const [currentviews, setcurrentviews] = useState(views);
  const members = useSelector((state) => state.membership.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlepostclick = () => {
    dispatch(setviewValue(currentviews+1))
    setcurrentviews(currentviews+1);
    console.log(members);
    if(members === false && currentviews>1){
      setmembershipmodal(true);
    }
    else{
      navigate('/postpage');
    }
  }

  const handleTabClick = (tab) => {
    if (tab === "All") {
      setpoststoshow(blogsdata);
    }
    setSelectedTab(tab);
  };
  const tabOptions = [
    "All",
    "For You",
    "Following",
    "Software Development",
    "Startup",
    "Software Engineering",
    "Technology",
    "Self Improvement",
    "Data Science",
    "Programming",
  ];
  const recommendedCategories = [
    "Software Development",
    "Startup",
    "Software Development",
    "Startup",
    "Software Development",
    "Startup",
    "Software Development",
  ];

  return (
    <div className="mainpage">
       <MembershipModal isOpen={membershipmodal} onClose={handlemembershipclose}/>
      <div className="flex items-star overflow-x-hidden">
        <div className="w-full md:w-2/3 md:mr-2 md:mx-4 ">
          <div className="rounded-[25px] px-4 py-2 mr-4 flex justify-between">
            <input
              type="text"
              placeholder="Search for a post"
              className="bg-slate-200 w-56 sm:w-48 focus:outline-none px-4 py-2 rounded-[25px]"
            />
            <button className="rounded-full bg-slate-300 py-1 px-2"><Link to='/alltopics'>Explore topics</Link></button>
          </div>
          <div className="titlesScroll rounded overflow-x-scroll whitespace-nowrap relative ">
            {tabOptions.map((tab) => (
              <div
                key={tab}
                className={`px-4 py-2 cursor-pointer inline-block bg-slate-200 ${
                  selectedTab === tab
                    ? "text-blue-500 font-bold"
                    : "text-gray-700"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="filterDivMain11 my-[20px] items-center p-4 border rounded shadow-md">
            <div className="filterDiv11 w-fit md:w-4/5">
              <div className="w-fit md:w-full filterDivSub11 my-[10px]">
                <div className="w-fit mr-4 mb-4">
                  <input
                    type="text"
                    value={authorName}
                    placeholder="Author name"
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="min-w-[300px] md:min-w-[210px] bg-white border rounded-[25px] px-[10px] py-[5px]"
                  />
                </div>

                <div className="w-fit mr-4">
                  <select
                    value={likesCommentsOrder}
                    onChange={(e) => setLikesCommentsOrder(e.target.value)}
                    className="min-w-[300px] md:min-w-[210px] bg-white border rounded-[25px] px-2 py-1"
                  >
                    <option value="high">Most likes</option>
                    <option value="low">Least likes</option>
                    <option value="comments_high">Most comments</option>
                    <option value="comments_low">Least comments</option>
                  </select>
                </div>
              </div>

              <div className="w-fit md:w-full filterDivSub11 my-[10px]">
                <div className="w-fit mb-4">
                  <label className="text-gray-700 font-bold mr-2">
                    Start Date:
                  </label>
                  <br />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="min-w-[300px] md:min-w-[210px] bg-white border rounded-[25px] px-2 py-1"
                  />
                </div>

                <div className="w-fit mb-4">
                  <label className="text-gray-700 font-bold mr-2">
                    End Date:
                  </label>
                  <br />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="min-w-[300px] md:min-w-[210px] bg-white border rounded-[25px] px-2 py-1"
                  />
                </div>
              </div>
            </div>

            <div className="w-fit md:w-1/5">
              <button
                onClick={() => {
                  getFilteredPosts();
                }}
                className="bg-[#121212] text-white font-[500] px-[15px] py-[5px] rounded-[25px] hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
          <div className="w-full mt-4">
          {blogsdata.map((blog) => (
        
        <div className="md:w-[90%] md:mx-auto md:w-90 border-b p-4 mb-4 hover:bg-gray-200 rounded-2xl active:bg-gray-200"  onClick={handlepostclick}>
          <div >
            <h3 className="text-xl mb-2 font-[700] cursor-pointer">{blog.title}</h3>
          </div>
          {/* Author Name */}
          <div className="flex text-lg font-bold mb-2 text-[15px]">
            {blog.author}
            <span className="dot relative top-[13px]"></span>
            <span className="text-gray-400 text-sm ml-2 relative top-[4px]">
              {blog.date}
            </span>
          </div>

          {/* Content */}

          <div className="flex flex-wrap gap-2">
            {blog.categories.map((category) => (
              <div className=" tagsPostsBtn cursor-pointer">{category}</div>
            ))}

            {/* Add more categories as needed */}
          </div>

          {/* Image */}
          <div className="textImgMobDiv flex justify-between items-center mb-4 ">
            <p className="w-full md:w-3/5 text-gray-700 mb-4 overflow-hidden line-clamp-3 pt-[15px]">
              {blog.data}
            </p>
            <div className="w-full md:w-1/5 pt-[25px] md:pt-[0px]">
              <img
                src={blog.image}
                alt="Placeholder"
                className="mx-auto max-w-[140px] w-32 h-32 rounded-md object-cover"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>{blog.likes}</span>
              </div>
            </div>
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>{blog.views}</span>
              </div>
            </div>
          </div>

          {/* Categories */}
       
        </div>
        
      ))}
          </div>
        </div>

        <div className="hidden md:block md:w-1/3 md:ml-2 mt-2 md:mt-0 mx-2 border-l-[1px]">
          {/* Recommended Categories */}

          <div className="p-[10px] ml-[10px] my-[30px] flex flex-wrap gap-2">
            <div className="rounded-lg mr-4 w-full mb-[20px]">
              <label className="font-[500] my-[10px]">
                Slide into your category:
              </label>
              <input
                type="text"
                placeholder="Search for a category"
                className="bg-slate-200 w-[80%] focus:outline-none px-4 py-2 my-[5px] rounded-[25px]"
              />
            </div>
            {recommendedCategories.map((category) => (
              <div
                key={category}
                className="bg-[#d4d4d4] px-3 py-1 rounded-full cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>

          <hr />

          {/* Other Usernames */}
          <div className="p-[10px] ml-[10px] my-[30px]">
            <div className="rounded-lg mr-4 w-full mb-[20px]">
              <label className="font-[500] my-[10px]">Pick your Author:</label>
              <input
                type="text"
                placeholder="Search for an author"
                className="bg-slate-200 w-[80%] focus:outline-none px-4 py-2 my-[5px] rounded-[25px]"
              />
            </div>
            {/* Sample other usernames */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Username1 - 198k followers</span>
              <button className="text-blue-500 font-bold">Follow</button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Username2 - 100 followers</span>
              <button className="text-blue-500 font-bold">Follow</button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Username2 - 100 followers</span>
              <button className="text-blue-500 font-bold">Follow</button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Username2 - 100 followers</span>
              <button className="text-blue-500 font-bold">Follow</button>
            </div>
            {/* Add more usernames as needed */}
          </div>
        </div>

        {/* Tab Content */}
      </div>
    </div>
  );
}

export default HomePage;
