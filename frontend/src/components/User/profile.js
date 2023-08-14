import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarValidated from "../LandingPage/NavbarValidated";
import axios from "axios";
const saved = [
  {data : " John Doe" , content : " Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnvsdk sdfkinsdkn" },
  {data : " Venkatesh" , content : " Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnvsdk sdfkinsdkn" },
  {data : "Vivek paidi" , content : " Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnvsdk sdfkinsdkn" },
  {data : "Vivek paidi" , content : " Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnvsdk sdfkinsdkn" },
]
const listnames = ['Private', 'finance', 'Technology', 'Business'];
function Profile() {
 const values = JSON.parse(localStorage.getItem('signinvalues'));
  const [savedtoshow, setsavedtoshow] = useState([]);
  const [liststoshow, setliststoshow] = useState([]);
  const [userdetails, setuserdetails] = useState([]);
  const [posts,setPosts] = useState([]);
  const auth_token = localStorage.getItem("jwtToken");
  const headers =  {
    "authToken": auth_token,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json, text/plain, */*'
  }
  //console.log(useSelector((state)=> state.username.value));
  const navigate = useNavigate();
  const handleshowlist = (name) => {
    navigate('/listshow');
  }

  const fetchsaved = () => {
    axios.get(`https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/author/savedPosts`,{headers})
    .then((response) => {
      console.log('Profile details details!', response.data);
      setsavedtoshow(response.data);
      //toast.success("Saved the post");
    })
    .catch((error) => {
      //toast.error("Error saving the post");
      console.error('Error fetching details:', error);
      // Implement error handling logic here
    });
  }

  const fetchplaylist = () => {
    axios.get(`https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/playlists/show/all`,{headers})
    .then((response) => {
      console.log('Fetched the playlist', response.data);
      setliststoshow(response.data);
    })
    .catch((error) => {
      console.error('Error saving topic:', error);
    });
  }

  const fetchuserdetails = () => {
    axios
    .get(
      `https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/author/my/details`,
      { headers }
    )
    .then((response) => {
      console.log("User details", response.data);
      setuserdetails(response.data);
    })
    .catch((error) => {
      // toast.error("Error searching the author");
      console.error("Error fetching details:", error);
      // Implement error handling logic here
    });
  };

  const fetchmyposts = () => {
    axios
      .get(
        "https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/get/myPost",
        { headers }
      )
      .then((response) => {
        console.log("Fetched the posts", response.data);
        // toast.success("Fetched the posts");
        setPosts(response.data);
      })
      .catch((error) => {
        // toast.error("Error saving the post");
        console.error("Error saving topic:", error);
        // Implement error handling logic here
      });
  }
useEffect(()=>{
  fetchsaved();
  fetchplaylist();
  fetchuserdetails();
  fetchmyposts();
}, [])
  const handledelete = (index) => {
    listnames.splice(index, 1);
    console.log(listnames);
    setliststoshow(listnames);
    console.log(liststoshow);
  }

  const handleopen =  (content) => {
    navigate("/postpage" , {state : {id : content['post_id'], authorid : "1"}})
  }

  const handlesaved = (index1) => {
    saved.splice(index1, 1);
    setsavedtoshow(listnames);
  }

  return (
    <div>
      <NavbarValidated/>
      <div className="profileDiv px-[50px] mt-[50px]">
        <div className="profileDivLeft mr-[100px]">
          <div className="hidden md:block text-[50px] font-[700] mt-[20px] my-[40px] pl-[30px]">
          {userdetails.name}
          </div>

          <hr />

          <div className="w-[90%] md:w-4/5 mx-auto my-[40px]">
            <div className="text-[30px] font-[700] my-[10px]">
              <span>My Lists</span>
            </div>

            <div>
              <ol className="profileList">
                {
                  liststoshow.map((option,index)=>(
                    <a>
                    <div className="profileMyListItem">
                      <li className="text-[20px]">
                        <div>
                          <span className="text-[#121212]">{option.name}</span>
                        </div>
                      </li>
                      <div className="flex gap-3 relative top-[8px]">
                        <Link to='/listshow' state = {{name : option.id}}>
                        <div className="cursor-pointer">
                          <img
                            className="profileOpenLink"
                            src="https://static.thenounproject.com/png/196595-200.png"
                            alt="->"
                          />
                        </div>
                        </Link>
                        
                   <div className="cursor-pointer" onClick={(index)=> handledelete(index)}>
                          <img
                            className="profileOpenLink"
                            src="https://thenounproject.com/api/private/icons/2994180/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  ))
                }
              </ol>
            </div>
          </div>

          <div className="w-[90%] md:w-4/5 mx-auto my-[40px]">
            <div className="text-[30px] font-[700] my-[10px]">
              <span>Saved for later</span>
            </div>

            <div>
              <ol className="profileList">
                {
                  savedtoshow.map((content, index) => (
<a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[80%] text-[15px] font-[500]">
                        <span>
                          {content.post_title}
                        </span>
                        <br />
                        <span className="text-[13px] pl-[10px] font-[400]">
                          Author: {content.author_name}
                        </span>
                      </div>
                    </li>
                    <div className="flex gap-3">
                      <div className="cursor-pointer" onClick={()=>handleopen(content)}>
                        <img
                          className="profileOpenLink"
                          src="https://static.thenounproject.com/png/196595-200.png"
                          alt="->"
                        />
                      </div>
                      <div className="cursor-pointer" onClick={(index)=> handlesaved(index)} >
                        <img
                          className="profileOpenLink"
                          src="https://thenounproject.com/api/private/icons/2994180/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                  ))
                }
                
              </ol>
            </div>

            <div className="profileShowAllDiv my-[30px]">
            <Link to='/otherposts' state = {{name : "Save for later"}}>
              <button className="profileShowAll">Show All</button>
            </Link>
            </div>
          </div>
        </div>

        <div className="profileDivRight py-[40px] pr-[30px]">
          <div className="pl-[30px] md:pl-[50px]">
            <div>
              <img
                className="imgProfileUser rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="profileName font-[700] my-[20px]">
              <div>
                <h6 className="text-[30px]">{userdetails.name}</h6>
              </div>
              {/* <div>
                <a>
                  <img
                    className="profileEditLink"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                    alt="->"
                  />
                </a>
              </div> */}
            </div>
            <div className="profileName font-[400] my-[20px]">
              <div>
              {values ? <h6 className="text-[20px]">{values['email']}</h6> 
          : <h6 className="text-[20px]">Email : {userdetails.email}</h6>
          }
                
              </div>
            </div>
            <div className="profileName font-[400] mt-[20px] mb-[20px] md:mb-[40px]">
              <div>
                <h6 className="text-[18px]">About : {userdetails.about}</h6>
              </div>
            </div>
            {/* <div className="profileName font-[400] mt-[20px] mb-[20px] md:mb-[40px]">
             <button className="rounded-[25px] px-[15px] py-[5px] bg-green-500 text-white">edit profile</button>
            </div> */}

          </div>

          <hr className="profilehr" />

          <div className="pl-[30px] md:pl-[50px]">
            <div className="py-[10px] text-[20px]">
              <a>
                <div className="profileName">
                  <div>
                    <span className="font-[500]">Followers: </span>{userdetails.followers_count}
                  </div>
                  <div>
                    <img
                      className="profileOpenLink"
                      src="https://static.thenounproject.com/png/196595-200.png"
                      alt="->"
                    />
                  </div>
                </div>
              </a>
            </div>
            <Link to="/mydrafts">
            <button className="rounded-full bg-slate-200 py-1 px-2 mx-1">  My Drafts</button>
                {/* <img src={happyface} alt="happyface" /> */}
               
            
              </Link>
            <Link to="/myposts">
            <button className="rounded-full bg-slate-200 py-1 px-2  mx-1"> My Posts</button>
              </Link>

            <div>
              <h6>My posts</h6>
              <ol className="profileList">
                {posts.map((blog) => (
                  <a>
                    <div className="profileMyListItem">
                      <li className="text-[20px]">
                        <div>
                          <span className="text-[#121212]">{blog.title}</span>
                        </div>
                      </li>
                      {/* <div className="flex gap-3 relative top-[8px]">
                        <Link to="/otherposts">
                          <div className="cursor-pointer">
                            <img
                              className="profileOpenLink"
                              src="https://static.thenounproject.com/png/196595-200.png"
                              alt="->"
                            />
                          </div>
                        </Link>

                        <div
                          className="cursor-pointer"
                          onClick={(index) => handledelete(index)}
                        >
                          <img
                            className="profileOpenLink"
                            src="https://thenounproject.com/api/private/icons/2994180/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                            alt=""
                          />
                        </div>
                      </div> */}
                    </div>
                  </a>
                ))}
              </ol>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
