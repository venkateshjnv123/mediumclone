import React, { Component, useState } from 'react';
import AvatarMenu from './AvatarMenu';

function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
    return(
<nav className="bg-blue-500 p-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Search Bar (Replace the input field with your actual search implementation) */}
        <div className="bg-white rounded-lg px-4 py-2 mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 sm:w-48 focus:outline-none"
          />
        </div>

        {/* Logo or Navbar title */}
        <span className="text-white text-lg font-bold">Your Logo</span>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* Avatar */}
        <button
          className="flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src="/path-to-your-avatar-image.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="hidden sm:inline-block">Your Username</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 00-6 6c0 1.747.77 3.311 2 4.389v1.153A3.968 3.968 0 008 16a3.968 3.968 0 002-.558v-1.153A4.008 4.008 0 0012 10a6 6 0 00-6-6zm1 14a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Avatar Dropdown */}
        {isMenuOpen && <AvatarMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
    )
}

export default Navbar;