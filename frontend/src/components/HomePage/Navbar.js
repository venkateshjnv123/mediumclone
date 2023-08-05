import React, { Component, useState } from 'react';
import AvatarMenu from './AvatarMenu';
import avatar from '../Images/avatar.png';
import ScrollContainer from 'react-scroll-horizontal';
import { Link } from 'react-router-dom';

function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
    return(
<nav className="bg-white p-2 flex items-center justify-between mx-4 h-16" style={{borderBottom : '1px solid F2F2F2;'}}>
      {/* Left Section */}
      <div className="flex items-center">
        {/* Search Bar (Replace the input field with your actual search implementation) */}
        <span className="black-white text-lg font-bold">Medium</span>
        {/* Logo or Navbar title */}
     
      </div>
     
      {/* Right Section */}
      <div className="relative flex flex-row">
        {/* Avatar */}
        <Link to='/add'><p className='mx-2'>Write</p></Link>
     
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="hidden sm:inline-block">Your Username</span>
        </button>

        {/* Avatar Dropdown */}
        {isMenuOpen && <AvatarMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
    )
}

export default Navbar;