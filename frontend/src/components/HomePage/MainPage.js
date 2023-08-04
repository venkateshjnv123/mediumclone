import React, { Component, useEffect, useState } from "react";
import Navbar from "./Navbar";
import HorizontalScroll from 'react-scroll-horizontal';
import './mainpage.css';
import TabContent from "./TabContent";

function HomePage() {
  const [selectedTab, setSelectedTab] = useState('For You');
  const fetchapi = async() => {
    const url = 'https://medium2.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'de0ca2eba2msh61c7217b5c37ebdp16228fjsnddac264565f5',
        'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
  }


  useEffect(()=>{
    fetchapi();
  }, [])

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const tabOptions = [
    'For You',
    'Following',
    'Software Development',
    'Startup',
    'Software Engineering',
    'Technology',
    'Self Improvement',
    'Data Science',
    'Programming',
 ]
 const recommendedCategories = ['Software Development','Startup', 'Software Development','Startup','Software Development','Startup','Software Development'];

  return (
    <div className="mainpage">
      <Navbar />
      <div className="flex items-star overflow-x-hidden">
      <div className="w-2/3 md:w-2/3 md:mr-2 mx-4 ">
      <div className="overflow-x-scroll whitespace-nowrap relative">
        {tabOptions.map((tab) => (
          <div
            key={tab}
            className={`px-4 py-2 cursor-pointer inline-block bg-slate-200 ${
              selectedTab === tab ? 'text-blue-500 font-bold' : 'text-gray-700'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
        </div>
    
        <div className="w-full mt-4">
        <TabContent selectedTab={selectedTab} />
      </div>
      </div>
  

      <div className="w-1/3 md:w-1/3 md:ml-2 mt-2 md:mt-0 mx-2">
        {/* Recommended Categories */}
        <div className="text-sm mb-2">Recommended Categories:</div>
        <div className="bg-gray-100 rounded-lg p-2 flex flex-wrap gap-2">
          {recommendedCategories.map((category) => (
            <div
              key={category}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Other Usernames */}
        <div className="text-sm mt-4 mb-2">U may be interested in</div>
        <div className="bg-gray-100 rounded-lg px-4 py-2">
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
