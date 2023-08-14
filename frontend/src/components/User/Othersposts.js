import React, { Component, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import NavbarValidated from "../LandingPage/NavbarValidated";
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
function Othersposts() {
  const [posts, setPosts] = useState(blogsdata);
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  const handleshowpost = (blog) => {
    navigate("/postpage", { state: { blogdetails: blog } });
  };

  return (
    <div>
         <NavbarValidated/>
    <div className=" mt-[70px]">
      <h6 className="text-center text-[35px] font-[700] mb-[10px]">{name} Posts</h6>
{/* 
      <div className="w-fit mx-[auto]">
        <label className="font-[500]">Filter by Status:</label>
        <select className="border rounded-[25px] px-[15px] py-[5px] ml-[15px]">
          <option value="All">All</option>
          <option value="Uploaded">Uploaded</option>
          <option value="Draft">Draft</option>
        </select>
      </div> */}

      <div className="min-w-[0px] md:min-w-[1200px] flex flex-col md:flex-row md:flex-wrap md:justify-around">
        {posts ? (
          posts.map((blog) => (
            <div
              onClick={() => handleshowpost(blog)}
              className=" md:w-[48%] border-b md:px-[30px] p-[20px] mx-[10px] my-[15px] bg-slate-200 rounded-lg shadow-lg cursor-pointer "
            >
              {/* Author Name */}

              {/* Content */}
              <div className="flex content-space-between">
                <h3 className="text-xl font-[500] mb-4">{blog.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.categories.map((category) => (
                  <div className="bg-[#f2f2f2] px-4 py-2 rounded-[25px] cursor-pointer">
                    {category}
                  </div>
                ))}

                {/* Add more categories as needed */}
              </div>

              {/* Image */}
              <div className="flex flex-col-reverse md:flex-row md:justify-between items-center mb-4">
                <div className="md:max-w-[70%]">
                  {" "}
                  <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">
                    {blog.data}
                  </p>
                  
                  {/* <p className="my-[10px]">
                    <span className="font-[500]">Status: </span>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        blog.status == "Yes"
                          ? "bg-green-500 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {blog.status == "Yes" ? "Uploaded" : "Draft"}
                    </span>{" "}
                  </p> */}
                  <div className="flex gap-5 my-[10px]">
                    <div className="flex">
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

                    <div className="flex">
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

                    <div className="flex">
                      <div>
                        <span>
                          <img
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            src="https://thenounproject.com/api/private/icons/1153746/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                            alt="Views:"
                          />
                        </span>
                      </div>
                      <div className="pl-[5px]">
                        <span>{blog.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/5 pt-[25px] md:pt-[0px]">
              <img
                src={blog.image}
                alt="Placeholder"
                className="mx-auto max-w-[140px] w-32 h-32 rounded-md object-cover"
              />
            </div>
              </div>

              {/* Categories */}
            </div>
          ))
        ) : (
          <div>No posts to show here</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Othersposts;
