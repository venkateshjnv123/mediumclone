import React from "react";
import "./profile.css";

function profile() {
  return (
    <div>
      <div className="profileDiv px-[50px]">
        <div className="profileDivLeft mr-[100px]">
          <div className="hidden md:block text-[50px] font-[700] mt-[20px] my-[40px] pl-[30px]">
            <span>John Abraham</span>
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
                    <div className="min-w-[30px]">
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
                    <div className="min-w-[30px]">
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
                    <div className="min-w-[30px]">
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
                    <div className="min-w-[30px]">
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
                    <div className="min-w-[30px]">
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
              <button className="profileShowAll">See All Posts</button>
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
                <h6 className="text-[30px]">John Abraham</h6>
              </div>
            </div>
            <div className="profileName font-[400] my-[20px]">
              <div>
                <h6 className="text-[18px]">johnabraham@gmail.com</h6>
              </div>
            </div>
            <div className="profileName font-[400] mt-[20px] mb-[20px] ">
              <div>
                <h6 className="text-[18px]">+91 9291909491</h6>
              </div>
            </div>

            <div className="hidden md:block md:mb-[40px] mb-[20px]">
              <button className="rounded-[25px] px-[15px] py-[5px] bg-green-500 text-white">
                Follow
              </button>
            </div>
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
                    <span className="font-[500]">Followers: </span>23
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
            <div className="py-[10px] text-[18px]">
              <a>
                <div className="profileName">
                  <div>
                    <span className="font-[500]">Following: </span>23
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

            <div className="block md:hidden my-[10px]">
              <button className="rounded-[25px] px-[15px] py-[5px] bg-green-500 text-white">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
