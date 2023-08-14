import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import NavbarValidated from "../LandingPage/NavbarValidated";
import axios from "axios";
import { toast } from "react-toastify";
function MyDrafts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleedit = (values) => {
    console.log(values);
    navigate("/edit", { state: { values: values } });
  };
  const auth_token = localStorage.getItem("jwtToken");
  const headers =  {
    "authToken": auth_token,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json, text/plain, */*'
  }

  const fetchdrafts = () => {
    axios.get('https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/draft/get/all', {headers})
    .then((response) => {
      console.log('Fetched the posts', response.data);
      toast.success("Fetched the posts");
      setPosts(response.data);   
    })
    .catch((error) => {
      toast.error("Error saving the post");
      console.error('Error saving topic:', error);
      // Implement error handling logic here
    });
  }
  useEffect(()=>{
fetchdrafts();
   
  }, []);

  const handledelete = (blog) => {
    // let array1 = posts.filter((item) => item.id !== id);
    // localStorage.setItem("blogs", JSON.stringify(array1));
    // setPosts(array1);
    const auth_token = localStorage.getItem("jwtToken");
  const headers =  {
    "authToken": auth_token,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json, text/plain, */*'
  }
  const data = {
    "published_at" : blog["published_at"],
    "featured_image" : blog["image"],
    "text" : blog["text"],
    "topic_id" : 4,
    "title" : blog["title"]
  } ;
 

  axios.post('https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/create/post', data,{headers})
    .then((response) => {
      console.log('Post saved!', response.data);
      //resetForm();
      fetchdrafts();
    })
    .catch((error) => {
      toast.error("Error saving the post");
      console.error('Error saving topic:', error);
    
      // Implement error handling logic here
    });

  axios.delete(`https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/draft/publish/${blog.id}`,{headers})
    .then((response) => {
      console.log('Post saved!', response.data);
      toast.success("Published the post");
     //toast.success("Published the post")
      //navigate('/myposts'); 
      
    })
    .catch((error) => {
      toast.error("Error saving the post");
      console.error('Error saving topic:', error);
      // Implement error handling logic here
    });

   
  };

  const handleshowpost = (blog) => {
    navigate("/mypostsshow", { state: { blogdetails: blog } });
  };
  return (
    <>
      <NavbarValidated />
      <div className="mb-[20px] mt-[70px] min-w-[0px] md:min-w-[1200px]">
        <h6 className="text-center text-[35px] font-[700] mb-[10px]">
          My Drafts
        </h6>
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
                //onClick={() => handleshowpost(blog)}
                className=" md:w-[48%] border-b md:px-[30px] p-[20px] mx-[10px] my-[15px] bg-slate-200 rounded-lg shadow-lg cursor-pointer "
              >
                {/* Author Name */}

                {/* Content */}
                <div className="flex content-space-between">
                  <h3 className="text-xl font-[500] mb-4">{blog.title}</h3>
                </div>
                <div className="flex text-lg font-bold mb-2 text-[15px]">
                    {blog.author_name}
                    <span className="dot relative top-[13px]"></span>
                    <span className="text-gray-400 text-sm ml-2 relative top-[4px]">
                      {blog.published_at}
                    </span>
                  </div>
                <div className="bg-[#f2f2f2] px-4 py-2 rounded-[25px] cursor-pointer w-[60px]">
                      {blog.topic}
                    </div>

                {/* Image */}
                <div className="flex flex-col-reverse md:flex-row md:justify-between items-center mb-4">
                  <div className="md:max-w-[70%]">
                    {" "}
                    <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">
                      {blog.text}
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
                   

                      {/* <div className="flex">
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
                      </div> */}
                    </div>
                    <div className="flex gap-3 mt-[15px]">
                      <button
                        className="rounded-[25px] bg-slate-500 text-white px-[15px] py-[5px]"
                        onClick={() => handleedit(blog)}
                      >
                        Edit
                      </button>
                      <button
                        className="rounded-[25px] bg-green-400  text-white px-[15px] py-[5px]"
                        onClick={() => handledelete(blog)}
                      >
                        Publish
                      </button>
                    </div>
                  </div>

                  <img
                    src={blog.featuredImage}
                    alt="Placeholder"
                    className="my-[10px] w-32 h-32 rounded-md object-cover"
                  />
                </div>

                {/* Categories */}
              </div>
            ))
          ) : (
            <div>No posts to show here</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyDrafts;
