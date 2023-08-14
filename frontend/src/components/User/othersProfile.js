import React, { useEffect, useState } from "react";
import "./profile.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarValidated from "../LandingPage/NavbarValidated";
import axios from "axios";
function Profile() {
const navigate = useNavigate();
const location = useLocation();
const [details, setdetails] = useState([]);
const id = location.state.authorid ;
  const handleShowposts = (name) => {
    navigate('/otherposts' , {state : {name : name}})
  };
  const auth_token = localStorage.getItem("jwtToken");
  const headers =  {
    "authToken": auth_token,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json, text/plain, */*'
  }

  const fetchdetails = () => {
    axios.get(`https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/author/details/${id}`, {headers})
    .then((response) => {
      console.log('Added the playlists', response.data);  
      setdetails(response.data);
    })
    .catch((error) => {
      console.error('Error saving topic:', error);
    });
  };
  useEffect(()=>{
fetchdetails();
  },[])
  const gotopost = (name) => {
    navigate('/postpage',{state : {name : name}});
  }
  return (
    <div>
      <NavbarValidated/>
      <div className="profileDiv px-[50px] mt-[70px]">
        <div className="profileDivLeft mr-[100px]">
          <div className="hidden md:block text-[50px] font-[700] mt-[20px] my-[40px] pl-[30px]">
            <span>{details['name']}</span>
          </div>

          <hr />

          <div className="w-[90%] md:w-4/5 mx-auto my-[40px]">
            <div className="text-[30px] font-[700] my-[10px]">
              <span>Top Posts</span>
            </div>

            <div>
              <ol className="profileList">
                <a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[70%] text-[15px] font-[500]">
                        <span>
                          Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnv
                          sdk sdfkinsdkn
                        </span>
                        <br />
                        <span className="text-[12px] pl-[10px] font-[400]">
                          Date: Aug 8, 2023{" "}
                        </span>
                      </div>
                    </li>
                    <div className="cursor-pointer min-w-[30px]" onClick={() => gotopost("venky")}>
                      <img
                        className="profileOpenLink"
                        src="https://static.thenounproject.com/png/196595-200.png"
                        alt="->"
                      />
                    </div>
                  </div>
                </a>

                <a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[80%] text-[15px] font-[500]">
                        <span>
                          Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnv
                          sdk sdfkinsdkn
                        </span>
                        <br />
                        <span className="text-[12px] pl-[10px] font-[400]">
                          Date: Aug 8, 2023{" "}
                        </span>
                      </div>
                    </li>
                    <div className="cursor-pointer min-w-[30px]" onClick={() => gotopost("venky")}>
                      <img
                        className="profileOpenLink"
                        src="https://static.thenounproject.com/png/196595-200.png"
                        alt="->"
                      />
                    </div>
                  </div>
                </a>

                <a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[80%] text-[15px] font-[500]">
                        <span>
                          Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnv
                          sdk sdfkinsdkn
                        </span>
                        <br />
                        <span className="text-[12px] pl-[10px] font-[400]">
                          Date: Aug 8, 2023{" "}
                        </span>
                      </div>
                    </li>
                    <div className="cursor-pointer min-w-[30px]" onClick={() => gotopost("venky")}>
                      <img
                        className="profileOpenLink"
                        src="https://static.thenounproject.com/png/196595-200.png"
                        alt="->"
                      />
                    </div>
                  </div>
                </a>

                <a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[80%] text-[15px] font-[500]">
                        <span>
                          Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnv
                          sdk sdfkinsdkn
                        </span>
                        <br />
                        <span className="text-[12px] pl-[10px] font-[400]">
                          Date: Aug 8, 2023{" "}
                        </span>
                      </div>
                    </li>
                    <div className="cursor-pointer min-w-[30px]" onClick={() => gotopost("venky")}>
                      <img
                        className="profileOpenLink"
                        src="https://static.thenounproject.com/png/196595-200.png"
                        alt="->"
                      />
                    </div>
                  </div>
                </a>

                <a>
                  <div className="profileMyListItem">
                    <li>
                      <div className="max-w-[80%] text-[15px] font-[500]">
                        <span>
                          Oppenheimer is smdn asfna msfciansdfJ zdjbndzx vkdnv
                          sdk sdfkinsdkn
                        </span>
                        <br />
                        <span className="text-[12px] pl-[10px] font-[400]">
                          Date: Aug 8, 2023{" "}
                        </span>
                      </div>
                    </li>
                    <div className="cursor-pointer min-w-[30px]" onClick={() => gotopost("venky")}>
                      <img
                        className="profileOpenLink"
                        src="https://static.thenounproject.com/png/196595-200.png"
                        alt="->"
                      />
                    </div>
                  </div>
                </a>
              </ol>
            </div>

            <div className="profileShowAllDiv my-[30px]">
              <button className="profileShowAll" onClick={()=>handleShowposts("venkatesh")}>See All Posts</button>
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
                <h6 className="text-[30px]">{details['name']}</h6>
              </div>
            </div>
            <div className="profileName font-[400] my-[20px]">
              <div>
                <h6 className="text-[18px]">Email : {details['email']}</h6>
              </div>
            </div>
            {/* <div className="profileName font-[400] mt-[20px] mb-[20px] ">
              <div>
                <h6 className="text-[18px]">About : {details['about']}</h6>
              </div>
            </div> */}

            {/* <div className="hidden md:block md:mb-[40px] mb-[20px]">
              <button className="rounded-[25px] px-[15px] py-[5px] bg-green-500 text-white">
                Follow
              </button>
            </div> */}
          </div>

          <hr className="profilehr" />

          <div className="pl-[30px] md:pl-[50px]">
            <div className="pt-[10px] md:pt-[40px] pb-[10px] text-[18px]">
              <a>
                <div className="profileName">
                  <div>
                    <span className="font-[500]">Total Posts: </span>23
                  </div>
                  {/* <div>
                    <img
                      className="profileOpenLink"
                      src="https://static.thenounproject.com/png/196595-200.png"
                      alt="->"
                    />
                  </div> */}
                </div>
              </a>
            </div>
            <div className="py-[10px] text-[18px]">
              <a>
                <div className="profileName">
                  <div>
                    <span className="font-[500]">Followers: </span>{details.followers_count}
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
            {/* <div className="block md:hidden my-[10px]">
              <button className="rounded-[25px] px-[15px] py-[5px] bg-green-500 text-white">
                Follow
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
