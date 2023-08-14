import React, { useEffect, useState } from "react";
import "./homePosts.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const trending = [
  {
    name: "John Abraham",
    title:
      "Oppenheimer Isn't a Story About the Atomic Bomb, It's About Ourselves Oppenheimer Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "Aug 9",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "John Abraham",
    title: " Oppenheimer Isn't a ",
    date: "Aug 9",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "John Abraham",
    title: " Oppenheimer",
    date: "Aug 9",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "John Abraham",
    title:
      " Oppenheimer Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "Aug 9",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "John Abraham",
    title:
      " Oppenheimer Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "Aug 9",
    read: "8 min read",
    topic: "science",
  },
];

const recommended = [
  {
    name: "Venkatesh",
    title:
      " Story of the life Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "dec 25",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "Venkatesh",
    title:
      " Story of the life Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "dec 25",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "Venkatesh",
    title:
      " Story of the life Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "dec 25",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "Venkatesh",
    title:
      " Story of the life Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "dec 25",
    read: "8 min read",
    topic: "science",
  },
];

const mostliked = [
  {
    name: "vivek paidi",
    title:
      " Frontend development Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "nov 4",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "vivek paidi",
    title:
      " Frontend development Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "nov 4",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "vivek paidi",
    title:
      " Frontend development Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "nov 4",
    read: "8 min read",
    topic: "science",
  },
  {
    name: "vivek paidi",
    title:
      " Frontend development Isn't a Story About the Atomic Bomb, It's About Ourselves",
    date: "nov 4",
    read: "8 min read",
    topic: "science",
  },
];

function HomePosts() {
  const navigate = useNavigate();
  const [poststoshow, setpoststoshow] = useState(trending);
  console.log(trending);
  console.log(poststoshow);
  const handlechangeposts = (topic) => {
    setPosts(topic);
  };

  const handleclickauthor = (name) => {
    navigate("/oprofile");
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handletoppost();
  }, []);

  const auth_token = localStorage.getItem("jwtToken");
  const headers = {
    authToken: auth_token,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json, text/plain, */*",
  };

  const handletoppost = () => {
    axios
      .get(
        "https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/get/topPosts",
        { headers }
      )
      .then((response) => {
        console.log("Fetched the top posts", response.data);
        // toast.success("Fetched the posts");
        setPosts(response.data);
      })
      .catch((error) => {
        // toast.error("Error saving the post");
        console.error("Error saving topic:", error);
        // Implement error handling logic here
      });
  };

  const handlerecpost = () => {
    axios
      .get(
        "https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/post/recommended?topic_id=1",
        { headers }
      )
      .then((response) => {
        console.log("Fetched the rec posts", response.data);
        // toast.success("Fetched the posts");
        setPosts(response.data);
      })
      .catch((error) => {
        // toast.error("Error saving the post");
        console.error("Error saving topic:", error);
        // Implement error handling logic here
      });
  };

  return (
    <div className="my-[30px] px-[10px] w-full md:min-w-[1200px]">
      <div className="filterHomeDiv">
        <span
          onClick={() => handletoppost()}
          className="cursor-pointer filterHomeBtn filterHomeBtnL bg-slate-200 hover:bg-slate-700 hover:text-white w-full"
        >
          Top posts
        </span>
        <span
          onClick={() => handlechangeposts(recommended)}
          className="cursor-pointer filterHomeBtn bg-slate-200 hover:bg-slate-700 hover:text-white"
        >
          Recommended
        </span>
        <span
          onClick={() => handlechangeposts(mostliked)}
          className="cursor-pointer filterHomeBtn filterHomeBtnR bg-slate-200 hover:bg-slate-700 hover:text-white"
        >
          Most Liked
        </span>
      </div>

      <div className="my-[25px] md:my-[0px]">
        <div className="flex flex-wrap homePostsDiv md:my-[50px]">
          {/* {poststoshow.map((post, index) => ( */}
          {posts.map((post, index) => (
            <div className="homePosts flex justify-start mx-auto md:mx-[0px] my-[15px] md:my-[0px] w-1/2">
              <div className="postNumbering">
                <span>{index + 1}</span>
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
                    <h6
                      onClick={() => handleclickauthor(post.name)}
                      className="cursor-pointer"
                    >
                      {post.author_name}
                      {/* {post.name} */}
                    </h6>
                  </div>
                </div>
                <div
                  className="font-bold my-[10px]"
                  style={{ width: "fit-content" }}
                >
                  <h6 className="max-w-[500px]">{post.title}</h6>
                </div>
                <div
                  className="my-[10px]"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span>{post.published_at}</span>
                  <span className="dot"></span>
                  <span>8 min read</span>
                  <span className="dot"></span>
                  <span className="homePostTag">{post.topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePosts;
